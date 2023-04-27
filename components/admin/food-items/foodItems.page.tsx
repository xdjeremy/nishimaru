import React, { FC } from "react";
import FoodItemsTable from "@/components/admin/food-items/foodItems.table";
import { AdminTitle, Button } from "@/components/common";
import Link from "next/link";

const FoodItemsPage: FC = () => {
  return (
    <div className={"flex flex-col gap-10 pb-5"}>
      <AdminTitle title={"Manage Food Items"} />
      <div className={"flex flex-col gap-3"}>
        <Link href={"/admin/food-items/create"}>
          <Button type={"button"}>Add Food</Button>
        </Link>
        <FoodItemsTable />
      </div>
    </div>
  );
};

export { FoodItemsPage };