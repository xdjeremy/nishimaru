import React, { FC } from "react";
import { Button, Input } from "@/components/common";

const FoodSearch: FC = () => {
  return (
    <div className={"bg-sushi bg-cover bg-no-repeat"}>
      <div
        className={
          "mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-3.5 px-14 py-16 md:flex-row md:gap-1 md:py-20 xl:py-28"
        }
      >
        <Input type={"text"} placeholder={"Search Foods"} />
        <div className={"w-full md:w-20"}>
          <Button type={"submit"}>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default FoodSearch;
