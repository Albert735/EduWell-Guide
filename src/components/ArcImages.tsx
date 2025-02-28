"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/assets/african-american-woman-beige-suit-portrait.jpg",
    alt: "User 1",
  },
  {
    src: "/assets/african-american-woman-beige-suit-portrait.jpg",
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
  {
    src: "/assets/african-american-woman-beige-suit-portrait.jpg",
    alt: "User 6",
  },
];

const positions = [
  { x: "-150px", y: "80px", rotate: "-25deg" },
  { x: "-90px", y: "-40px", rotate: "-15deg" },
  { x: "0px", y: "-100px", rotate: "0deg" },
  { x: "90px", y: "-40px", rotate: "15deg" },
  { x: "150px", y: "80px", rotate: "25deg" },
  { x: "200px", y: "120px", rotate: "30deg" }, // Added 6th position
];

export default function ArcImages() {
  return (
    <div className="relative flex items-center justify-center h-[300px]">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="absolute"
          style={{
            transform: `translate(${positions[index].x}, ${positions[index].y}) rotate(${positions[index].rotate})`,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={90}
            height={90}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  );
}
