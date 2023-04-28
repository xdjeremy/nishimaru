import React, { Dispatch, FC } from "react";
import CartItem from "@/components/checkout/cart.item";
import { ICart } from "@/components/checkout/checkout.page";
import { Button } from "@/components/common";

interface Props {
  cart: ICart[];
  setCartData: Dispatch<React.SetStateAction<ICart[]>>;
  isLoading: boolean;
}

const Cart: FC<Props> = ({ cart, setCartData, isLoading }) => {
  const totalCartPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.food!.price,
    0
  );

  return (
    <div className={"w-full rounded-lg bg-white"}>
      <div className={"flex flex-row items-center justify-between px-5 py-3"}>
        <h2 className={"text-lg font-semibold text-gray-900"}>
          Cart
        </h2>
        <span className={"text-sm font-medium text-gray-900"}>
          {cart.length} items
        </span>
      </div>
      <div className={"divide-gray-4 flex flex-col gap-2 divide-y px-5 py-8"}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} setCartData={setCartData} />
        ))}

        <div className={"flex flex-col items-end justify-end pt-4"}>
          <span className={"text-sm font-medium text-gray-900"}>
            Subtotal
          </span>
          <span
            className={"mb-10 text-lg font-bold text-gray-900"}
          >
            PHP {totalCartPrice.toFixed(2)}
          </span>
          <Button disabled={isLoading} type={"submit"}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
