import React, { FC } from "react";
import { FoodsResponse } from "@/types";
import { ListResult } from "pocketbase";
import { FoodItem, Title } from "@/components/common";
import FoodSearch from "@/components/foods/FoodSearch.section";

interface Props {
  foods: ListResult<FoodsResponse>;
}

const FoodsPage: FC<Props> = ({ foods }) => {
  return (
    <div>
      <FoodSearch />
      <div className={"m-14"}>
        <Title content={"Sushi Sets"} />
        <div className={"mx-auto grid w-fit grid-cols-1 lg:grid-cols-2 justify-items-center mt-14 gap-7"}>
          {foods.items.map((food) => (
            <FoodItem food={food} key={food.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { FoodsPage };
