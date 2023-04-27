import React, { FC } from "react";
import { OrderItemsResponse, OrdersResponse } from "@/types";

type IExpand = {
  order_items: OrderItemsResponse[];
};
interface Props {
    order: OrdersResponse<IExpand>;
}
const OrderTableItem: FC<Props> = ({order}) => {

    console.log(order);
    return (
        <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
                {order.id}
            </th>
            <td className="px-6 py-4">{order.created}</td>
            <td className="px-6 py-4">{order.expand?.order_items.map((item) => item.food)}</td>
            <td className="px-6 py-4">
                {order.expand?.order_items.map((item) => item.quantity)}
            </td>
            <td className="px-6 py-4">
                {/*{order.expand?.order_items.map((item) => item.)}*/}
            </td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">
                {/*<Link*/}
                {/*    href={`/admin/food-items/${food.id}`}*/}
                {/*    className="mr-3 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"*/}
                {/*>*/}
                {/*    Edit*/}
                {/*</Link>*/}
                {/*<button*/}
                {/*    onClick={handleDelete}*/}
                {/*    className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"*/}
                {/*>*/}
                {/*    Delete*/}
                {/*</button>*/}
            </td>
        </tr>
    );
};

export default OrderTableItem;