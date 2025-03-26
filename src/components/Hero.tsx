import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

// Reusable ImageCard component
const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-[10rem] h-[14rem] sm:w-[10rem] sm:h-[18rem] md:w-[15rem] md:h-[22.5rem] relative overflow-hidden rounded-2xl transition-all ease-in-out duration-300">
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
      priority
    />
  </div>
);

// Image data
const images = [
  {
    src: "/assets/african-american-woman-beige-suit-portrait.jpg",
    alt: "African American woman in a beige suit",
  },
  {
    src: "/assets/vertical-shot-happy-young-woman-with-curly-hair-holds-notepad-pen-makes-notes-what-she-observes-around-city-dressed-casual-green-jumper-poses-outdoors-against-blurred-background.jpg",
    alt: "Happy young woman with curly hair taking notes",
  },
  {
    src: "/assets/young-student-working-assignment.jpg",
    alt: "Young student working on an assignment",
  },
  {
    src: "/assets/young-student-learning-library.jpg",
    alt: "Young student learning in a library",
  },
];

function Hero() {
  return (
    <section className="hero flex flex-col justify-center items-center max-w-screen-xl mx-auto p-4 gap-10 py-20">
      {/* Header Section */}
      <header className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Empowering Students with <br />
          <span className="bg-gradient-to-r from-[#3674B5] to-[#B2A5FF] bg-clip-text text-transparent font-extrabold">
            Expert Guidance
          </span>
        </h1>
      </header>

      {/* Description and Buttons */}
      <div className="flex flex-col items-center gap-5 text-center px-4">
        <p className="max-w-[40rem] leading-relaxed">
          EduWell Guide connects university students with qualified counselors
          for academic, mental health, and career support. Experience a
          community-driven platform designed to foster growth and well-being.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/join">
            <Button variant="default">Get Started</Button>
          </Link>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex  justify-between gap-4 md:gap-6 lg:gap-8 w-full px-4">
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  );
}

export default Hero;
