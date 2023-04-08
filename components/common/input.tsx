import React, { FC } from "react";

interface Props {
  type: "text" | "email" | "password";
  disabled?: boolean;
  placeholder?: string;
}

const Input: FC<Props> = ({ type, disabled, placeholder }) => {
  return (
    <div className={'w-full'}>
      <input className={'w-full py-2 px-4 rounded-lg'} type={type} placeholder={placeholder} disabled={disabled} />
    </div>
  );
};

export {Input};
