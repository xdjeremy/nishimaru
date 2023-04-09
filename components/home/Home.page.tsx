import React, { FC } from "react";
import HeroSection from "@/components/home/Hero.section";
import Categories from "@/components/home/Categories.section";
import {CategoriesResponse, FoodsResponse} from "@/types";
import BestSeller from "@/components/home/BestSeller.section";

interface Props {
  categories: CategoriesResponse[];
  foods: FoodsResponse[];
}

const HomePage: FC<Props> = ({ categories, foods }) => {
  return (
    <div className={""}>
      <HeroSection />
      <Categories categoriesList={categories} />
      <BestSeller foodsList={foods} />
    </div>
  );
};

export { HomePage };
