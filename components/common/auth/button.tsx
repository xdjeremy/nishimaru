import React, { FC } from "react";

interface Props {
  type: "submit" | "button";
  onClick?: () => void;
  children: string;
}

const AuthButton: FC<Props> = ({ type, onClick, children }) => {
  return <button className={'bg-[#C50808] py-5 rounded-xl text-xl font-semibold hover:shadow-lg'}>{children}</button>;
};

export { AuthButton };
