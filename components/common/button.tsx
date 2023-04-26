import React, { FC } from "react";
import {classNames} from "@/utils";

interface Props {
  type: "button" | "submit";
  children: string;
  full?: boolean;
}

const Button: FC<Props> = ({ type, children, full }) => {
  return (
    <>
      <button className={classNames(full ? 'w-full' : 'w-fit', 'bg-[#FF0000] text-white rounded-lg py-2 px-3')} type={type}>
        {children}
      </button>
    </>
  );
};

export { Button };
