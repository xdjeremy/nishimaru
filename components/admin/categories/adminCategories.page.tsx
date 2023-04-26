import React from "react";
import { AdminTitle, Button } from "@/components/common";
import CategoriesTable from "@/components/admin/categories/categories.table";

const AdminCategoriesPage = () => {
  return (
    <div className={"flex flex-col gap-10"}>
      <AdminTitle title={"Manage Food Category"} />
      <div className={'flex flex-col gap-3'}>
        <Button type={"button"}>Add Category</Button>
        <CategoriesTable />
      </div>
    </div>
  );
};

export { AdminCategoriesPage };
