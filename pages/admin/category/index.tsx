import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { AdminLayout } from "@/components/layout";
import { AdminCategoriesPage } from "@/components/admin/categories";
import { initPocketBase } from "@/utils";
import { UsersResponse, UsersTypeOptions } from "@/types";

const AdminCategories: NextPage = () => {
  return (
    <AdminLayout>
      <AdminCategoriesPage />
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // if user is not found
    if (!pb.authStore.isValid) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    // if user is not admin
    const user = await pb
      .collection("users")
      .getOne<UsersResponse>(pb.authStore.model?.id || "");

    if (user.type !== UsersTypeOptions.admin) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  } catch (err: any) {
    console.log(err.data);
    return {
      notFound: true,
    };
  }
};

export default AdminCategories;
