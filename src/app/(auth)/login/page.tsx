"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { FaFacebook, FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Inputs = {
  email: string;
  passwordRequired: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email"));

  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col justify-center items-center p-4 w-[25rem] gap-6">
          <span className="flex flex-col items-center gap-2">
            <h1 className="text-2xl font-bold">EduWell Guide</h1>
            <span className="flex flex-col items-center gap-1">
              <h2 className="text-xl font-normal">Welcome Back!</h2>
              <span className="text-gray-400">Please enter your details</span>
            </span>
          </span>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4"
          >
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="p-2 border border-gray-300 rounded-md w-[20rem] bg-transparent"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("passwordRequired", {
                required: "Password is required",
              })}
              className="p-2 border border-gray-300 rounded-md w-[20rem] bg-transparent"
            />
            {errors.passwordRequired && (
              <span className="text-red-500 text-sm">
                {errors.passwordRequired.message}
              </span>
            )}

            <span className="flex justify-start items-start gap-3">
              <Checkbox />
              <span className="flex flex-col gap-1">
                <h2 className="text-sm font-medium">Remember me</h2>
                <span className="text-sm text-gray-400">
                  Save login details for next time
                </span>
              </span>
            </span>

            <Button type="submit" variant={"default"}>
              Submit
            </Button>
          </form>
        </div>

        <hr className="my-4 w-[15rem] flex justify-center items-center" />

        <div className="flex flex-col items-center gap-6">
          <span className="flex text-sm text-gray-400 gap-3">
            Don&apos;t have an account?
            <Link href="/register">
              <span className="text-blue-500">Sign up</span>
            </Link>
          </span>

          <span className="flex flex-col gap-5">
            <Button
              variant={"outline"}
              className="flex items-center gap-2 w-[20rem]"
            >
              <Image
                src="/icons/icons8-google-480.png"
                alt="Google"
                width={20}
                height={20}
              />
              Sign in with Google
            </Button>
            <Button className="flex items-center gap-2 w-[20rem] bg-[#1877F2] hover:bg-blue-500 text-white">
              <FaFacebook />
              Sign in with Facebook
            </Button>
            <Button className="flex items-center gap-2 w-[20rem] bg-black text-white">
              <FaApple />
              Sign in with Apple
            </Button>
          </span>
        </div>

        <div>
          <p className="text-sm text-gray-400">@2025 EduWell Guide</p>
        </div>
      </div>
    </div>
  );
}
