import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { LoginPage } from "@/components/login";

const Login: NextPage = () => {
  return (
    <Layout>
      <LoginPage />
    </Layout>
  );
};

export default Login;
