import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Benefits() {
  return (
    <div className=" flex  justify-center  items-center max-w-screen-xl mx-auto p-4 py-[5rem] gap-10">
      <div className="flex flex-col gap-5 w-[40rem]">
        <span>
          <h3 className=" font-normal">Tagline</h3>
        </span>
        <div>
          <h1 className="text-[2rem] font-bold">
            Medium length section heading goes here
          </h1>
          <p>
            EduWell Guide offers a comprehensive suite of features tailored to
            meet the diverse needs of university students. From finding expert
            counselors to engaging in community discussions, we empower students
            to take charge of their academic and personal journeys.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <span className="flex flex-col gap-3">
            <p>Browse counselors by expertise and availability.</p>
          </span>
          <span className="flex flex-col gap-3">
            <p>Easily schedule sessions with your chosen counselor.</p>
          </span>
          <span className="flex flex-col gap-3">
            <p>Engage in live chats and community forums.</p>
          </span>
        </div>

        <span className="flex justify-start gap-7">
          <button className="btn border  bg-black text-white px-6 py-2 rounded-full">
            Get Started
          </button>
          <span className="flex items-center gap-2">
            <button>Sign Up</button>
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </span>
        </span>
      </div>

      <div className="w-[40rem] h-[25rem] relative overflow-hidden rounded-2xl">
        <Image
          src="/assets/serious-students-sitting-table-library-working-with-laptop.jpg"
          alt="Hero Image"
          fill
          className="hover:scale-110 transition-all ease-in-out duration-300"
          priority
        />
      </div>
    </div>
  );
}

export default Benefits;
