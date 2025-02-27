import React from "react";
import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Team() {
  return (
    <div className="team flex flex-col justify-center items-center max-width-screen-xl mx-auto p-4 gap-10  py-[5rem]">
      <h3>Empower</h3>
      <h1 className="text-[2rem] font-bold">Our Team</h1>

      <div className="flex flex-col  justify-center gap-[5rem]">
        <span className="flex gap-10">
          <div className="flex flex-col gap-10 justify-center  items-center border p-4 rounded-2xl w-[20rem]">
            <Image
              src="/assets/black-nurse-man-getting-ready-work.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="rounded-full hover:scale-110 transition-all ease-in-out duration-300"
              priority
            />
            <div className="flex flex-col gap-3  justify-center items-center text-center">
              <span>
                <h2 className="text-[1rem] font-bold">John Doe</h2>
                <p className="text-sm text-gray-400">Chief Executive Officer</p>
              </span>
              <p className="text-[13px]">
                Helping students navigate their career paths <br /> with
                confidence.
              </p>
              <span className="flex gap-4">
                <FaXTwitter className="w-6 h-6" />
                <FaLinkedin className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-10 justify-center  items-center border p-4 rounded-2xl w-[20rem]">
            <Image
              src="/assets/female-freelancer-writes-notes-notepad-notes-future-plans-checklist-organization-free-time-poses-outside-against-buildings.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="rounded-full hover:scale-110 transition-all ease-in-out duration-300"
              priority
            />
            <div className="flex flex-col gap-3 items-center text-center">
              <span>
                <h2 className="text-[1rem] font-bold">Alice Johnson</h2>
                <p className="text-sm text-gray-400">Career Advisor</p>
              </span>
              <p className="text-[13px]">
                Passionate about guiding students through
                <br /> their academic journeys.
              </p>
              <span className="flex gap-4">
                <FaXTwitter className="w-6 h-6" />
                <FaLinkedin className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-10 justify-center  items-center border p-4 rounded-2xl w-[20rem]">
            <Image
              src="/assets/medium-shot-smiley-woman-portrait.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="rounded-full hover:scale-110 transition-all ease-in-out duration-300"
              priority
            />
            <div className="flex flex-col gap-3 items-center text-center">
              <span>
                <h2 className="text-[1rem] font-bold">Sarah Lee</h2>
                <p className="text-sm text-gray-400">Mental Health</p>
              </span>
              <p className="text-[13px]">
                Committed to fostering mental wellness in the <br /> student
                community.
              </p>
              <span className="flex gap-4">
                <FaXTwitter className="w-6 h-6" />
                <FaLinkedin className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
              </span>
            </div>
          </div>
        </span>

        <span className="flex gap-10">
          <div className="flex flex-col gap-10 justify-center  items-center border p-4 rounded-2xl w-[20rem]">
            <Image
              src="/assets/modern-man-beige-suit.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="rounded-[50rem] hover:scale-110 transition-all ease-in-out duration-300"
              priority
            />
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <span>
                <h2 className="text-[1rem] font-bold">Tom Brown</h2>
                <p className="text-sm text-gray-400">Financial Planner</p>
              </span>
              <p className="text-[13px]">
                Guiding students towards financial stability <br /> and success.
              </p>
              <span className="flex gap-4">
                <FaXTwitter className="w-6 h-6" />
                <FaLinkedin className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-10 justify-center  items-center border p-4 rounded-2xl w-[20rem]">
            <Image
              src="/assets/cheerful-guy-enjoying-outdoor-coffee-break.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="rounded-full hover:scale-110 transition-all ease-in-out duration-300"
              priority
            />
            <div className="flex flex-col gap-3 items-center text-center">
              <span>
                <h2 className="text-[1rem] font-bold">Daniel Kim</h2>
                <p className="text-sm text-gray-400">Tech Specialist</p>
              </span>
              <p className="text-[13px]">
                Ensuring a seamless user experience on our <br />
                platform.
              </p>
              <span className="flex gap-4">
                <FaXTwitter className="w-6 h-6" />
                <FaLinkedin className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-10 justify-center  items-center border p-4 rounded-2xl w-[20rem] ">
            <Image
              src="/assets/smiling-african-american-man-looking.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="rounded-full hover:scale-110 transition-all ease-in-out duration-300"
              priority
            />
            <div className="flex flex-col gap-3 items-center text-center">
              <span>
                <h2 className="text-[1rem] font-bold">Emma Davies</h2>
                <p className="text-sm text-gray-400">Community Builder</p>
              </span>
              <p className="text-[13px]">
                Creating a supportive environment for peer interactions <br />
                and discussions.
              </p>
              <span className="flex gap-4">
                <FaXTwitter className="w-6 h-6" />
                <FaLinkedin className="w-6 h-6" />
                <FaInstagram className="w-6 h-6" />
              </span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Team;
