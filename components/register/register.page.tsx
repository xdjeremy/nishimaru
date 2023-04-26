import React, { FC } from "react";
import RegisterTitle from "@/components/register/register.title";
import RegisterForm from "@/components/register/register.form";

const RegisterPage: FC = () => {
  return (
    <div className={"bg-[#B41212] pb-10 pt-2"}>
      <RegisterTitle />
      <RegisterForm />
    </div>
  );
};

export { RegisterPage };
