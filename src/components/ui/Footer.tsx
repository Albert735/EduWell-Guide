import React from "react";
import { Button } from "./button";

function Footer() {
  return (
    <div className="footer flex flex-col justify-between items-center max-w-screen-xl mx-auto p-4 gap-[5rem] py-[5rem]">
      <div className="flex flex-col xl:flex-row gap-10 justify-between items-start w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl font-bold">EduWell Guide</h1>
          <ul className="flex flex-wrap xl:flex-row gap-4 text-sm text-gray-400">
            <li>Get Started</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Support Center</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col gap-5 w-full xl:w-auto">
          <h2 className="text-[1rem] font-medium">Subscribe</h2>
          <span className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="border px-4 py-2 w-full sm:w-[20rem] outline-none rounded-lg text-sm"
            />
            <Button variant="default">Subscribe</Button>
          </span>
          <p className="text-sm text-gray-400">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>

      {/* Separator */}
      <hr className="h-[1px] w-full bg-gray-300" />

      {/* Bottom Section */}
      <div className="flex flex-col xl:flex-row gap-10 justify-between items-center w-full">
        <ul className="flex gap-4 text-sm text-gray-400 underline">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Cookie Preferences</li>
        </ul>

        <span>
          <p className="text-sm text-gray-400">
            © 2025 EduWell Guide. All rights reserved.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
