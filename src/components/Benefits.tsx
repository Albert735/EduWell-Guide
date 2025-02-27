import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { HiOutlineArrowDownRight } from "react-icons/hi2";

function Benefits() {
  return (
    <div className=" flex flex-col xl:flex-row  justify-between items-start max-w-screen-xl mx-auto p-4 gap-10  py-[5rem]">
      <div className="w-full  xl:w-[35rem] h-[21rem] relative overflow-hidden rounded-2xl">
        <Image
          src="/assets/people-meeting-support-group.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="hover:scale-110 transition-all ease-in-out duration-300"
          priority
        />
      </div>

      <div className="flex flex-col gap-5 xl:w-[40rem]">
        <span className="flex items-center gap-2">
          <h3 className=" font-normal">Empower</h3>
          <HiOutlineArrowDownRight />
        </span>
        <div>
          <h1 className="text-[2rem] font-bold">
            Unlock Your Potential with <br /> Expert Guidance
          </h1>
          <p className="text-sm text-gray-500">
            EduWell Guide connects you with experienced counselors tailored to
            your needs. Access academic, mental health, and career support all
            in one place.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-10">
          <span className="flex flex-col gap-3">
            <h2>Expert Counselors</h2>
            <p className="text-sm text-gray-500">
              Find qualified professionals ready to assist you with personalized
              guidance.
            </p>
          </span>
          <span className="flex flex-col gap-3">
            <h2>Community Support</h2>
            <p className="text-sm text-gray-500">
              Engage in forums to share experiences and gain insights from
              fellow students.
            </p>
          </span>
        </div>

        <span className="flex justify-start gap-7">
          <Button variant={"default"}>Get Started</Button>
          <span className="flex items-center gap-2">
            <Button variant={"outline"}>
              Sign Up
              <ChevronRightIcon className="w-5 h-5 " />
            </Button>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Benefits;
