"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// 🔹 Font definition
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function LandingPage() {
  const { theme } = useTheme();  

  return (
    <div className="w-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-[1300px] px-5 py-10 flex flex-col-reverse lg:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-[60%] flex flex-col sm:items-center md:items-start text-center lg:text-left">
          {/* Heading */}
          <h1
            className={`${raleway.className} dark:text-white text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light`}
          >
            Take Control of Your Financial Future with
          </h1>

          <h1
            className={`${raleway.className} bg-clip-text h-[60px] sm:h-[150px] text-transparent dark:bg-gradient-to-b from-neutral-600 to-white bg-black text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-bold tracking-tight mt-2`}
          >
            MultipleGains.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl">
            Wehelp India’s middle class grow their wealth, protect their assets, and achieve financial freedom.
          </p>

          {/* Button and Link */}
          <div className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start mt-8 gap-5">
            <Link href="/website/contact-form">
              <Button className="bg-[#6F39C5] text-white rounded-full px-8 py-6 text-base sm:text-lg">
                Book Now
              </Button>
            </Link>

            <Link
              href="/website/helt-chekup-tool"
              className="relative inline-flex items-center justify-center rounded-full font-bold px-8 py-6 text-base sm:text-lg"
            >
              Financial Health Checkup
              {/* Animated arrow line */}
              <span className="absolute right-0-0 bottom-[2px] w-full h-[3px] bg-gradient-to-r from-green-600 to-transparent animate-moveLine rounded-full overflow-hidden" />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[40%] flex justify-center">
          {theme === "light" && (
            <Image
              src="/heroLight.png"
              alt="Hero Light"
              width={600}
              height={600}
              className="w-[90%] sm:w-[70%] md:w-[80%] lg:w-full h-auto object-contain"
              priority
            />
          )}
          {theme === "dark" && (
            <Image
              src="/heroDark.png"
              alt="Hero Dark"
              width={600}
              height={600}
              className="w-[90%] sm:w-[70%] md:w-[80%] lg:w-full h-auto object-contain"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
