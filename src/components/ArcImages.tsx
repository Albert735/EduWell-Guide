"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const images = [
  {
    src: "/assets/african-american-woman-beige-suit-portrait.jpg",
    alt: "User 1",
  },
  {
    src: "/assets/female-freelancer-writes-notes-notepad-notes-future-plans-checklist-organization-free-time-poses-outside-against-buildings.jpg",
    alt: "User 2",
  },
  {
    src: "/assets/african-american-woman-beige-suit-portrait.jpg",
    alt: "User 3",
  },
  {
    src: "/assets/african-american-woman-beige-suit-portrait.jpg",
    alt: "User 4",
  },
  {
    src: "/assets/african-american-woman-beige-suit-portrait.jpg",
    alt: "User 5",
  },
  //   {
  //     src: "/assets/african-american-woman-beige-suit-portrait.jpg",
  //     alt: "User 6",
  //   },
];

const positions = [
  { x: "-340px", y: "80px", rotate: "-25deg" },
  { x: "-180px", y: "-30px", rotate: "-15deg" },
  { x: "0px", y: "-130px", rotate: "-5deg" }, // Center image
  { x: "180px", y: "-60px", rotate: "10deg" },
  { x: "360px", y: "80px", rotate: "25deg" },
];
export default function ArcImages() {
  return (
    <div className="relative w-screen md:w-screen xl:w-full h-[30rem] justify-center items-center flex ">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="absolute"
          style={positions[index]}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={200}
            height={200}
            className="rounded-xl shadow-lg "
          />
        </motion.div>
      ))}
    </div>
  );
}
