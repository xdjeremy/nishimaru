import React, { FC, useEffect, useState } from "react";
import Shipping from "@/components/checkout/shipping";
import Cart from "@/components/checkout/cart";
import { CartsResponse, FoodsResponse, OrderItemsResponse } from "@/types";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { CheckoutTypes } from "@/components/checkout/checkout.types";
import { pocketBase } from "@/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

type TExpand = {
  food: FoodsResponse;
};

interface Props {
  cart: CartsResponse<TExpand>[];
}

export interface ICart {
  id: string;
  quantity: number;
  food: FoodsResponse | undefined;
}

const CheckoutPage: FC<Props> = ({ cart }) => {
  const [cartData, setCartData] = useState<ICart[]>([]);
  const { handleSubmit } = useFormContext<CheckoutTypes>();
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    const data: ICart[] = cart.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        food: item.expand?.food,
      };
    });

    setCartData(data);
  }, [cart]);

  const handleCheckout: SubmitHandler<CheckoutTypes> = async ({
    fullName,
    email,
    address,
  }) => {
    try {
      setIsLoading(true);
      const order_items: OrderItemsResponse[] = [];

      // move items from cart to order_items
      const orderItems = cartData.map((item) => {
        return {
          food: item.food?.id,
          quantity: item.quantity,
          user: pocketBase.authStore.model?.id,
        };
      });

      const saveOrderItems = orderItems.map(async (item) => {
        const i = await pocketBase
          .collection("order_items")
          .create<OrderItemsResponse>(item, {
            $autoCancel: false,
          });
        order_items.push(i);
      });

      // create order
      await Promise.all(saveOrderItems).then(async () => {
        await pocketBase.collection("orders").create({
          user: pocketBase.authStore.model?.id,
          fullName,
          email,
          address,
          order_items: order_items.map((item) => item.id),
        });
      });

      toast.success("Checkout success");

      await router.push("/");
    } catch (err: any) {
      toast.error(err.message);
      console.log(err.message);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div
      className={"mx-auto mb-10 mt-5 w-full max-w-2xl rounded-lg lg:max-w-6xl"}
    >
      <form
        onSubmit={handleSubmit(handleCheckout)}
        className={"flex flex-col gap-6 lg:flex-row"}
      >
        <Shipping />
        <Cart cart={cartData} setCartData={setCartData} isLoading={isLoading} />
      </form>
    </div>
  );
};

export { CheckoutPage };
