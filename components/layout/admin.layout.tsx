import React, { FC, ReactNode } from "react";
import AdminNavbar from "@/components/layout/admin.navbar";
import AdminFooter from "@/components/layout/admin.footer";

interface Props {
  children: ReactNode;
}

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <div className={"flex min-h-screen flex-col justify-between bg-[#F1F2F6]"}>
      <div className={"flex flex-col"}>
        <AdminNavbar />
        <div className={"px-20"}>{children}</div>
      </div>
      <AdminFooter />
    </div>
  );
};

export { AdminLayout };
