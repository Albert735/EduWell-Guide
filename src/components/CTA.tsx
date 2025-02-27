import React from "react";

function CTA() {
  return (
    <div className="cta flex justify-center items-center max-w-screen-xl mx-auto p-4 gap-10  py-[5rem] ">
      <div className="flex gap-[4rem] border  rounded-2xl">
        <div className="flex flex-col gap-4 justify-center items-start px-6">
          <h1 className="text-[2rem] font-bold">
            Join EduWell for Expert <br /> Guidance.
          </h1>
          <p className="text-sm text-gray-400 leading-loose">
            Sign up for free and connect with counselors who understand your{" "}
            <br />
            needs and challenges.
          </p>
          <span className="flex gap-4">
            <button className="bg-black rounded-full text-white px-6 py-2">
              Sign Up
            </button>
            <button className="border px-6 py-2 rounded-full">Explore</button>
          </span>
        </div>
        <div>
          <img
            src="/assets/people-library-reading-books.jpg"
            alt="CTA"
            className="rounded-xl"
            height={4500}
            width={450}
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
