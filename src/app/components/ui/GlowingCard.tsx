"use client";
import React from "react";
import { BackgroundGradient } from "./background-gradient-card";
import Image, { StaticImageData } from "next/image";

export function BackgroundGradientDemo({
  label,
  image,
}: {
  label: string;
  image: StaticImageData;
}) {
  return (
    <div className="lg:w-40 w-32 ">
      <BackgroundGradient className="rounded-[22px] py-4   bg-white dark:bg-zinc-900">
        <div className="flex justify-center">
          <Image
            src={image}
            alt="jordans"
            height="50"
            width="50"
            className="aspect-square"
          />
        </div>
        <p className="text-xs lg:text-lg text-center text-white mt-4 ">
          {label}
        </p>
      </BackgroundGradient>
    </div>
  );
}
