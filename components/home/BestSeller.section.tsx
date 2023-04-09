import React, { FC } from "react";
import {FoodsResponse} from "@/types";
import BestSellerItem from "@/components/home/BestSeller.item";

interface Props {
  foodsList: FoodsResponse[];
}
const BestSeller: FC<Props> = ({foodsList}) => {
  return (
    <div className={"bg-neutral-100 px-12 py-32"}>
      <h2 className={"text-center text-3xl font-bold text-neutral-900"}>
        Best Seller Sushi Sets
      </h2>
      <div className={'grid grid-cols-1 justify-items-center mt-11 gap-7 w-fit mx-auto lg:grid-cols-2'}>
        {
          foodsList.map((food) => (
            <BestSellerItem food={food} key={food.id} />
          ))
        }
      </div>
    </div>
  );
};

export default BestSeller;
