import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { CategoriesPage } from "@/components/category";
import { initPocketBase } from "@/utils";
import { CategoriesResponse, UsersResponse } from "@/types";
import { ListResult } from "pocketbase";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  categories: string;
  user: string;
}

const Categories: NextPage<Props> = ({ categories, user }) => {
  const categoriesList = JSON.parse(categories) as CategoriesResponse[];

  const userData = JSON.parse(user) as UsersResponse;
  const { setUser } = useUser()

  useEffectOnce(() => {
    setUser(userData)
  })

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

    const user = pb.authStore.model;

    return {
      props: {
        categories: JSON.stringify(categories),
        user: JSON.stringify(user)
      },
    };
  } catch (_) {
    return {
      props: {
        categories: [],
        user: JSON.stringify(null)
      },
    };
  }
};

export default Categories;
