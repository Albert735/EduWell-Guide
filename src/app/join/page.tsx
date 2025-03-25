"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Image from "next/image";
import ArcImages from "@/components/ArcImages";
import ToggleTheme from "@/components/Toggle-theme";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center justify-start h-screen">
      <div className="flex justify-between items-start w-full  p-4">
        <Link href="/">
          <h1 className="text-2xl">EduWell Guide</h1>
        </Link>
        <ToggleTheme />
      </div>

      <div className="relative flex flex-col items-center justify-center  w-full h-full gap-5">
        <ArcImages />
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Join Our Community of Students</h2>
          <p className="text-center w-[30rem] -400">
            Join us to get access to all the resources and support you need to
            navigate the EduWell platform.Meet students and become part of our
            thriving community.
          </p>
        </div>

        <div>
          <Dialog>
            <DialogTrigger className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm">
              Join Now
            </DialogTrigger>
            <DialogContent className="gap-8">
              <DialogHeader>
                <DialogTitle className="text-center">Join Now!</DialogTitle>
                <DialogDescription>
                  <span className="flex flex-col gap-4">
                    <span className="text-center">
                      Sign up for free and connect with counselors.
                    </span>
                    <span className="flex  w-full justify-center items-center gap-4 ">
                      <Link href="/form">
                        <Button className="h-9 px-4 py-2">Sign Up</Button>
                      </Link>

                      <Link href="/form/login">
                        <Button variant={"outline"} className="h-9 px-4 py-2">
                          Log In
                        </Button>
                      </Link>
                    </span>
                    {/* <span className="w-full border" /> */}
                  </span>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
