import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero flex flex-col justify-center items-center max-width-screen-xl mx-auto p-4 gap-10  py-[5rem]">
      <div>
        <h1 className="text-[3rem] font-bold text-center">
          Empowering Students with <br /> Expert Guidance
        </h1>
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="text-center w-[40rem] text-[1rem] leading-relaxed text-neutral-600">
          EduWell Guide connects university students with qualified counselors
          for academic, mental health, and career support. Experience a
          community-driven platform designed to foster growth and well-being.
        </p>
        <span className="flex justify-center gap-7">
          <button className="btn border  bg-black text-white px-6 py-2 rounded-full">
            Get Started
          </button>
          <button className="btn border border-black   px-6 py-2 rounded-full">
            Learn More
          </button>
        </span>
      </div>

      <div className="w-[55rem] h-[32.5rem] relative overflow-hidden rounded-2xl">
        <Image
          src="/assets/four-happy-students-near-university-campus.jpg"
          alt="Hero Image"
          fill
          className="hover:scale-110 transition-all ease-in-out duration-300"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
