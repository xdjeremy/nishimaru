import React, { FC } from "react";
import { Banner } from "@/components/common";
import {CategoriesResponse, FoodsResponse} from "@/types";
import FoodsList from "@/components/category/Foods.list";
import {ListResult} from "pocketbase";

interface Props {
  category: CategoriesResponse;
  foods: ListResult<FoodsResponse>;
}
const CategoryPage: FC<Props> = ({category, foods}) => {
  return (
    <div>
      <Banner content={`Foods on "${category.title}"`} />
      <FoodsList foods={foods} />
    </div>
  );
};

export { CategoryPage };
