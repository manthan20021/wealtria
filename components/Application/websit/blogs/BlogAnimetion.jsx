"use client";
import { WobbleCard } from "@/components/ui/wobble-card";
import Link from "next/link";
import React from "react";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs relative z-10">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white"
          >
            How the Rich Think About Money
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Have you ever wondered why some people seem to attract money easily &mdash; while others struggle all their life, even after working harder. . . .
          </p>

          <Link
            href="https://liveastepahead.blogspot.com/2025/10/how-rich-think-about-money-and-what.html"
            className="inline-block mt-6 px-6 py-3 bg-white text-[#A60952] font-bold rounded-lg hover:bg-neutral-200 transition"
          >
            Learn More
          </Link>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <div className="max-w-sm relative z-10">
          <h2
            className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white"
          >
            The Power of Compounding.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            The 8th Wonder That Can Make You Crorepati. . . .
          </p>
          <Link
            href="https://liveastepahead.blogspot.com/2025/10/power-of-compounding-8th-wonder-that.html"
            className="inline-block mt-6 px-6 py-3 bg-white text-[#4F43B6] font-bold rounded-lg hover:bg-neutral-200 transition"
          >
            Learn More
          </Link>
        </div>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
      >
        <div className="max-w-sm relative z-10">
          <h2
            className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white"
          >
            Your Salary Can Make You Rich &mdash; If You Stop Doing These 5 Mistakes.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            You work hard. You give your time, your energy, your peace &mdash; all for that one SMS at the end of the month
          </p>
          <Link
            href="https://liveastepahead.blogspot.com/2025/10/your-salary-can-make-you-rich-if-you.html"
            className="inline-block mt-6 px-6 py-3 bg-white text-[#314C99] font-bold rounded-lg hover:bg-neutral-200 transition"
          >
            Learn More
          </Link>
        </div>
      </WobbleCard>

    </div>
  );
}
