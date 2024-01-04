"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

export const navlinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [navBarOpen, setNavbarOpen] = useState(true);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto p-6">
        <Link href={"/"} className="text-2xl md:text-5xl font-semibold">
          LOGO
        </Link>

        <div className="mobile-menu block md:hidden">
          {navBarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-4 py-2 text-slate-200 rounded border border-slate-200"
            >
              <Bars3Icon className="h-10 w-10" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 rounded border border-slate-200"
            >
              <XMarkIcon className="h-10 w-10" />
            </button>
          )}
        </div>

        <div className="browser-menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navlinks.map((navItem) => {
              return (
                <li key={navItem}>
                  <NavLink href={navItem.href} title={navItem.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {!navBarOpen ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  );
};

export default Navbar;
