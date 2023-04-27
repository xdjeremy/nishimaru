import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { CheckoutPage, CheckoutTypes } from "@/components/checkout";
import { FormProvider, useForm } from "react-hook-form";
import { initPocketBase } from "@/utils";
import { CartsResponse, FoodsResponse } from "@/types";

interface Props {
  cart: string;
}

type TExpand = {
    food: FoodsResponse
}
const Checkout: NextPage<Props> = ({cart}) => {
  const methods = useForm<CheckoutTypes>();
  const cartData = JSON.parse(cart) as CartsResponse<TExpand>[]
  
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

        const cart = await pb.collection('carts').getFullList({
            expand: 'food'
        })

        console.log(cart);

        return {
            props: {
                cart: JSON.stringify(cart)
            }
        }
    } catch (_err: any) {
        console.log(_err)

        return {
            props: {
                cart: JSON.stringify([])
            }
        }
    }
}

export default Checkout;
