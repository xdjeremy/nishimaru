import React, { FC } from "react";
import HeroSection from "@/components/home/Hero.section";
import Categories from "@/components/home/Categories.section";
import { CategoriesResponse } from "@/types";

interface Props {
  categories: CategoriesResponse[];
}

const HomePage: FC<Props> = ({ categories }) => {
  return (
    <div className={"w-screen"}>
      <HeroSection />
      <Categories categoriesList={categories} />
    </div>
  );
};

export { HomePage };
