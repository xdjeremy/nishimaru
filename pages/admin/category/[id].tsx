import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { AdminLayout } from "@/components/layout";
import {CategoryTypeInput, EditCategoryPage} from "@/components/admin/categories";
import { initPocketBase } from "@/utils";
import { CategoriesResponse } from "@/types";
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

// todo: block users who are not admin
export default EditCategory;
