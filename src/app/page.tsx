import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Global from "@/components/Global";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Benefits />
      <Global />
      <Features />
      <Team />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
