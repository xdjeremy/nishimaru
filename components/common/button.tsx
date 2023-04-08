import React, { FC } from "react";

interface Props {
  type: "button" | "submit";
  children: string;
}

const Button: FC<Props> = ({ type, children }) => {
  return (
    <>
      <button className={"w-full bg-[#FF0000] text-white rounded-lg py-2"} type={type}>
        {children}
      </button>
    </>
  );
};

export { Button };
