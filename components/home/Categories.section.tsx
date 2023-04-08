import React, { FC } from "react";
import { CategoriesResponse } from "@/types";
import CategoryItem from "@/components/home/Category.item";

interface Props {
  categoriesList: CategoriesResponse[];
}

const Categories: FC<Props> = ({ categoriesList }) => {
  return (
    <div className={"bg-white px-12 py-32"}>
      <h2 className={"text-center text-3xl font-bold text-neutral-900"}>
        Explore Various Food Categories
      </h2>
      <div
        className={
          "mt-9 flex flex-col items-center justify-center gap-9 md:flex-row"
        }
      >
        {categoriesList.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
