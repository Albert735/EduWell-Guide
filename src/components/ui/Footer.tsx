import React from "react";
// import Button from "./button";
import { Button } from "./button";

function Footer() {
  return (
    <div className="footer flex flex-col justify-between items-center max-w-screen-xl mx-auto p-4 gap-[5rem] py-[5rem]">
      <div className="flex flex-col xl:flex-row gap-10 justify-between items-start w-full">
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl">EduWell Guide</h1>
          <ul className="flex flex-wrap xl:flex-row gap-4 text-sm -400">
            <li>Get Started</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Support Center</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-[1rem] font-medium">Subscribe</h2>
          <span className="flex gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="border px-4 py-2  xl:w-[20rem] outline-none rounded-lg"
            />
            {/* <Button variant={"default"}>Subscribe</Button> */}
            <Button variant={"default"}>Subscribe</Button>
          </span>
          <p className=" -400">
            By subscribing you agree to with our Privacy Policy
          </p>
        </div>
      </div>

      <hr className="h-2 w-full" />

      <div className="flex flex-col xl:flex-row gap-10 justify-between items-center w-full">
        <ul className="flex gap-4 text-sm -400 underline">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Cookie Preferences</li>
        </ul>

        <span>
          <p className=" ">© 2025 EduWell Guide. All rights reserved.</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
