import React, { FC } from "react";
import { FoodsResponse } from "@/types";
import { FoodItem, Title } from "@/components/common";
import { ListResult } from "pocketbase";

interface Props {
  foods: ListResult<FoodsResponse>;
}

const FoodsList: FC<Props> = ({ foods }) => {
  return (
    <div className={"py-16 mx-4"}>
      <Title content={"Sushi Sets"} />
      <div
        className={
          "mx-auto mt-11 grid w-fit grid-cols-1 justify-items-center gap-7 lg:grid-cols-2"
        }
      >
        {foods.items.map((food) => (
          <FoodItem food={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodsList;
