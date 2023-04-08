import React, { FC } from "react";
import { CategoriesResponse } from "@/types";
import { pocketBase } from "@/utils";
import Image from "next/image";

interface Props {
  category: CategoriesResponse;
}

const CategoryItem: FC<Props> = ({ category }) => {
  const fileUrl = pocketBase.getFileUrl(category, category.image);

  return (
    <div className={"relative w-full max-w-[400px] h-[580px] object-contain"}>
      <Image
        src={fileUrl}
        className={"h-auto w-full rounded-xl brightness-75"}
        sizes={"100vw"}
        fill={true}
        alt={category.title}
      />
      <span
        className={"absolute bottom-5 left-5 text-xl font-semibold text-white"}
      >
        {category.title}
      </span>
    </div>
  );
};

export default CategoryItem;
