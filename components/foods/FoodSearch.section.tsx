import React, { FC } from "react";
import { Search } from "@/components/common";

const FoodSearch: FC = () => {
  return (
    <div className={"bg-sushi bg-cover bg-no-repeat"}>
      <Search />
    </div>
  );
};

export default FoodSearch;
