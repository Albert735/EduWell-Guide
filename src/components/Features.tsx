import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Features() {
  return (
    <div className=" flex flex-col  justify-center  items-start max-w-screen-xl mx-auto p-4 gap-[5rem]  py-[10rem]">
      <div className=" text-center w-full">
        <h1 className="text-[2rem] font-bold">
          Discover Expert Counselors Tailored to <br />
          Your Academic and Personal Needs
        </h1>
      </div>

      <div className="flex justify-center items-center gap-10 ">
        <div className="flex flex-col gap-4 ustify-center items-center text-center">
          <h2>
            Easily Schedule Sessions with <br /> Qualified Professionals for
            Support
          </h2>
          <p>
            Connect with counselors who specialize in various <br /> areas to
            get the help you need.
          </p>
          <span className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full w-[8rem]">
            <button>Browse</button>
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </span>
        </div>
        <div className="flex flex-col gap-4 ustify-center items-center text-center">
          <h2>
            Engage in Free Discussions and <br /> Find Peer Support Anytime
          </h2>
          <p>
            Join our community forum to share experiences and <br /> seek advice
            from fellow students..
          </p>
          <span className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full w-[7rem]">
            <button>Join</button>
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </span>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h2>
            Access Comprehensive Resources <br /> for Your Academic and Career
            <br /> Growth
          </h2>
          <p>
            Utilize our platform to explore valuable materials that <br />{" "}
            enhance your learning journey.
          </p>
          <span className="flex items-center justify-center gap-2 bg-black text-white px-6 py-2 rounded-full w-[7rem]">
            <button>Learn</button>
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Features;
