import React, { FC, ReactNode } from "react";

interface Props {
  content?: string;
  children?: ReactNode;
}

const Banner: FC<Props> = ({ content, children }) => {
  return (
    <div className={"relative block"}>
      <div
        className={
          "h-44 bg-sushi bg-cover bg-no-repeat brightness-75 md:h-52 lg:h-56"
        }
      ></div>
      {content ? (
        <h1
          className={
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-3xl font-bold text-white hover:text-[#5d9e5f]"
          }
        >
          {content}
        </h1>
      ) : (
        children
      )}
    </div>
  );
};

export { Banner };
