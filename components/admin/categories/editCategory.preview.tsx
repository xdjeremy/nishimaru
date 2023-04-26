import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { CategoryTypeInput } from "@/components/admin/categories/category.type";
import Image from "next/image";
import { CategoriesResponse } from "@/types";
import { pocketBase } from "@/utils";

interface Props {
  category: CategoriesResponse;
}

const EditCategoryPreview: FC<Props> = ({ category }) => {
  const { getValues } = useFormContext<CategoryTypeInput>();

  const imageUrl = pocketBase.getFileUrl(category, category.image);
  return (
    <div className={"w-full bg-white px-10 py-5 h-96"}>
      <h3 className={"text-xl font-bold "}>{getValues("title")}</h3>
      <Image src={imageUrl} alt={imageUrl} height={300} width={150} />
    </div>
  );
};

export default EditCategoryPreview;
