import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="hero flex flex-col justify-center items-center max-w-screen-xl mx-auto p-4 gap-10  py-[5rem]">
      <div>
        <h1 className="text-[3rem] font-bold text-center">
          Empowering Students with <br /> Expert Guidance
        </h1>
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="text-center w-[40rem] text-[1rem] leading-relaxed text-gray-500">
          EduWell Guide connects university students with qualified counselors
          for academic, mental health, and career support. Experience a
          community-driven platform designed to foster growth and well-being.
        </p>
        <span className="flex justify-center gap-7">
          <Button variant={"default"} className="">
            Get Started
          </Button>
          <Button variant={"outline"} className="">
            Learn More
          </Button>
        </span>
      </div>

      <div className="flex justify-between gap-5 w-full">
        <div className="w-[15rem] h-[22.5rem] relative overflow-hidden rounded-2xl">
          <Image
            src="/assets/african-american-woman-beige-suit-portrait.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="hover:scale-110 transition-all ease-in-out duration-300"
            priority
          />
        </div>
        <div className="w-[15rem] h-[22.5rem] relative overflow-hidden rounded-2xl">
          <Image
            src="/assets/vertical-shot-happy-young-woman-with-curly-hair-holds-notepad-pen-makes-notes-what-she-observes-around-city-dressed-casual-green-jumper-poses-outdoors-against-blurred-background.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="hover:scale-110 transition-all ease-in-out duration-300"
            priority
          />
        </div>
        <div className="w-[15rem] h-[22.5rem] relative overflow-hidden rounded-2xl">
          <Image
            src="/assets/young-student-working-assignment.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="hover:scale-110 transition-all ease-in-out duration-300"
            priority
          />
        </div>
        <div className="w-[15rem] h-[22.5rem] relative overflow-hidden rounded-2xl">
          <Image
            src="/assets/young-student-learning-library.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="hover:scale-110 transition-all ease-in-out duration-300"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
