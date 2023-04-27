import React, { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { pocketBase } from "@/utils";
import { Layout } from "@/components/layout";

const Logout: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    pocketBase.authStore.clear();
    // clear pb_auth cookie
    document.cookie =
      "pb_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // wait for 1 second and redirect to login page
    setTimeout(() => {
      router.push("login").then();
    }, 1000);
  }, [router]);
  return (
    <Layout>
      <>Logging Out...</>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // send back the default 'pb_auth' cookie to the client with the latest store state
  ctx.res?.setHeader("set-cookie", "pb_auth=");

  return {
    props: {},
  };
};

export default Logout;
