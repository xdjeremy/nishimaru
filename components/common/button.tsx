import React, { FC } from "react";
import {classNames} from "@/utils";
import Image from "next/image";
import Sushi from "@/assets/images/sushi.svg";

interface Props {
  type: "button" | "submit";
  children: string;
  full?: boolean;
  disabled?: boolean;
}

const Button: FC<Props> = ({ type, children, full, disabled }) => {
  return (
    <>
      <button className={classNames(full ? 'w-full' : 'w-fit', 'bg-[#FF0000] text-white rounded-lg py-2 px-3')} type={type}>
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
    </>
  );
};

export { Button };
