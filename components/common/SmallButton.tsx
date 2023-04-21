import React, { FC, ReactNode } from "react";

interface Props {
  type: "button" | "submit";
  children: string | ReactNode;
  onClick?: () => void;
}

const SmallButton: FC<Props> = ({ type, children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={"rounded-md bg-[#FF0000] p-1 text-white hover:bg-[#5d9e5f]"}
      >
        {children}
      </button>
    </>
  );
};

export { SmallButton };
