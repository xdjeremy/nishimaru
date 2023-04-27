import React, { FC, useEffect, useState } from "react";
import Shipping from "@/components/checkout/shipping";
import Cart from "@/components/checkout/cart";
import { CartsResponse, FoodsResponse } from "@/types";

type TExpand = {
  food: FoodsResponse;
};
interface Props {
    cart: CartsResponse<TExpand>[]
}

export interface ICart {
    id: string;
    quantity: number;
    food: FoodsResponse | undefined;
}
const CheckoutPage: FC<Props> = ({cart}) => {
    const [cartData, setCartData] = useState<ICart[]>([])

    useEffect(() => {

        const data: ICart[] = cart.map((item) => {
            return {
                id: item.id,
                quantity: item.quantity,
                food: item.expand?.food
            }
        })

        setCartData(data)

    }, [cart])

  return (
    <div className={'w-full max-w-2xl lg:max-w-6xl mx-auto mt-5 rounded-lg'}>
      <form className={'flex flex-col lg:flex-row gap-6'}>
        <Shipping />
          <Cart cart={cartData} setCartData={setCartData} />
      </form>
    </div>
  );
};

export { CheckoutPage };
