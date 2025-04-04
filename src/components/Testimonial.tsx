"use client";

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="team flex flex-col justify-center items-center max-w-screen-xl mx-auto p-4 gap-10  py-[5rem]">
      <div className="flex flex-col  justify-center items-center">
        <h1 className="text-[1.5rem] font-bold"> Student Testimonial</h1>
        <p className="text-sm -400 text-center xl:text-start">
          EduWell Guide has transformed my academic journey!
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-10 justify-center items-center">
        <div className="flex flex-col gap-[3rem] justify-center items-center xl:justify-start xl:items-start">
          <div className="flex gap-1">
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
          </div>
          <span>
            <p className="text-[1rem] font-semibold text-center xl:text-start">
              The support I received was invaluable during finals.
            </p>
          </span>
          <div className="flex gap-2">
            <div className="relative w-[3rem] h-[3rem]">
              {/* ✅ Container with fixed size */}
              <Image
                src="/assets/photo-serious-hipster-girl-with-hair-buns-blue-eyeliner-dressed-formal-dark-green-jacket-looks-directly-camera-walks-outdoors-poses-listens-something-attentively.jpg"
                alt="Student"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>

            <span>
              <h2 className="text-[1rem] font-bold">Alice Johnson</h2>
              <p className="text-sm -400">
                Student, <span>University of Ghana </span>
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[3rem] justify-center items-center xl:justify-start xl:items-start">
          <div className="flex gap-1">
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
            <FaStar className="text-yellow-400 w-6 h-6" />
          </div>
          <span>
            <p className="text-[1rem] font-semibold text-center xl:text-start">
              Connecting with a counselor made all the difference in my journey
              <br />
              toward personal growth and emotional well-being!
            </p>
          </span>
          <div className="flex gap-2">
            <div className="relative w-[3rem] h-[3rem]">
              {/* ✅ Container with fixed size */}
              <Image
                src="/assets/cheerful-elegant-businesswoman-suit.jpg"
                alt="Student"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>

            <span>
              <h2 className="text-[1rem] font-bold">Wilma Smith</h2>
              <p className="text-sm -400">Student, Academic City</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
