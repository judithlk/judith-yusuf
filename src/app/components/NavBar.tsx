"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { FaRegSun, FaRegMoon } from "react-icons/fa";

import { Inter, Lato, Lumanosimo } from "next/font/google";

export default function NavBar() {
  const route = usePathname();

  return (
    <div className="w-[full] py-4 md:py-8 text-base md:text-xl font-semibold">
      <div className="max-w-[70%] m-auto flex flex-wrap justify-between md:justify-center md:space-x-14 ">
        <div className="mx-5 my-3">
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
        <div className="mx-5 my-3">
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
        <div className="mx-5 my-3">
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
        <div className="flex items-center mx-5 my-3">
          <FaRegSun className="size-5 stroke-1" />
          <FaRegMoon className="size-5 stroke-1" />
        </div>
      </div>
    </div>
  );
}
