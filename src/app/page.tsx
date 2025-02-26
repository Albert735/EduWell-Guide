import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
    </div>
  );
}
