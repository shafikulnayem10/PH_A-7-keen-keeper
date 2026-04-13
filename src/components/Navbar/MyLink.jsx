"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all font-medium 
          ${isActive 
            ? "bg-[#1d4239] text-white hover:bg-[#16352d]" 
            : "text-slate-500 hover:bg-base-200"
          }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default MyLink;