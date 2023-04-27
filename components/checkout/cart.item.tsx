import React, { ChangeEvent, Dispatch, FC } from "react";
import Image from "next/image";
import { pocketBase } from "@/utils";
import { ICart } from "@/components/checkout/checkout.page";

interface Props {
  item: ICart;
  setCartData: Dispatch<React.SetStateAction<ICart[]>>;
}

const CartItem: FC<Props> = ({ item, setCartData }) => {
  const imageUrl = pocketBase.getFileUrl(item.food!, item.food?.image!);

  // add .00 to price if it's a whole number
  const price =
    item?.food?.price! % 1 === 0
      ? item?.food?.price + ".00"
      : item?.food?.price;

  // calculate total price & round to 2 decimal places
  const totalPrice = (item.quantity * item.food!.price).toFixed(2);

  const updateQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setCartData((prev) => {
      const found = prev.find((cart) => cart.id === item.id);
      if (found) {
        found.quantity = parseInt(e.target.value);
      }
      return [...prev];
    });
  };

  return (
    <div className={"flex flex-row items-center gap-10 py-5"}>
      <Image
        src={imageUrl}
        alt={item?.food?.title || ""}
        width={100}
        height={100}
      />
      <div className={"flex flex-col gap-3"}>
        <div className={"flex flex-col"}>
          <span className={"font-semibold"}>{item?.food?.title}</span>
          <span className={"text-sm text-gray-500"}>
            {item.quantity} x PHP {price}
          </span>
          <span className={"text-sm text-gray-800"}>
            Total: PHP {totalPrice}
          </span>
        </div>
        <div>
          <label
            htmlFor="visitors"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Quantity
          </label>
          <input
            onChange={updateQuantity}
            value={item.quantity}
            type="number"
            id="visitors"
            className="block w-16 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
