import React, { FC } from "react";
import Link from "next/link";
import adminNavLinks from "@/components/layout/adminNavLinks";

interface INavItem {
  href: string;
  label: string;
}

const NavItem: FC<INavItem> = ({ href, label }) => {
  return (
    <Link href={href} className={"text-[#5D9E5F] font-semibold"}>
      {label}
    </Link>
  );
};

const AdminNavbar: FC = () => {
  return (
    <div className={"flex-items flex w-full items-center justify-center gap-7 bg-white px-5 py-5 border-b border-b-gray-300 shadow-lg"}>
      {adminNavLinks.map((link) => (
        <NavItem key={link.path} href={link.path} label={link.name} />
      ))}
    </div>
  );
};

export default AdminNavbar;
