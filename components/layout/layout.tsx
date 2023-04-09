import React, { FC, ReactNode } from "react";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={"flex min-h-screen flex-col items-center bg-neutral-50"}>
      <NavBar />
      <div className={"w-full"}>{children}</div>
      <Footer />
    </div>
  );
};

export { Layout };
