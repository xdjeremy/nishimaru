import React, { FC } from "react";
import useSWR from "swr";
import { CategoriesResponse } from "@/types";
import CategoryTableItem from "@/components/admin/categories/categoryItem.table";
import { pocketBaseFetcher } from "@/utils";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategoriesTable: FC = () => {
  const { data, error } = useSWR<CategoriesResponse[]>(
    ["categories"],
    pocketBaseFetcher
  );

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
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
          {error && !data && (
            <tr>
              <td colSpan={6} className="text-center">
                <p className="text-red-500">Something went wrong</p>
              </td>
            </tr>
          )}
          {!data && !error && (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <tr key={item} className="border-b bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    <Skeleton />
                  </th>
                  <td className="px-6 py-4">
                    <Skeleton />
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton />
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton />
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton />
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton />
                    <Skeleton />
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
