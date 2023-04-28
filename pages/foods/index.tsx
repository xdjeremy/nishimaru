import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { ListResult } from "pocketbase";
import { FoodsResponse, UsersResponse } from "@/types";
import { Layout } from "@/components/layout";
import { FoodsPage } from "@/components/foods";
import { initPocketBase } from "@/utils";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  foods: string;
  user: string;
}

const Foods: NextPage<Props> = ({ foods, user }) => {
  const foodsList = JSON.parse(foods) as ListResult<FoodsResponse>;

  const userData = JSON.parse(user) as UsersResponse;
  const { setUser } = useUser()

  useEffectOnce(() => {
    setUser(userData)
  })
  return (
    <Layout>
      <FoodsPage foods={foodsList} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    const foods = await pb.collection("foods").getList(1, 20, {
      filter: "active = true",
    });

    const user = pb.authStore.model;

    return {
      props: {
        foods: JSON.stringify(foods),
        user: JSON.stringify(user)
      },
    };
  } catch (_) {
    return {
      props: {
        foods: [],
        user: JSON.stringify(null)
      },
    };
  }
};

export default Foods;
