import React, { FC } from "react";

interface Props {
  title: string;
}

const AdminTitle: FC<Props> = ({ title }) => {
  return (
    <>
      <h1 className={"mt-10 text-2xl font-bold"}>{title}</h1>
    </>
  );
};

export { AdminTitle };
