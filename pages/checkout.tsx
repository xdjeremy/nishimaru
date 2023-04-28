import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { CheckoutPage, CheckoutTypes } from "@/components/checkout";
import { FormProvider, useForm } from "react-hook-form";
import { initPocketBase } from "@/utils";
import { CartsResponse, FoodsResponse, UsersResponse } from "@/types";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  cart: string;
  user: string;
}

type TExpand = {
  food: FoodsResponse;
};
const Checkout: NextPage<Props> = ({ cart, user }) => {
  const methods = useForm<CheckoutTypes>();
  const cartData = JSON.parse(cart) as CartsResponse<TExpand>[];
  const userData = JSON.parse(user) as UsersResponse;
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(userData);
  });

  return (
    <Layout>
      <FormProvider {...methods}>
        <CheckoutPage cart={cartData} />
      </FormProvider>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    const cart = await pb.collection("carts").getFullList({
      expand: "food",
    });

    const user = pb.authStore.model;

    return {
      props: {
        cart: JSON.stringify(cart),
        user: JSON.stringify(user),
      },
    };
  } catch (_err: any) {
    return {
      props: {
        cart: JSON.stringify([]),
        user: JSON.stringify(null),
      },
    };
  }
};

export default Checkout;
