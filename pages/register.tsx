import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { RegisterPage } from "@/components/login";

const Register: NextPage = () => {
  return (
    <Layout>
      <RegisterPage />
    </Layout>
  );
};

export default Register;
