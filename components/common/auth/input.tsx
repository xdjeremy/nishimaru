import React, { FC } from "react";

interface Props {
  label: string;
  name: string;
  type: "text" | "password";
  register: any;
  error?: string;
  validation: any;
  disabled?: boolean;
}

const AuthInput: FC<Props> = ({
  label,
  name,
  type,
  register,
  error,
  validation,
  disabled,
}) => {
  return (
    <div className={"flex flex-col"}>
      <label>{label}</label>
      <input
        {...register(name, validation)}
        type={type}
        disabled={disabled}
        className={
          "h-10 border border-white bg-transparent px-2 focus:outline-1 focus:outline-white"
        }
      />
      <span className={"text-sm font-bold text-red-600"}>{error && error}</span>
    </div>
  );
};

export { AuthInput };
