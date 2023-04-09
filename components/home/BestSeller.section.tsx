import React, { FC } from "react";
import { FoodsResponse } from "@/types";
import Link from "next/link";
import {FoodItem} from "@/components/common";

interface Props {
  foodsList: FoodsResponse[];
}

const BestSeller: FC<Props> = ({ foodsList }) => {
  return (
    <div className={"bg-neutral-100 px-12 py-32"}>
      <h2 className={"text-center text-3xl font-bold text-neutral-900"}>
        Best Seller Sushi Sets
      </h2>
      <div
        className={
          "mx-auto mt-11 grid w-fit grid-cols-1 justify-items-center gap-7 lg:grid-cols-2"
        }
      >
        {foodsList.map((food) => (
          <FoodItem food={food} key={food.id} />
        ))}
      </div>
      <span className={"flex w-full flex-col items-center justify-center mt-7"}>
        <Link href={"/foods"} className={"text-center text-[#5d9e5f]"}>
          See All Foods
        </Link>
      </span>
    </div>
  );
};

export default BestSeller;
