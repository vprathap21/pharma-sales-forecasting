"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Link from "next/link";
import { Button } from "./ui/button";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="  p-4">
        <h1 className="w-full  relative z-10 text-md md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Transform Your Pharma Sales Strategy
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Utilize cutting-edge AI to forecast sales trends, optimize inventory, and enhance your revenue strategy.
        </p>
        <div className="relative z-10">
            <Link href="/dashboard">
            <Button className="px-6 py-3 rounded-md cursor-pointer">Get Started</Button>
            </Link>
          </div>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
