import React, { FC } from "react";
import Sushi from "../../assets/images/sushi-v2.svg";
import Image from "next/image";
import { AuthButton, AuthInput } from "@/components/common";
import { useForm } from "react-hook-form";
import { RegisterValidation } from "@/utils/formValidations";
import Link from "next/link";

interface Inputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className={"bg-white bg-opacity-50 px-7 py-5 text-white"}>
      <div className={"flex flex-row items-center justify-between"}>
        <h3 className={"text-3xl font-bold"}>Sign-Up</h3>
        <Image src={Sushi} alt={"NishiMaru"} width={100} height={100} />
      </div>
      <form className={"flex flex-col gap-3.5"}>
        <AuthInput
          label={"Name"}
          name={"name"}
          type={"text"}
          register={register}
          error={errors.name?.message}
          validation={RegisterValidation.name}
        />
        <AuthInput
          label={"Email"}
          name={"email"}
          type={"text"}
          register={register}
          error={errors.email?.message}
          validation={RegisterValidation.email}
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
        />
        <div className={"flex flex-col mt-5"}>
          <AuthButton type={"submit"}>Sign Up</AuthButton>
          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-white border-2"></div>
            <span className="mx-4 flex-shrink text-white font-semibold text-xl">or</span>
            <div className="flex-grow border-t border-white border-2"></div>
          </div>
          <p className={'text-center'}>
            Already have an account? <Link href={'login'} className={'underline font-semibold'}>Log in here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
