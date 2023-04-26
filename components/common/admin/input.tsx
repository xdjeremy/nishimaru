import React, { FC } from "react";

interface Props {
  type: "text" | "password" | "number";
  placeholder: string;
  disabled: boolean;
  label: string;
  name: string;
  register: any;
  errors?: string;
  validation: any;
}

const AdminInput: FC<Props> = ({
  type,
  placeholder,
  disabled,
  label,
  name,
  register,
  errors,
  validation,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={"text-sm font-medium text-gray-900 dark:text-gray-300"}
      >
        {label}
      </label>
      <input
        {...register(name, validation)}
        className={"w-full rounded-lg border border-gray-700 px-4 py-2"}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
      <label className={"text-sm text-red-500"}>{errors}</label>
    </div>
  );
};

export { AdminInput };
