import React, { FC } from "react";
import Image from "next/image";
import Sushi from "@/assets/images/sushi.svg";

interface Props {
  type: "submit" | "button";
  onClick?: () => void;
  children: string;
  disabled?: boolean;
}

const AuthButton: FC<Props> = ({ type, onClick, children, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        "rounded-xl bg-[#C50808] py-5 text-xl font-semibold hover:shadow-lg"
      }
    >
      {disabled ? (
        <div className={"flex flex-row items-center justify-center"}>
          <Image
            src={Sushi}
            alt={"Loading..."}
            className={"h-10 w-10 animate-bounce"}
          />
          <Image
            src={Sushi}
            alt={"Loading..."}
            className={"h-10 w-10 animate-bounce animation-delay-100"}
          />
          <Image
            src={Sushi}
            alt={"Loading..."}
            className={"h-10 w-10 animate-bounce animation-delay-200"}
          />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export { AuthButton };
