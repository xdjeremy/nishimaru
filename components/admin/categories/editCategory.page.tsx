import React, { FC, useEffect, useState } from "react";
import { CategoriesResponse } from "@/types";
import { AdminTitle } from "@/components/common";
import EditCategoryForm from "@/components/admin/categories/editCategory.form";
import { useFormContext } from "react-hook-form";
import { CategoryTypeInput } from "@/components/admin/categories/category.type";

interface Props {
  category: CategoriesResponse;
}

const EditCategoryPage: FC<Props> = ({ category }) => {
  const { setValue } = useFormContext<CategoryTypeInput>();

  // set values on first load
  useEffect(() => {
    setValue("title", category.title);
    setValue("featured", category.featured || false);
    setValue("active", category.active || false);
  }, [category.active, category.featured, category.title, setValue]);

  return (
    <div className={"flex flex-col gap-10 pb-5"}>
      <AdminTitle title={`Edit ${category.title} Category`} />
      <div>
        <EditCategoryForm category={category} />
      </div>
    </div>
  );
};

export { EditCategoryPage };
