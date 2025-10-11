"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, MenuItem, Menu, ProductItem } from "@/components/ui/navbar-menu";
import { Card } from "@/components/ui/card";

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
            <HoveredLink href="">About</HoveredLink>
            <HoveredLink href="/">Contact</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <HoveredLink href="" className="text-sm">
            <Card className="bg-transparent border-none flex flex-row items-center w-[300px] justify-between">
              <img
                className="rounded-full h-[90px] w-[90px]"
                src="https://tse2.mm.bing.net/th/id/OIP.YblZ-BGB5US6ZfrUJpnnRQHaFL?pid=Api&P=0&h=180"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet. Learn More..
              </p>
            </Card>
          </HoveredLink>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Blogs">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Blog Title"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Blogs in one line: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque sint."
            />
            <ProductItem
              title="Blog Title"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Blogs in one line: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, itaque sint."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Services Title"
              href="/website/services-page"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Lorem ipsum dolor sit amet consectetur adipisicing"
            />
            <ProductItem
              title="Services Title"
              href="/website/services-page"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Lorem ipsum dolor sit amet consectetur adipisicing"
            />
            <ProductItem
              title="Services Title"
              href="/website/services-page"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Lorem ipsum dolor sit amet consectetur adipisicing"
            />
            <ProductItem
              title="Services Title"
              href="/website/services-page"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Lorem ipsum dolor sit amet consectetur adipisicing"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
