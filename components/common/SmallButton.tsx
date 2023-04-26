import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Sushi from "@/assets/images/sushi.svg";

interface Props {
  type: "button" | "submit";
  children: string | ReactNode;
  onClick?: () => void;
  loading?: boolean;
}

const SmallButton: FC<Props> = ({ type, children, onClick, loading }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        disabled={loading}
        className={
          "rounded-md bg-[#FF0000] p-1 text-white hover:bg-[#5d9e5f] disabled:cursor-not-allowed disabled:bg-gray-500"
        }
      >
        {loading ? (
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
        {}
      </button>
    </>
  );
};

export { SmallButton };
