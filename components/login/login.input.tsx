import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { LoginValidation } from "@/utils/formValidations";

const LoginInput: FC = () => {
  const { register } = useFormContext();

  return (
    <div className={"flex flex-col"}>
      <label htmlFor={"username"}>Email/Username</label>
      <input
        {...register("username", LoginValidation.username)}
        className={""}
      />
    </div>
  );
};

export default LoginInput;
