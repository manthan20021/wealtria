"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  HoveredLink,
  MenuItem,
  Menu,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center z-[9999]">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 md:max-w-[250px] lg:max-w-2xl mx-auto z-[9999] transform-none",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Menu">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/website/about-page">About</HoveredLink>
            <HoveredLink href="/website/contact-form">Contact</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <HoveredLink href="/website/about-page" className="text-sm">
            <Card className="bg-transparent border-none flex flex-row items-center w-[300px] justify-between">
              <Image
                className="rounded-full h-[90px] w-[90px]"
                src="/heroLight.png"
                alt="MultipleGains brand image"
                width={90}
                height={90}
                priority
              />
              <p>
  MultipleGains is a modern personal finance brand built to 
  help everyday Indians create real wealth with smart choices. Learn More&aposs..
</p>

            </Card>
          </HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Blogs">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="The Compounding"
              href="/website/blog-page"
              src="/blog1.png"
              description="The 8th Wonder That Can Make You Crorepati. . . ."
            />
            <ProductItem
              title="How the Rich Think"
              href="/website/blog-page"
              src="/blog2.png"
              description="Have you ever wondered why some people seem to attract money easily — while others struggle all their life, even after working harder. . . ."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Insurance & Protection"
              href="/website/services-page"
              src="/ser-insurance-protection.jpeg"
              description="Safeguard your family’s future with tailored life insurance plans"
            />
            <ProductItem
              title="Mutual Funds & Investments"
              href="/website/services-page"
              src="/ser-mutual-funds.jpeg"
              description="Grow your wealth systematically with our expert investment strategies."
            />
            <ProductItem
              title="Personal Financial"
              href="/website/services-page"
              src="/ser-personal-financial-planning.jpeg"
              description="Customized financial roadmap to help you achieve short-term and longterm goals"
            />
            <ProductItem
              title="Tax Planning & Savings"
              href="/website/services-page"
              src="/ser-tax-planning.jpeg"
              description="Maximize your savings legally and minimize your tax liabilities."
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
