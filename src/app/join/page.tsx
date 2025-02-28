import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Image from "next/image";
import ArcImages from "@/components/ArcImages";

export default function JoinPage() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center justify-start h-screen">
      <div className="flex items-start justify-start w-full  p-4">
        <Link href="/">
          <h1 className="text-2xl">EduWell Guide</h1>
        </Link>
      </div>
      <div className="relative flex flex-col items-center justify-center ">
        <ArcImages />

        <div className="flex flex-col items-center justify-center space-y-4">
          <h2>Join Our Community of Students</h2>
          <p className="text-center w-[30rem] text-gray-400">
            Join us to get access to all the resources and support you need to
            navigate the EduWell platform.Meet students and become part of our
            thriving community.
          </p>
          <Button variant={"default"}>Join Now</Button>
        </div>
      </div>
    </div>
  );
}
