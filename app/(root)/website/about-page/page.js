import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function About() {
  return (
    <div className="w-full flex justify-center bg-[#330778] py-20 px-4">
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="w-full lg:w-[35%] flex justify-center lg:justify-start">
          <Image
            src="/heroLight.png"
            alt="Business Man"
            width={380}
            height={380}
            className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto object-contain"
            priority
          />
        </div>

        <div className="w-full lg:w-[60%] text-white">
          <h1
            className={`${raleway.className} text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6`}
          >
            About Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5">
            MultipleGains is a modern personal finance brand built to help everyday Indians create real wealth with smart choices.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5">
            Founded three years ago, we currently manage an Assets Under Management (AUM) of over ₹50 lakh and proudly serve 100+ satisfied clients across India.
            Our journey started with a simple belief &mdash; that financial freedom should not be limited to a few, but accessible to everyone who earns, saves, and dreams big.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5">
            At MultipleGains, we guide individuals and families through insurance, mutual funds, tax-saving investments, and long-term wealth creation strategies.
            We combine trust, transparency, and technology to help clients grow their money efficiently and confidently.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5">
            Our vision is vast &mdash; to build India&apos;s most reliable financial ecosystem where millions can learn, invest, and achieve their financial goals with ease.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            We don&apos;t just manage money &mdash; we help you multiply your gains.
          </p>
        </div>
      </div>
    </div>
  );
}
