import { Layout } from "@/components/layout";
import { HomePage } from "@/components/home";
import { GetServerSideProps, NextPage } from "next";
import { initPocketBase } from "@/utils";
import { ListResult } from "pocketbase";
import { CategoriesResponse, FoodsResponse, UsersResponse } from "@/types";
import { useEffect } from "react";
import { useUser } from "@/context";

interface Props {
  categories: string;
  foods: string;
  user: string;
}

const Home: NextPage<Props> = ({ categories, foods, user }) => {
  const categoriesList = JSON.parse(categories) as CategoriesResponse[];
  const foodsList = JSON.parse(foods) as FoodsResponse[];
  const userData = JSON.parse(user) as UsersResponse;
  const { setUser } = useUser();

  useEffect(() => {
    setUser(userData);
  }, []);

  return (
    <Layout>
      <HomePage categories={categoriesList} foods={foodsList} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // get categories
    const categories = await pb
      .collection("categories")
      .getFullList<ListResult<CategoriesResponse>>({
        filter: "active = true && featured = true",
      });

    // get foods
    const foods = await pb
      .collection("foods")
      .getFullList<ListResult<FoodsResponse>>({
        filter: "active = true && featured = true",
      });

    // get user
    const user = await pb.authStore.model;

    return {
      props: {
        categories: JSON.stringify(categories),
        foods: JSON.stringify(foods),
        user: JSON.stringify(user),
      },
    };
  } catch (_) {
    return {
      props: {
        categories: JSON.stringify([]),
        foods: JSON.stringify([]),
        user: JSON.stringify(null),
      },
    };
  }
};

export default Home;
