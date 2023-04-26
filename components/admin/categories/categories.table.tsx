import React, { FC } from "react";
import useSWR from "swr";
import { CategoriesResponse } from "@/types";
import CategoryTableItem from "@/components/admin/categories/categoryItem.table";
import { pocketBaseFetcher } from "@/utils";

const CategoriesTable: FC = () => {
  const { data, error } = useSWR<CategoriesResponse[]>(
    ["categories"],
    pocketBaseFetcher
  );
  console.log(data);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Featured
            </th>
            <th scope="col" className="px-6 py-3">
              Active
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((category) => (
              <CategoryTableItem category={category} key={category.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
