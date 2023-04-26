import React from "react";
import { NextPage } from "next";
import { AdminLayout } from "@/components/layout";
import { AdminCategoriesPage } from "@/components/admin/categories";

const AdminCategories: NextPage = () => {
  return (
    <AdminLayout>
      <AdminCategoriesPage />
    </AdminLayout>
  );
};

export default AdminCategories;
