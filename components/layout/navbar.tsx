import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import navLinks from "@/components/layout/navLinks";
import Link from "next/link";
import { classNames } from "@/utils";
import { useUser } from "@/context";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  console.log(user);

  return (
    <div className={"w-full bg-white"}>
      <div
        className={
          "mx-auto flex h-24 w-full max-w-5xl flex-row items-center justify-between px-4 py-10"
        }
      >
        <div className={"flex flex-row items-center justify-center gap-3"}>
          <Link href={"/"}>
            <Image src={"/logo.png"} alt={"NishiMaru"} height={60} width={80} />
          </Link>
          <span className={" text-xl text-[#FF0000]"}>
            <span className={"font-extrabold"}>Nishi</span>
            <span className={""}>Maru</span>
          </span>
        </div>

        {/* mobile burger */}
        <button
          className={
            "rounded-md bg-neutral-100 p-3 hover:bg-neutral-200 md:hidden"
          }
          onClick={() => setOpen(!open)}
        >
          <Bars3Icon className={"h-6 w-6"} />
        </button>

        {/* desktop nav */}
        <ul className={"hidden flex-row items-center gap-6 md:flex"}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link className={"font-bold text-[#5d9e5f]"} href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
          {!!user ? (
            <li>
              <Link className={"font-bold text-[#5d9e5f]"} href={"/logout"}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link className={"font-bold text-[#5d9e5f]"} href={"/login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link className={"font-bold text-[#5d9e5f]"} href={"/register"}>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <ul
        className={classNames(
          open ? "block md:hidden" : "hidden",
          "flex flex-row items-center justify-center gap-6 pb-7"
        )}
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link className={"font-bold text-[#5d9e5f]"} href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}

        {!!user ? (
          <li>
            <Link className={"font-bold text-[#5d9e5f]"} href={"/logout"}>
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link className={"font-bold text-[#5d9e5f]"} href={"/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link className={"font-bold text-[#5d9e5f]"} href={"/register"}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
