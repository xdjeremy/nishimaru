import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { pocketBase } from "@/utils";
import { FoodsResponse } from "@/types";

interface Props {
  food: FoodsResponse;
}

const FoodItemsTableItem: FC<Props> = ({ food }) => {
  const imageUrl = pocketBase.getFileUrl(food, food.image);

  // add .00 to price if it's a whole number
  const price = food.price % 1 === 0 ? food.price + ".00" : food.price;

  return (
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {food.id}
      </th>
      <td className="px-6 py-4">{food.title}</td>
      <td className="px-6 py-4">PHP {price}</td>
      <td className="px-6 py-4">
        <Image src={imageUrl} alt={"Not Found"} width={50} height={100} />
      </td>
      <td className="px-6 py-4">{food.featured ? "Yes" : "No"}</td>
      <td className="px-6 py-4">{food.active ? "Yes" : "No"}</td>
      <td className="px-6 py-4">
        <Link
          href={`/admin/food-items/${food.id}`}
          className="mr-3 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
        >
          Edit
        </Link>
        <button className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default FoodItemsTableItem;
