import React, { Dispatch, FC } from "react";
import CartItem from "@/components/checkout/cart.item";
import { ICart } from "@/components/checkout/checkout.page";

interface Props {
  cart: ICart[];
  setCartData: Dispatch<React.SetStateAction<ICart[]>>;
}

const Cart: FC<Props> = ({ cart, setCartData }) => {
  return (
    <div className={"w-full rounded-lg bg-white"}>
      <div className={"flex flex-row items-center justify-between px-5 py-3"}>
        <h2 className={"text-lg font-semibold text-gray-900 dark:text-white"}>
          Cart
        </h2>
        <span className={"text-sm font-medium text-gray-900 dark:text-white"}>
          {cart.length} items
        </span>
      </div>
      <div className={"divide-gray-4 flex flex-col gap-2 divide-y px-5 py-8"}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} setCartData={setCartData} />
        ))}

        <div className={"flex flex-col items-end justify-end pt-4"}>
          <span className={"text-sm font-medium text-gray-900 dark:text-white"}>
            Subtotal
          </span>
          <span className={"text-lg font-bold text-gray-900 dark:text-white"}>
            $21.98
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
