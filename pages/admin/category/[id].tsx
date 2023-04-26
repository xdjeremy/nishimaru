import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { AdminLayout } from "@/components/layout";
import {
  CategoryTypeInput,
  EditCategoryPage,
} from "@/components/admin/categories";
import { initPocketBase } from "@/utils";
import { CategoriesResponse, UsersResponse, UsersTypeOptions } from "@/types";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  category: string;
}

const EditCategory: NextPage<Props> = ({ category }) => {
  const categoryData = JSON.parse(category) as CategoriesResponse;
  const methods = useForm<CategoryTypeInput>();

  return (
    <AdminLayout>
      <FormProvider {...methods}>
        <EditCategoryPage category={categoryData} />
      </FormProvider>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // if user is not found
    if (!pb.authStore.isValid) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    // if user is not admin
    const user = await pb
        .collection("users")
        .getOne<UsersResponse>(pb.authStore.model?.id || "");

    if (user.type !== UsersTypeOptions.admin) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    if (!ctx.query.id) {
      return {
        notFound: true,
      };
    }

    const category = await pb
      .collection("categories")
      .getOne<CategoriesResponse>(ctx.query.id.toString());

    return {
      props: {
        category: JSON.stringify(category),
      },
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
};

export default EditCategory;
