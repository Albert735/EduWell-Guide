import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <div className="navbar flex justify-between  items-center max-w-screen-xl mx-auto p-4">
      <div>
        <h1>EduWell Guide</h1>
      </div>
      <div className="flex items-center">
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
        <button className="btn border border-black px-6 py-1 rounded-full">
          Join
        </button>
      </div>
    </div>
  );
}

export default Navbar;
