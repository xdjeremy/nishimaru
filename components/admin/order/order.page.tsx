import React, { FC } from "react";
import { AdminTitle } from "@/components/common";
import OrderTable from "@/components/admin/order/order.table";

const OrderPage: FC = () => {
  return (
    <div className={"flex flex-col gap-10 pb-5"}>
      <AdminTitle title={"Manage Food Orders"} />
      <div className={"flex flex-col gap-3"}>
        <OrderTable />
      </div>
    </div>
  );
};

export { OrderPage };
