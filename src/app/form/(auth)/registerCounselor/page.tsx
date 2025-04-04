"use client";

import { Button } from "@/components/ui/button";
// import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Back from "@/components/ui/Back";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const password = watch("password");

  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center justify-start h-screen">
      <Back />
      <div className="flex flex-col items-center justify-center gap-8 w-[25rem]">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <span className="-400">Lets get started</span>
          <Button variant="outline" className="gap-2 w-[20rem]">
            <Image
              src="/icons/icons8-google-480.png"
              alt="Google"
              width={25}
              height={25}
            />
            Log in with Google
          </Button>
        </div>

        <hr className="my-4 w-[15rem] flex justify-center items-center" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-[20rem]"
        >
          <span className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="p-2 border dark:border-white/15 rounded-md bg-transparent"
            />
            {errors.email && (
              <span className="text-red text-sm">{errors.email.message}</span>
            )}
          </span>

          <Select>
            <SelectTrigger className="w-full h-11">
              <SelectValue placeholder="--Field of Expertise --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="careerAssistant">Career Assistant</SelectItem>
              <SelectItem value="mentalHealth">Mental Health</SelectItem>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="therapist">Therapist</SelectItem>
              <SelectItem value="academics">Academics</SelectItem>
            </SelectContent>
          </Select>

          <span className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="p-2 border dark:border-white/15 rounded-md bg-transparent"
            />
            {errors.password && (
              <span className="text-red text-sm">
                {errors.password.message}
              </span>
            )}
          </span>

          <span className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="p-2 border dark:border-white/15 rounded-md bg-transparent"
            />
            {errors.confirmPassword && (
              <span className="text-red text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </span>

          <span className="flex gap-3">
            <Checkbox />
            <span className="text-sm dark:-300">
              By signing up, you agree to our Terms of Service and acknowledge
              that you have read and understand our Privacy Policy.
            </span>
          </span>

          <Link href="/dashboard/counselor">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </Link>
        </form>

        <div className="flex f gap-2">
          <span>Already have an account?</span>
          <Link href="/form/login">
            <span className="text-blue cursor-pointer">Log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
