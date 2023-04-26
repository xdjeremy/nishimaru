import React, { FC } from "react";
import FoodItemsTable from "@/components/admin/food-items/foodItems.table";
import { AdminTitle } from "@/components/common";

const FoodItemsPage: FC = () => {
  return (
    <div className={"flex flex-col gap-10 pb-5"}>
      <AdminTitle title={"Manage Food Items"} />
      <FoodItemsTable />
    </div>
  );
};

export { FoodItemsPage };