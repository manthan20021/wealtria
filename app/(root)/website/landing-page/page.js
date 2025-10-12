"use client";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTheme } from "next-themes";
import { Raleway } from "next/font/google";

// 🔹 Font definition
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function LandingPage() {
  const { theme } = useTheme();
  const words =
    "We help India’s middle class grow their wealth, protect their assets, and achieve financial freedom.";

  return (
    <div className="w-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-[1200px] px-5 py-10 flex flex-col-reverse lg:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-[60%] flex flex-col sm:items-center md:items-start text-center lg:text-left">
          {/* Heading */}
          <h1
            className={`${raleway.className} dark:text-white text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-17 font-light`}
          >
            Take Control of Your Financial Future with 
          </h1>

          <h1
            className={`${raleway.className} bg-clip-text lg:leading-25  text-transparent dark:bg-gradient-to-b from-neutral-600 to-white bg-black text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-bold tracking-tight mt-2`}
          >
            wealtria
          </h1>

          {/* Subtext */}
          <TextGenerateEffect
            className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl lg:leading-6"
            words={words}
          />

          {/* Button and Link */}
          <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start mt-8 gap-5">
            <Button className="bg-[#6F39C5] rounded-full px-8 py-6 text-base sm:text-lg">
              Explore
            </Button>

            <Button className="rounded-full px-8 py-6 text-base sm:text-lg">
              Check your financial health
            </Button>
            
              
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[40%] flex justify-center">
          {theme === "light" && (
            <img
              src="/heroLight.png"
              alt="Hero Light"
              className="w-[90%] sm:w-[70%] md:w-[80%] lg:w-full h-auto object-contain"
            />
          )}
          {theme === "dark" && (
            <img
              src="/heroDark.png"
              alt="Hero Dark"
              className="w-[90%] sm:w-[70%] md:w-[80%] lg:w-full h-auto object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
