import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Title } from "@/components/common";
import { Layout } from "@/components/layout";
import { CategoriesPage } from "@/components/category";
import { initPocketBase } from "@/utils";
import { CategoriesResponse } from "@/types";
import { ListResult } from "pocketbase";

interface Props {
  categories: string;
}

const Categories: NextPage<Props> = ({ categories }) => {
  const categoriesList = JSON.parse(categories) as CategoriesResponse[];

  return (
    <Layout>
      <CategoriesPage categories={categoriesList} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    const categories = await pb
      .collection("categories")
      .getFullList<ListResult<CategoriesResponse>>({
        filter: "active = true && featured = true",
      });

    return {
      props: {
        categories: JSON.stringify(categories),
      },
    };
  } catch (_) {
    return {
      props: {
        categories: [],
      },
    };
  }
};

export default Categories;
