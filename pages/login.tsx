import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { LoginPage } from "@/components/login";
import { initPocketBase } from "@/utils";

const Login: NextPage = () => {
  return (
    <Layout>
      <LoginPage />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    // if user already logged in, redirect to home page
    const pb = await initPocketBase(ctx);
    if (pb.authStore.isValid) {
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
  } catch (_) {
    return {
      props: {},
    };
  }
};

export default Login;
