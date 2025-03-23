"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

// Dynamically import FaStar with SSR disabled
const FaStar = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaStar),
  {
    ssr: false,
  }
);

interface CounselorType {
  name: string;
  image: string;
  description: string;
  role: string;
}

const counselors: CounselorType[] = [
  {
    name: "Dr. John Doe",
    image: "/assets/modern-man-beige-suit.jpg",
    description:
      "Helping students navigate their career paths with confidence.",
    role: "Career Counselor",
  },
  {
    name: "Dr. Sarah Smith",
    image: "/assets/cheerful-elegant-businesswoman-suit.jpg",
    description: "Mental health support tailored for university students.",
    role: "Mental Health Counselor",
  },
  {
    name: "Prof. David Lee",
    image: "/assets/cheerful-guy-enjoying-outdoor-coffee-break.jpg",
    description: "Academic advising for better study strategies and success.",
    role: "Academic Advisor",
  },
  {
    name: "Coach Emily Brown",
    image: "/assets/medium-shot-smiley-woman-portrait.jpg",
    description: "Personal growth and motivation coaching for students.",
    role: "Life Coach",
  },
  {
    name: "Mr. Robert Wilson",
    image: "/assets/christina-wocintechchat-com-rCyiK4_aaWw-unsplash.jpg",
    description:
      "Guidance on student budgeting, scholarships, and financial planning.",
    role: "Financial Advisor",
  },
  {
    name: "Ms. Jessica Taylor",
    image: "/assets/cheerful-elegant-businesswoman-suit.jpg",
    description:
      "Support for building healthy relationships and communication skills.",
    role: "Relationship Counselor",
  },
  {
    name: "Dr. Michael Johnson",
    image: "/assets/medium-shot-smiley-woman-portrait.jpg",
    description: "Expert in time management and effective study techniques.",
    role: "Study Skills Coach",
  },
];

export default function FindcounselorsPage() {
  return (
    <section className="container flex flex-col justify-center items-center max-w-screen-xl mx-auto p-4 gap-[7rem] py-[5rem]">
      <header className="text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Your Trusted Guide to Academic <br /> & Personal Success
        </h1>
        <div className="flex flex-col items-center gap-5">
          <p className="text-center max-w-[40rem] text-gray-500 leading-relaxed">
            Connect with experienced counselors who are ready to support your
            journey. Academic advice, mental wellness, and personal growth—just
            a click away!
          </p>
        </div>
      </header>

      {/* Clutch Section */}
      <div className="flex flex-col items-center gap-2">
        <span className="flex items-center gap-2 text-lg font-medium">
          Clutch
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-4 h-4" />
            ))}
          </div>
        </span>
        <p className="text-gray-500">4.9 rating from 876+ happy students</p>
      </div>

      {/* Counselor Cards */}
      <div className="flex max-w-screen-xl flex-wrap justify-center gap-10">
        {counselors.map((counselor, index) => (
          <div key={index} className="flex flex-col gap-5">
            <Card className="flex flex-col items-center border rounded-2xl p-4">
              <CardContent className="flex flex-col gap-5">
                <div className="flex justify-between w-full items-center">
                  <span className="text-sm text-gray-400">
                    {counselor.name}
                  </span>
                  <div className="relative w-[4rem] h-[4rem]">
                    <Image
                      src={counselor.image}
                      alt={counselor.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="flex justify-between items-center gap-2">
                  <h2 className="text-[1rem] font-medium">Role</h2>
                  <p className="text-sm text-gray-400">{counselor.role}</p>
                </span>
                <span className="flex justify-between gap-2">
                  <h2 className="text-[1rem] font-medium">Specialist</h2>
                  <p className="text-sm text-gray-400 w-[12rem] text-balance text-right">
                    {counselor.description}
                  </p>
                </span>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-start gap-10 w-full">
        <span className="flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <h2 className="text-md font-medium">Find Counselor</h2>{" "}
            <GoArrowUpRight />
          </span>

          <p className="text-gray-400 text-sm">
            For guidance when registering via the website
          </p>
        </span>
        <span className="flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <h2 className="text-md font-medium">Seamless Consultation</h2>{" "}
            <GoArrowUpRight />
          </span>

          <p className="text-gray-400 text-sm">
            For all types of services available here
          </p>
        </span>
        <span className="flex flex-col gap-4">
          <span className="flex items-center gap-2">
            <h2 className="text-md font-medium">Get Your Solution</h2>
            <GoArrowUpRight />
          </span>

          <p className="text-gray-400 text-sm">
            Here,we will assess, create a plan of care, <br /> and consult the
            best certified counselors
          </p>
        </span>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-5">
        <span className="flex flex-col items-center leading-relaxed">
          <h3 className="text-2xl font-semibold">
            Find Your Preferred Counselor
          </h3>
          <p className="text-gray-500">
            Click on a counselor to start. Signing up is quick and free!
          </p>
        </span>
        <Link href="/form/registerStudent">
          <Button variant="default" className="rounded-full p-4">
            Book an Appointment Now!
          </Button>
        </Link>
      </div>
    </section>
  );
}
