import React from "react";
import { AdminLayout } from "@/components/layout";
import {
  EditFoodItemsPage,
  FoodItemsType,
} from "@/components/admin/food-items";
import { GetServerSideProps, NextPage } from "next";
import { initPocketBase } from "@/utils";
import {
  CategoriesResponse,
  FoodsResponse,
  UsersResponse,
  UsersTypeOptions,
} from "@/types";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  food: string;
  categories: string;
}

type Category = {
  category: CategoriesResponse
}
const EditFoodItems: NextPage<Props> = ({ food, categories }) => {
  const foodData = JSON.parse(food) as FoodsResponse<Category>;
  const categoriesData = JSON.parse(categories) as CategoriesResponse[];
  const methods = useForm<FoodItemsType>();

  return (
    <AdminLayout>
      <FormProvider {...methods}>
        <EditFoodItemsPage food={foodData} categories={categoriesData} />
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

    const food = await pb
      .collection("foods")
      .getOne<CategoriesResponse>(ctx.query.id.toString(), {
        expand: 'category'
      });

    const categories = await pb
      .collection("categories")
      .getFullList<CategoriesResponse>();

    return {
      props: {
        food: JSON.stringify(food),
        categories: JSON.stringify(categories),
      },
    };
  } catch (err: any) {
    return {
      notFound: true,
    };
  }
};

export default EditFoodItems;
