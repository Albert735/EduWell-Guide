"use client";

import React from "react";
// import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ToggleTheme from "@/components/Toggle-theme";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  if (!pathname) return null; // Early return to prevent issues with undefined pathname.
  console.log(pathname);

  return (
    <div className="navbar flex justify-between max-w-screen-xl mx-auto items-center p-4 ">
      <div>
        <Link href="/">
          <h1 className="text-2xl">EduWell Guide</h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex gap-7">
          <Link
            href="/findcounsellors"
            className={`px-4 py-2 rounded-lg transition-all duration-300
          ${
            pathname === "/findcounsellors"
              ? "dark:bg-[#121212] dark:text-white border dark:shadow-md" // Active state
              : "text-gray-700 dark:text-gray-300 hover:dark:bg-[#171717] hover:bg-gray-100 hover:text-black" // Default + hover
          }
        `}
          >
            <li> Find Counsellors</li>
          </Link>
          <Link
            href="/resources"
            className={`px-4 py-2 rounded-lg transition-all duration-300
              ${
                pathname === "/resources"
                  ? "dark:bg-[#121212] dark:text-white border dark:shadow-md" // Active state
                  : "text-gray-700 dark:text-gray-300 hover:dark:bg-[#171717] hover:bg-gray-100 hover:text-black" // Default + hover
              }
            `}
          >
            <li>Resources Center</li>
          </Link>

          <Link
            href="/aboutUs"
            className={`px-4 py-2 rounded-lg transition-all duration-300
            ${
              pathname === "/aboutUs"
                ? "dark:bg-[#121212] dark:text-white border dark:shadow-md" // Active state
                : "text-gray-700 dark:text-gray-300 hover:dark:bg-[#171717] hover:bg-gray-100 hover:text-black" // Default + hover
            }
          `}
          >
            <li>About Us</li>
          </Link>

          <Link
            href="/support"
            className={`px-4 py-2 rounded-lg transition-all duration-300
            ${
              pathname === "/support"
                ? "dark:bg-[#121212] dark:text-white border dark:shadow-md" // Active state
                : "text-gray-700 dark:text-gray-300 hover:dark:bg-[#171717] hover:bg-gray-100 hover:text-black" // Default + hover
            }
          `}
          >
            <span className="flex items-center gap-2">
              <li>Support</li>
              <ChevronDownIcon className="w-5 h-5 text-gray-600" />
            </span>
          </Link>
        </ul>
      </div>

      <div className="flex items-center gap-7">
        <ToggleTheme />
        <Button variant={"default"}>Join</Button>
      </div>
    </div>
  );
}

export default Navbar;
