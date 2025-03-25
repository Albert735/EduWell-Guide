import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { HiOutlineArrowDownRight } from "react-icons/hi2";

function Benefits() {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-start max-w-screen-xl mx-auto p-4 gap-10 py-20">
      {/* Image Section */}
      <div className="w-full xl:w-[35rem] h-[21rem] relative overflow-hidden rounded-2xl">
        <Image
          src="/assets/people-meeting-support-group.jpg"
          alt="People meeting in a support group"
          fill
          style={{ objectFit: "cover" }}
          className="hover:scale-110 transition-all ease-in-out duration-300"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-5 xl:w-[40rem]">
        {/* Header */}
        <span className="flex items-center gap-2">
          <h3 className="font-normal">Empower</h3>
          <HiOutlineArrowDownRight />
        </span>

        {/* Title and Description */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Unlock Your Potential with <br /> Expert Guidance
          </h1>
          <p className="text-sm  mt-2">
            EduWell Guide connects you with experienced counselors tailored to
            your needs. Access academic, mental health, and career support all
            in one place.
          </p>
        </div>

        {/* Benefits List */}
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">Expert Counselors</h2>
            <p className="text-sm ">
              Find qualified professionals ready to assist you with personalized
              guidance.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold">Community Support</h2>
            <p className="text-sm ">
              Engage in forums to share experiences and gain insights from
              fellow students.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-start gap-7">
          <Button variant="default">Get Started</Button>
          <Button variant="outline" className="flex items-center gap-2">
            Sign Up
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
