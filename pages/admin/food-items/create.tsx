import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { initPocketBase } from "@/utils";
import { CategoriesResponse, UsersResponse, UsersTypeOptions } from "@/types";
import { AdminLayout } from "@/components/layout";
import { FoodItemsType, NewFoodItemsPage } from "@/components/admin/food-items";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  categories: string;
}

const CreateFoodItems: NextPage<Props> = ({ categories }) => {
  const categoriesData = JSON.parse(categories) as CategoriesResponse[];
  const methods = useForm<FoodItemsType>();

  return (
    <AdminLayout>
      <FormProvider {...methods}>
        <NewFoodItemsPage categories={categoriesData} />
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

    const categories = await pb
      .collection("categories")
      .getFullList<CategoriesResponse>();

    return {
      props: {
        categories: JSON.stringify(categories),
      },
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
};

export default CreateFoodItems;
