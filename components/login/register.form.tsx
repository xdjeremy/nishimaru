import React, { FC, useState } from "react";
import Sushi from "../../assets/images/sushi-v2.svg";
import Image from "next/image";
import { AuthButton, AuthInput } from "@/components/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterValidation } from "@/utils/formValidations";
import Link from "next/link";
import { pocketBase } from "@/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface Inputs {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<Inputs>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmitRegister: SubmitHandler<Inputs> = async ({
    username,
    email,
    name,
    password,
    confirmPassword,
  }) => {
    try {
      setIsLoading(true);

      // check if passwords match
      if (password !== confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
      }

      const data = {
        username,
        email,
        password,
        passwordConfirm: confirmPassword,
        name,
      };

      await pocketBase.collection("users").create(data);

      // send email verification
      await pocketBase.collection("users").requestVerification(email);

      toast.success("Account created successfully");

      // redirect to login page
      await router.push("/");
    } catch (err: any) {
      console.log(err.data);
      const obj = Object.keys(err.data.data);
      obj.map((key) => {
        setError(key as keyof Inputs, {
          type: "manual",
          message: err.data.data[key].message,
        });
      });
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={
        "mx-auto w-full max-w-xl bg-white bg-opacity-50 px-7 py-5 text-white shadow-xl md:rounded-lg"
      }
    >
      <div className={"flex flex-row items-center justify-between"}>
        <h3 className={"text-3xl font-bold"}>Sign-Up</h3>
        <Image src={Sushi} alt={"NishiMaru"} width={100} height={100} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmitRegister)}
        className={"flex flex-col gap-3.5"}
      >
        <AuthInput
          label={"Username"}
          name={"username"}
          type={"text"}
          register={register}
          error={errors.username?.message}
          validation={RegisterValidation.username}
          disabled={isLoading}
        />
        <AuthInput
          label={"Name"}
          name={"name"}
          type={"text"}
          register={register}
          error={errors.name?.message}
          validation={RegisterValidation.name}
          disabled={isLoading}
        />
        <AuthInput
          label={"Email"}
          name={"email"}
          type={"text"}
          register={register}
          error={errors.email?.message}
          validation={RegisterValidation.email}
          disabled={isLoading}
        />
        <AuthInput
          label={"Password"}
          name={"password"}
          type={"password"}
          register={register}
          error={errors.password?.message}
          validation={RegisterValidation.password}
        />
        <AuthInput
          label={"Confirm Password"}
          name={"confirmPassword"}
          type={"password"}
          register={register}
          error={errors.confirmPassword?.message}
          validation={RegisterValidation.confirmPassword}
          disabled={isLoading}
        />
        <div className={"mt-5 flex flex-col"}>
          <AuthButton disabled={isLoading} type={"submit"}>
            Sign Up
          </AuthButton>
          <div className="relative flex items-center py-5">
            <div className="flex-grow border-2 border-t border-white"></div>
            <span className="mx-4 flex-shrink text-xl font-semibold text-white">
              or
            </span>
            <div className="flex-grow border-2 border-t border-white"></div>
          </div>
          <p className={"text-center"}>
            Already have an account?{" "}
            <Link href={"login"} className={"font-semibold underline"}>
              Log in here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
