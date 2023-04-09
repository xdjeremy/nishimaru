import React, { FC } from "react";
import { Title } from "@/components/common";
import { CategoryItem } from "@/components/home";
import { CategoriesResponse } from "@/types";

interface Props {
  categories: CategoriesResponse[];
}

const CategoriesPage: FC<Props> = ({ categories }) => {
  return (
    <div className={"my-11 flex flex-col"}>
      <Title content={"Explore Foods"} />
      <div className={"flex flex-col items-center mt-7 gap-9 lg:flex-row justify-center px-4"}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export { CategoriesPage };
