import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { RegisterPage } from "@/components/register";
import { initPocketBase } from "@/utils";

const Register: NextPage = () => {
  return (
    <Layout>
      <RegisterPage />
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

export default Register;
