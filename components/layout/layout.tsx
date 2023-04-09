import React, { FC, ReactNode } from "react";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      className={
        "flex min-h-screen flex-col items-center justify-between bg-neutral-50"
      }
    >
      <div className={'w-full'}>
        <NavBar />
        <div className={"relative h-max"}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export { Layout };
