import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { ListResult } from "pocketbase";
import { FoodsResponse } from "@/types";
import { Layout } from "@/components/layout";
import { FoodsPage } from "@/components/foods";
import { initPocketBase } from "@/utils";

interface Props {
  foods: string;
}

const Foods: NextPage<Props> = ({ foods }) => {
  const foodsList = JSON.parse(foods) as ListResult<FoodsResponse>;

  console.log(foodsList);
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

    return {
      props: {
        foods: JSON.stringify(foods),
      },
    };
  } catch (_) {
    return {
      props: {
        foods: [],
      },
    };
  }
};

export default Foods;
