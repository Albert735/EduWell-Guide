"use client";

import React from "react";
// import { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

//define the types of team member

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

//Team members data
const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "Chief Executive Officer",
    description:
      "Helping students navigate their career paths with confidence.",
    image: "/assets/black-nurse-man-getting-ready-work.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Career Advisor",
    description:
      "Passionate about guiding students through their academic journeys.",
    image:
      "/assets/female-freelancer-writes-notes-notepad-notes-future-plans-checklist-organization-free-time-poses-outside-against-buildings.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Mental Health Counselor",
    description:
      "Committed to fostering mental wellness in the student community.",
    image: "/assets/medium-shot-smiley-woman-portrait.jpg",
  },
  {
    name: "Tom Brown",
    role: "Financial Planner",
    description: "Guiding students towards financial stability and success.",
    image: "/assets/modern-man-beige-suit.jpg",
  },
  {
    name: "Daniel Kim",
    role: "Tech Specialist",
    description: "Ensuring a seamless user experience on our platform.",
    image: "/assets/cheerful-guy-enjoying-outdoor-coffee-break.jpg",
  },
  {
    name: "Emma Davies",
    role: "Community Builder",
    description: "Creating a supportive environment for peer interactions.",
    image: "/assets/smiling-african-american-man-looking.jpg",
  },
];

function Team() {
  return (
    <div className="team flex flex-col justify-center items-center max-w-screen-xl mx-auto  gap-10 xl:p-4  p-[5rem]">
      <h3>Empower</h3>
      <h1 className="text-[2rem] font-bold">Our Team</h1>

      <Carousel
        opts={{
          align: "start",
          loop: true, // Enables infinite looping
        }}
        className="w-full max-w-screen-xl mx-auto "
      >
        <CarouselContent>
          {teamMembers.map((member, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-3/4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-2 sm:p-3 lg:p-4">
                <Card className="flex flex-col items-center  border rounded-2xl p-6  w-full">
                  <CardContent className="flex flex-col justify-between  h-full items-center  p-3 w-full">
                    <div className="relative w-20 h-20  mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-4 items-center text-center w-full">
                      <h2 className="text-lg sm:text-xl font-bold">
                        {member.name}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600">
                        {member.role}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 line-clamp-3">
                        {member.description}
                      </p>
                      <div className="flex gap-4 mt-5">
                        <FaXTwitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
                        <FaLinkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
                        <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Team;
