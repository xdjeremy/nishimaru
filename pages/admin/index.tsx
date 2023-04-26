import React from "react";
import { NextPage } from "next";
import { AdminLayout } from "@/components/layout";
import { AdminDashboardPage } from "@/components/admin/dashboard";

const AdminDashboard: NextPage = () => {
  return (
    <AdminLayout>
      <AdminDashboardPage />
    </AdminLayout>
  );
};

export default AdminDashboard;
