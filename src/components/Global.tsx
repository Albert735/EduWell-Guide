import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Skeleton } from "@/components/ui/skeleton";

function Benefits() {
  return (
    <div className=" flex  justify-center  items-center max-w-screen-xl mx-auto p-5 py-[5rem] gap-10 ">
      <div className="flex flex-col xl:flex-row justify-between gap-5 w-full">
        <div className="flex flex-col gap-5 xl:w-[40rem]">
          <span className="flex items-center gap-2">
            <h3 className=" font-normal">Tagline</h3>{" "}
            <HiOutlineArrowDownRight />
          </span>
          <div className="flex flex-col gap-5">
            <h1 className="text-[2rem] font-bold">
              Medium length section heading goes here
            </h1>
            <p className=" xl:w-[30rem]">
              EduWell Guide offers a comprehensive suite of features tailored to
              meet the diverse needs of university students. From finding expert
              counselors to engaging in community discussions, we empower
              students to take charge of their academic and personal journeys.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <span className="flex items-center  gap-2">
              <IoCheckmarkDoneOutline />
              <p className="">
                Browse counselors by expertise and availability.
              </p>
            </span>
            <span className="flex items-center   gap-2">
              <IoCheckmarkDoneOutline />
              <p className="">
                Easily schedule sessions with your chosen counselor.
              </p>
            </span>
            <span className="flex items-center   gap-2">
              <IoCheckmarkDoneOutline />
              <p className="">Engage in live chats and community forums.</p>
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

        {/* // Image */}

        <div className="flex flex-wrap md:grid md:grid-cols-2 justify-center items-center  gap-5 py-5 rounded-lg w-full">
          <Skeleton className="xl:w-[20rem] w-full h-[10rem] rounded-lg " />

          <div className="xl:w-[20rem] w-full h-[10rem] relative overflow-hidden rounded-lg">
            <Image
              src="/assets/people-meeting-support-group.jpg"
              alt="Hero Image"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-110 transition-all ease-in-out duration-300"
              priority
            />
          </div>

          <div className="xl:w-[20rem] w-full h-[10rem] relative overflow-hidden rounded-lg">
            <Image
              src="/assets/serious-students-sitting-table-library-working-with-laptop.jpg"
              alt="Hero Image"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-110 transition-all ease-in-out duration-300 rounded-lg"
              priority
            />
          </div>

          <Skeleton className="xl:w-[20rem] w-full h-[10rem] rounded-lg " />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
