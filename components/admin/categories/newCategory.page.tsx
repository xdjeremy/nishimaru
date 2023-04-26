import React, { FC } from "react";
import NewCategoryForm from "@/components/admin/categories/newCategory.form";
import { AdminTitle } from "@/components/common";

const NewCategoryPage: FC = () => {
  return (
    <div className={"mx-auto flex w-full max-w-4xl flex-col gap-5"}>
      <AdminTitle title={`Add Category`} />
      <NewCategoryForm />
    </div>
  );
};

export { NewCategoryPage };
