import React from "react";
import { AdminTitle, Button } from "@/components/common";
import CategoriesTable from "@/components/admin/categories/categories.table";
import Link from "next/link";

const AdminCategoriesPage = () => {
  return (
    <div className={"flex flex-col gap-10 pb-5"}>
      <AdminTitle title={"Manage Food Category"} />
      <div className={"flex flex-col gap-3"}>
        <Link href={"/admin/category/create"}>
          <Button type={"button"}>Add Category</Button>
        </Link>
        <CategoriesTable />
      </div>
    </div>
  );
};

export { AdminCategoriesPage };
