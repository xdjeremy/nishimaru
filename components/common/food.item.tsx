import React, { FC } from "react";
import { CartsRecord, FoodsResponse } from "@/types";
import Image from "next/image";
import { pocketBase } from "@/utils";
import { SmallButton } from "@/components/common/index";
import toast from "react-hot-toast";

interface Props {
  food: FoodsResponse;
}

const FoodItem: FC<Props> = ({ food }) => {
  const imageUrl = pocketBase.getFileUrl(food, food.image);

  // price with decimal
  const price = food.price.toString().split(".");
  const priceWithDecimal = price[1] ? "" : ".00";

  const addToCart = async () => {
    try {
      // if no user is logged in
      if (!pocketBase.authStore.isValid || !pocketBase.authStore.model) {
        return toast.error("Please login to add items to cart");
      }

      const cartItem: CartsRecord = {
        food: food.id,
        active: true,
        quantity: 1,
        user: pocketBase.authStore.model?.id,
      };

      await pocketBase.collection("carts").create(cartItem);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div
      className={
        "flex w-full max-w-lg flex-row gap-7 rounded-xl bg-white px-7 py-4"
      }
    >
      <Image
        src={imageUrl}
        alt={food.title}
        className={"h-36 w-full max-w-[100px]"}
        width={100}
        height={100}
      />
      <div>
        <h3 className={"font-bold"}>{food.title}</h3>
        <span className={"text-xl"}>
          Php {food.price}
          {priceWithDecimal}
        </span>
        <p className={"line-clamp-3 h-16 text-sm text-[#747d8c]"}>
          {food.description}
        </p>
        <div className={"mt-3.5"}>
          <SmallButton onClick={addToCart} type={"button"}>
            Order Now
          </SmallButton>
        </div>
      </div>
    </div>
  );
};

export { FoodItem };
