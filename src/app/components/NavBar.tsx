"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useTheme } from '../context/ThemeContext';


import { FaRegSun, FaRegMoon } from "react-icons/fa";


export default function NavBar() {
  const route = usePathname();

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-[full] py-6 md:py-7 text-base md:text-2xl font-semibold">
      <div className="max-w-[80%] sm:max-w-[70%] m-auto flex flex-wrap justify-between md:justify-center md:space-x-14 ">
        <div className="mx-5 my-4">
          <Link href="/">
            <h1
              className={`hover:text-hover-links ${
                route == "/" ? "text-gray-500" : ""
              }`}
            >
              home
            </h1>
          </Link>
        </div>
        <div className="mx-5 my-4">
          <Link href="/about">
            <h1
              className={`hover:text-hover-links ${
                route == "/about" ? "text-gray-500" : ""
              }`}
            >
              about
            </h1>
          </Link>
        </div>
        <div className="mx-5 my-4">
          <Link href="/projects">
            <h1
              className={`hover:text-hover-links  ${
                route == "/projects" ? "text-gray-500" : ""
              }`}
            >
              projects
            </h1>
          </Link>
        </div>
        <div className="flex items-center mx-5 my-4">
          <FaRegSun className={`size-6 stroke-1 fill-sun-yellow cursor-pointer ${theme === "light" ? "hidden" : "block"}`} onClick={toggleTheme} />
          <FaRegMoon className={`size-6 stroke-1 fill-hover-links cursor-pointer ${theme === "light" ? "block" : "hidden"}`} onClick={toggleTheme} />
        </div>
      </div>
    </div>
  );
}
