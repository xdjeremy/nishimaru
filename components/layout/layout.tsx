import React, { FC, ReactNode } from "react";
import NavBar from "@/components/layout/navbar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={"flex min-h-screen w-screen items-center flex-col bg-neutral-50"}>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export { Layout };