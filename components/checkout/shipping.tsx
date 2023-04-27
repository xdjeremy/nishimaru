import React, { FC } from "react";
import CheckoutInput from "@/components/checkout/checkout.input";
import { useFormContext } from "react-hook-form";
import { CheckoutTypes } from "@/components/checkout/checkout.types";
import { CheckoutValidation } from "@/utils/formValidations/checkout.validation";

const Shipping: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutTypes>();

  return (
    <div className={"w-full rounded-lg bg-white"}>
      <h2
        className={
          "w-full rounded-t-lg bg-red-600 py-2 text-center text-lg font-semibold text-white"
        }
      >
        Shipping
      </h2>
      <div className={"flex flex-col gap-4 px-5 py-8"}>
        <CheckoutInput
          type={"text"}
          name={"fullName"}
          label={"Full Name"}
          register={register}
          placeholder={"John Doe"}
          validation={CheckoutValidation.fullName}
          error={errors.fullName?.message}
        />
        <CheckoutInput
          type={"text"}
          name={"address"}
          label={"Address"}
          register={register}
          placeholder={"123 Street"}
          validation={CheckoutValidation.address}
          error={errors.address?.message}
        />
        <CheckoutInput
          type={"text"}
          name={"email"}
          label={"Email"}
          register={register}
          placeholder={"john@email.com"}
          validation={CheckoutValidation.email}
          error={errors.email?.message}
        />
      </div>
    </div>
  );
};

export default Shipping;
