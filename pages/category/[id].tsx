import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { CategoryPage } from "@/components/category";
import { initPocketBase } from "@/utils";
import {CategoriesResponse, FoodsResponse} from "@/types";
import {ListResult} from "pocketbase";

interface Props {
  category: string;
  foods: string;
}
const Category: NextPage<Props> = ({category, foods}) => {
  const categoryData = JSON.parse(category) as CategoriesResponse;
  const foodsList = JSON.parse(foods) as ListResult<FoodsResponse>;

  return (
    <Layout>
      <CategoryPage category={categoryData} foods={foodsList} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params?.id;
    if (!id || Array.isArray(id)) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const pb = await initPocketBase(ctx);

    const category = await pb.collection("categories").getOne(id);
    if (!category) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const foods = await pb.collection("foods").getList(1, 10, {
      filter: `category.id = '${category.id}'`,
    });

    console.log(foods)

    return {
      props: {
        category: JSON.stringify(category),
        foods: JSON.stringify(foods),
      }
    }
  } catch (_) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Category;
