import React from "react";
import Link from "next/link";
import { Home, Clock, BarChart2 } from "lucide-react";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-gray-100 px-4">
      <div className="navbar-start">
        {/* Mobile  */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z- mt-3 w-52 p-2 shadow">
            <MyLink href="/">Home</MyLink>
            <MyLink href="/timeline">Timeline</MyLink>
            <MyLink href="/stats">Stats</MyLink>
          </ul>
        </div>
        
        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl normal-case hover:bg-transparent px-0 ml-2">
          <span className="font-bold text-gray-900">Keen</span>
          <span className="font-medium text-green-900">Keeper</span>
        </Link>
      </div>

      {/* Desktop  */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <MyLink href="/">
            <Home size={18} /> Home
          </MyLink>
          <MyLink href="/timeline">
            <Clock size={18} /> Timeline
          </MyLink>
          <MyLink href="/stats">
            <BarChart2 size={18} /> Stats
          </MyLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;