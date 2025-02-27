import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { IoTimeOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";

function Features() {
  return (
    <div className=" flex flex-col  justify-center text-white  items-start max-w-screen-xl mx-auto p-4 gap-[5rem]  py-[10rem] bg-[url(/assets/blob-scene-haikei.png)] bg-cover bg-center bg-no-repeat rounded-xl">
      <div className=" text-center w-full">
        <h1 className="xl:text-[2rem] text-[1.5rem] font-bold">
          Discover Expert Counselors Tailored to <br />
          Your Academic and Personal Needs
        </h1>
      </div>

      <div className="flex xl:flex-row flex-col justify-between items-center gap-10 w-full">
        <div className="flex flex-col gap-4 ustify-center items-center text-center">
          <IoTimeOutline size={50} />
          <h2>
            Easily Schedule Sessions with <br /> Qualified Professionals for
            Support
          </h2>
          <p className="text-sm text-gray-500">
            Connect with counselors who specialize in various <br /> areas to
            get the help you need.
          </p>
          <span className="flex items-center ">
            <Button variant={"default"}>
              Browse
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </span>
        </div>

        <div className="flex flex-col gap-4 ustify-center items-center text-center">
          <IoPeopleOutline size={50} />

          <h2>
            Engage in Free Discussions and <br /> Find Peer Support Anytime
          </h2>
          <p className="text-sm text-gray-500">
            Join our community forum to share experiences and <br /> seek advice
            from fellow students..
          </p>
          <span className="flex items-center">
            <Button variant={"default"}>
              Join <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </span>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <HiOutlineAcademicCap size={50} />
          <h2>
            Access Comprehensive Resources <br /> for Your Academic and Career
            <br /> Growth
          </h2>
          <p className="text-sm text-gray-500">
            Utilize our platform to explore valuable materials that <br />{" "}
            enhance your learning journey.
          </p>
          <span className="flex items-center justify-center ">
            <Button variant={"default"}>
              Learn
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Features;
