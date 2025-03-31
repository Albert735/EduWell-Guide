"use client";

import React from "react";
import { useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import ToggleTheme from "@/components/Toggle-theme";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Handle menu toggle and prevent scrolling
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const pathname = usePathname();
  if (!pathname) return null; // Early return to prevent issues with undefined pathname.
  console.log(pathname);

  return (
    <div className="navbar flex justify-between max-w-screen-xl mx-auto items-center p-4 ">
      <div className="flex justify-center items-center gap-2">
        {/* <TbMenu3 className=" md:hidden" onClick={handleToggleMenu} size={30} /> */}
        <Link href="/">
          <h1 className="text-2xl">EduWell Guide</h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex gap-7">
          <Link
            href="/findcounselors"
            className={`px-4 py-2 rounded-lg transition-all duration-300
          ${
            pathname === "/findcounselors"
              ? "dark:bg-[#121212] dark:text-white bg-gray-100 border dark:shadow-md" // Active state
              : " dark:-300 hover:dark:bg-[#171717] hover:bg-gray-100 " // Default + hover
          }
        `}
          >
            <li> Find counselors</li>
          </Link>
          <Link
            href="/resources"
            className={`px-4 py-2 rounded-lg transition-all duration-300
              ${
                pathname === "/resources"
                  ? "dark:bg-[#121212] dark:text-white bg-gray-100 border dark:shadow-md" // Active state
                  : " dark:-300 hover:dark:bg-[#171717] hover:bg-gray-100 " // Default + hover
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
                ? "dark:bg-[#121212] dark:text-white bg-gray-100 border dark:shadow-md" // Active state
                : " dark:-300 hover:dark:bg-[#171717] hover:bg-gray-100 " // Default + hover
            }
          `}
          >
            <li>About Us</li>
          </Link>

          {/* <Link
            href="/support"
            className={`px-4 py-2 rounded-lg transition-all duration-300
            ${
              pathname === "/support"
                ? "dark:bg-[#121212] dark:text-white border dark:shadow-md" // Active state
                : " dark:-300 hover:dark:bg-[#171717] hover:bg-gray-100 " // Default + hover
            }
          `}
          >
            <span className="flex items-center gap-2">
              <li>Support</li>
              <ChevronDownIcon className="w-5 h-5 -600" />
            </span>
          </Link> */}
        </ul>
      </div>

      <div>
        <TbMenu3 className="w-8 h-8 md:hidden" onClick={handleToggleMenu} />

        {toggleMenu && (
          <div className="md:hidden bg-black/50 w-screen h-screen fixed top-0 left-0 z-50 bg-opacity-50">
            <div className="flex flex-col bg-white dark:bg-black w-[15rem] border-r py-5  h-[100vh] gap-7">
              <span className="flex justify-end w-full px-4">
                <IoCloseOutline
                  className="cursor-pointer"
                  onClick={() => setToggleMenu(false)}
                  size={26}
                />
              </span>

              <ul className="flex flex-col w-full items-start gap-7">
                <Link
                  href="/"
                  className={`mx-5 py-2 rounded-lg transition-all duration-300 px-5
          ${
            pathname === "/"
              ? "dark:bg-[#121212] dark:text-white bg-gray-100 border dark:shadow-md" // Active state
              : " dark:-300 hover:dark:bg-[#171717] hover:bg-gray-100 " // Default + hover
          }
        `}
                >
                  <li> Home</li>
                </Link>
                <Link
                  href="/findcounselors"
                  className={`mx-5 py-2 rounded-lg transition-all duration-300 px-5
          ${
            pathname === "/findcounselors"
              ? "dark:bg-[#121212] dark:text-white bg-gray-100 border dark:shadow-md" // Active state
              : " dark:-300 hover:dark:bg-[#171717] hover:bg-gray-100 " // Default + hover
          }
        `}
                >
                  <li> Find counselors</li>
                </Link>
                <Link
                  href="/resources"
                  className={`mx-5 py-2 rounded-lg transition-all duration-300 px-5
              ${
                pathname === "/resources"
                  ? "dark:bg-[#121212] dark:text-white bg-gray-100 border dark:shadow-md" // Active state
                  : " dark:-300 hover:dark:bg-[#171717] hover:bg-gray-100 " // Default + hover
              }
            `}
                >
                  <li>Resources Center</li>
                </Link>

                <Link
                  href="/aboutUs"
                  className={`mx-5 py-2 rounded-lg transition-all duration-300 px-5
            ${
              pathname === "/aboutUs"
                ? "dark:bg-[#121212] dark:text-white bg-gray-100 border dark:shadow-md" // Active state
                : " dark:-300 hover:dark:bg-[#171717] hover:bg-gray-100 " // Default + hover
            }
          `}
                >
                  <li>About Us</li>
                </Link>
              </ul>

              <span className="flex justify-between items-center gap-7 px-7">
                Darkmode <ToggleTheme />
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:flex items-center gap-7">
        <ToggleTheme />
        <Link href="/join">
          <Button variant="default">Join</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
