import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function CTA() {
  return (
    <div className="cta flex justify-center items-center max-w-screen-xl mx-auto p-4 gap-10  py-[5rem] ">
      <div className="flex flex-col md:flex-row gap-[4rem] border  rounded-2xl">
        <div className="flex flex-col gap-4 justify-center items-start px-6">
          <h1 className="text-[2rem] font-bold">
            Join EduWell for Expert <br /> Guidance.
          </h1>
          <p className="text-sm text-gray-400 leading-loose">
            Sign up for free and connect with counselors who understand your
            <br />
            needs and challenges.
          </p>
          <span className="flex gap-4">
            <Button variant={"default"}>Sign Up</Button>
            <Button variant={"outline"}>Explore</Button>
          </span>
        </div>

        <div>
          <Image
            src="/assets/people-library-reading-books.jpg"
            alt="CTA"
            className="rounded-xl"
            height={450}
            width={450}
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
