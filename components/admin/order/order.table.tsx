import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { OrderItemsResponse, OrdersResponse } from "@/types";
import "react-loading-skeleton/dist/skeleton.css";
import OrderTableItem from "@/components/admin/order/orderTable.item";

type IExpand = {
  order_items: OrderItemsResponse[];
};
const orderFetcher = async (database: string): Promise<any> => {
  return pocketBase.collection(database).getFullList({
    expand: "order_items",
  });
};
const OrderTable: FC = () => {
    const {data, error} = useSWR<OrdersResponse<IExpand>[]>(['orders'], orderFetcher);

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
                        Order Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Foods
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Total
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Customer
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Actions
                    </th>
                </tr>
                </thead>
                <tbody>
                {data &&
                    data.map((order) => (
                        <OrderTableItem order={order} key={order.id} />
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
                            <tr
                                key={item}
                                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <th
                                    scope="row"
                                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
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

export default OrderTable;