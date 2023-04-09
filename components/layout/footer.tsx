import React, { FC } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div
      className={
        "flex w-full flex-col items-center justify-center bg-white py-8"
      }
    >
      <div className={"flex flex-row items-center gap-3.5"}>
        <Link
          target={"_blank"}
          href={"https://facebook.com/NishiMaru"}
          className={"hover:text-[#5d9e5f]"}
        >
          <FacebookLogo size={32} />
        </Link>
        <Link
          target={"_blank"}
          className={"hover:text-[#5d9e5f]"}
          href={"https://instagram.com/NishiMaru"}
        >
          <InstagramLogo size={32} />
        </Link>
        <Link
          target={"_blank"}
          href={"https://twitter.com/NishiMaru"}
          className={"hover:text-[#5d9e5f]"}
        >
          <TwitterLogo size={32} />
        </Link>
      </div>
      <p className={"mt-9"}>Design by Ola Group</p>
    </div>
  );
};

export default Footer;
