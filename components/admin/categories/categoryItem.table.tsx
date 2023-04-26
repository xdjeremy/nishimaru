import React, { FC } from "react";
import { CategoriesResponse } from "@/types";
import { pocketBase } from "@/utils";
import Image from "next/image";

interface Props {
  category: CategoriesResponse;
}

const CategoryTableItem: FC<Props> = ({ category }) => {
  const imageUrl = pocketBase.getFileUrl(category, category.image);

  return (
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {category.id}
      </th>
      <td className="px-6 py-4">{category.title}</td>
      <td className="px-6 py-4">
        <Image
          src={imageUrl}
          alt={imageUrl.toString()}
          width={50}
          height={100}
        />
      </td>
      <td className="px-6 py-4">{category.featured ? "Yes" : "No"}</td>
      <td className="px-6 py-4">{category.active ? "Yes" : "No"}</td>
      <td className="px-6 py-4">
        <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 mr-3">
          Edit
        </button>
        <button className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CategoryTableItem;
