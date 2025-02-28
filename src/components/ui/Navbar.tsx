import React from "react";
// import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ToggleTheme from "@/components/Toggle-theme";
import { Button } from "./button";

function Navbar() {
  return (
    <div className="navbar flex justify-center w-full items-center p-4 bg-white dark:bg-black dark:text-white transition-all duration-200">
      <div className="flex justify-between w-full max-w-7xl">
        <div>
          <h1 className="text-2xl">EduWell Guide</h1>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-7">
            <li>Find Counsellors</li>
            <li>Resources Center</li>
            <li>About Us</li>
            <span className="flex items-center gap-2">
              <li>Support</li>
              <ChevronDownIcon className="w-5 h-5 text-gray-600" />
            </span>
          </ul>
        </div>

        <div className="flex items-center gap-7">
          <ToggleTheme />
          <Button variant={"default"}>Join</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
