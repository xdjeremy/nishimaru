import React, { FC, useState } from "react";
import { AuthButton, AuthInput } from "@/components/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginValidation } from "@/utils/formValidations";
import toast from "react-hot-toast";
import { pocketBase } from "@/utils";
import { useRouter } from "next/router";

interface LoginInputs {
  username: string;
  password: string;
}

const LoginForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin: SubmitHandler<LoginInputs> = async ({
    username,
    password,
  }) => {
    try {
      setIsLoading(true);
      await pocketBase.collection("users").authWithPassword(username, password);

      // save to cookie
      document.cookie = pocketBase.authStore.exportToCookie({
        httpOnly: false,
      });

      toast.success("Logged in successfully");

      await router.push("/");
    } catch (err: any) {
      toast.error(err.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={
        "w-full max-w-xl rounded-xl bg-white bg-opacity-50 px-9 py-11 text-white"
      }
    >
      <h1 className={"text-4xl font-medium uppercase"}>Log In</h1>
      <p className={"font-medium"}>Sign in with your email and password</p>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className={"mt-8 flex w-full flex-col gap-5"}
      >
        <AuthInput
          label={"Email/Username"}
          name={"username"}
          type={"text"}
          register={register}
          disabled={isLoading}
          error={errors.username?.message}
          validation={LoginValidation.username}
        />
        <AuthInput
          label={"Password"}
          name={"password"}
          type={"password"}
          register={register}
          disabled={isLoading}
          error={errors.password?.message}
          validation={LoginValidation.password}
        />
        <AuthButton disabled={isLoading} type={"submit"} color={"white"}>
          Sign In
        </AuthButton>
      </form>
    </div>
  );
};

export default LoginForm;
