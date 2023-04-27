import React, { FC } from "react";

interface Props {
  label: string;
  placeholder: string;
  type: "text";
  name: string;
  register: any;
  validation: any;
  error?: string;
}

const CheckoutInput: FC<Props> = ({
  label,
  placeholder,
  type,
  name,
  register,
  validation,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...register(name, validation)}
        type={type}
        id={name}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder={placeholder}
      />
        <label
            htmlFor={name}
            className="mb-2 block text-sm font-medium text-red-500"
        >
            {error}
        </label>
    </div>
  );
};

export default CheckoutInput;
