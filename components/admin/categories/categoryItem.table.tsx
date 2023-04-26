import React, { FC } from "react";
import { CategoriesResponse } from "@/types";
import { pocketBase } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface Props {
  category: CategoriesResponse;
}

const CategoryTableItem: FC<Props> = ({ category }) => {
  const imageUrl = pocketBase.getFileUrl(category, category.image);
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await pocketBase.collection("categories").delete(category.id);

      toast.success("Category deleted successfully");
      router.reload();
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

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
        <Link
          href={`/admin/category/${category.id}`}
          className="mr-3 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
        >
          Edit
        </Link>
        <button onClick={handleDelete} className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CategoryTableItem;
