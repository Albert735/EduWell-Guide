"use client";

import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee"; // Update this path to the correct one
import { Button } from "@/components/ui/button"; // Update this path to the correct one
import { useEffect, useState } from "react";
import { VscQuote } from "react-icons/vsc";
import { GoArrowUpRight } from "react-icons/go";

interface TeamImage {
  image: string;
}

const teamImages: TeamImage[] = [
  { image: "/assets/profile1.jpg" },
  { image: "/assets/profile2.jpg" },
  { image: "/assets/profile3.jpg" },
  { image: "/assets/profile4.jpg" },
  { image: "/assets/profile5.jpg" },
  { image: "/assets/profile6.jpg" },
  { image: "/assets/profile7.jpg" },
  { image: "/assets/profile8.jpg" },
];

export default function AboutUsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="container flex flex-col justify-center items-center  mx-auto p-4 gap-[5rem] py-[5rem]">
      <div className="flex flex-col justify-center items-center gap-4 space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          We&apos;re making a difference <br /> in the lives of students
        </h1>
        <p className="text-center max-w-[40rem]  leading-relaxed">
          We connect students with expert counselors to support their academic
          success, mental wellness, and personal growth, helping them with time
          management, stress relief, and career planning.
        </p>
        <Button variant={"default"} className="">
          Contact Us
        </Button>
      </div>

      {/* team Section */}

      <div className="rounded-xl  flex-col justify-start items-center gap-[2rem] overflow-x-auto w-screen space-y-10">
        {isMounted ? (
          <Marquee pauseOnHover className="[--duration:40s]">
            {teamImages.map((teamImages, index) => (
              <div
                key={index}
                className="relative w-[15rem] h-[25rem] rounded-lg"
              >
                <Image
                  src={teamImages.image}
                  alt="team"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </Marquee>
        ) : (
          <div className="flex gap-4">
            {teamImages.map((teamImage, index) => (
              <div
                key={index}
                className="relative w-[15rem] h-[25rem] rounded-lg dark:bg-white/5 bg-gray-200  animate-pulse"
              />
            ))}
          </div>
        )}

        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <span className=" max-w-[40rem] leading-relaxed text-center">
            EduWell Guide is built by passionate developers, counselors, and
            educators who understand the challenges students face. Our team is
            committed to making high-quality guidance accessible, easy to use,
            and student-focused.
          </span>
        </div>
      </div>

      {/* our mission  */}
      <div className="flex flex-col  justify-center items-center gap-4 space-y-10 w-full mx-auto max-w-screen-xl">
        <span className="flex flex-col lg:flex-row w-full justify-between items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Our Mission
          </h1>
          <p className="max-w-[40rem] text-lg  leading-relaxed italic border-l-2 dark:border-l-white border-l-black px-2 py-4 dark:bg-white/10 bg-gray-100">
            <VscQuote size={20} className="inline-block" /> At EduWell Guide, we
            are dedicated to helping university students find the right
            counselors to guide them through academics, mental health, career
            planning, and personal growth. Our goal is to provide a seamless
            connection between students and experienced professionals who can
            support their well-being and future success.{" "}
            <VscQuote size={20} className="inline-block rotate-180" />
          </p>
        </span>

        <span className="flex flex-col lg:flex-row w-full justify-between items-start gap-4">
          <h2 className="text-xl font-medium ">Why EduWell Guide?</h2>

          <div className="flex flex-col gap-4">
            <span className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">1. Expert Guidance</h3>
              <span className="max-w-[40rem]  leading-relaxed">
                Our team of experienced counselors are here to help you navigate
                the challenges of university life, providing expert advice and
                support.
                <ul className="list-disc list-inside">
                  <li>Match students with expert counselors</li>
                  <li>
                    Provide a user-friendly platform for booking and
                    communication
                  </li>
                  <li>Ensure secure and confidential interactions</li>
                </ul>
              </span>
            </span>

            <span className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">2. What We Offer</h3>
              <span className="max-w-[40rem]  leading-relaxed">
                <ul className="list-disc list-inside">
                  <li>
                    Academic Counseling: Get expert advice on coursework, study
                    techniques, and academic planning.
                  </li>
                  <li>
                    Mental Health & Well-being: Connect with professional
                    counselors to support your emotional and psychological
                    well-being.
                  </li>
                  <li>
                    Career Development: Receive career guidance, internship
                    advice, and job preparation tips.
                  </li>
                  <li>
                    Financial Literacy: Learn how to manage student finances,
                    budgeting, and scholarships.
                  </li>
                </ul>
              </span>
            </span>
          </div>
        </span>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 space-y-10 w-full mx-auto max-w-screen-xl border px-[3rem]  py-[2rem] rounded-xl bg-gray-100 dark:bg-white/5">
        <span className="flex flex-col lg:flex-row w-full justify-between items-center gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-4">
              Get involved <GoArrowUpRight className="rotate-90" />
            </h1>

            <span className="max-w-[40rem]  leading-relaxed">
              Are you a counselor or mentor looking to make an impact? <br />
              Join EduWell Guide and help shape the future of student success!{" "}
            </span>
            <Button variant={"default"} className="mt-4 w-[10rem]">
              Join Us
            </Button>
          </div>

          <span className="flex flex-col gap-4">
            <Image
              src="/assets/business-hands-joined-together-teamwork.jpg"
              alt="Young student working on an assignment"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </span>
        </span>
      </div>
    </section>
  );
}
