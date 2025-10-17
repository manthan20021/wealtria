import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function FooterPage(){


    return(
        <div className="w-full flex flex-col items-center justify-center bg-[#22192d] px-6 sm:px-10 md:px-20 lg:px-30 py-10">
  {/* top */}
  <div className="w-full flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 mb-10">
    {/* Left section (Logo + Socials) */}
    <div className="flex flex-col items-center md:items-start gap-6">
      <h1
        className={`${raleway.className} bg-clip-text text-transparent bg-white text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold tracking-tight`}
      >
        MultipleGains.
      </h1>

      <div className="flex justify-center md:justify-start gap-5 text-white text-xl">
        <Facebook className="cursor-pointer hover:text-[#6B21A8] transition" />
        <Instagram className="cursor-pointer hover:text-[#6B21A8] transition" />
        <Twitter className="cursor-pointer hover:text-[#6B21A8] transition" />
        <Mail className="cursor-pointer hover:text-[#6B21A8] transition" />
        <Linkedin className="cursor-pointer hover:text-[#6B21A8] transition" />
      </div>
    </div>

    {/* Middle section (Quick Links) */}
    <div className="text-white flex flex-col gap-3 text-center md:text-left">
      <h2 className="font-semibold text-lg mb-2 text-gray-300">Quick Links</h2>
      <Link href="/" className="hover:text-gray-400 transition">Home</Link>
      <Link href="/website/about-page" className="hover:text-gray-400 transition">About</Link>
      <Link href="/website/services-page" className="hover:text-gray-400 transition">Services</Link>
      <Link href="/website/blog-page" className="hover:text-gray-400 transition">Blogs</Link>
      <Link href="/website/contact-form" className="hover:text-gray-400 transition">Contact</Link>
      <Link href="/website/helt-chekup-tool" className="hover:text-gray-400 transition">Financial Checkup</Link>
    </div>

    {/* Right section (Services) */}
    <div className="text-white flex flex-col gap-3 text-center md:text-left">
      <h2 className="font-semibold text-lg mb-2 text-gray-300">Our Services</h2>
      <Link href="/website/contact-form" className="hover:text-gray-400 transition">Life Insurance &amp; Protection</Link>
      <Link href="/website/contact-form" className="hover:text-gray-400 transition">Mutual Funds &amp; Investments</Link>
      <Link href="/website/contact-form" className="hover:text-gray-400 transition">Health &amp; Critical Illness Insurance</Link>
      <Link href="/website/contact-form" className="hover:text-gray-400 transition">Loans &amp; Credit Solutions</Link>
      <Link href="/website/contact-form" className="hover:text-gray-400 transition">Tax Planning &amp; Savings</Link>
      <Link href="/website/contact-form" className="hover:text-gray-400 transition">Personal Financial Planning</Link>
    </div>
  </div>

  {/* bottom */}
  <div className="w-full border-t border-gray-700 pt-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
    <p className="text-sm sm:text-base text-gray-400 text-center sm:text-left">
       © 2025 MultipleGains. All rights reserved.
    </p>
    <p className="text-sm sm:text-base text-gray-400 text-center sm:text-left">
      Developed by <span className="text-white font-medium">Manthan</span>.
    </p>
  </div>
</div>

    )
}
