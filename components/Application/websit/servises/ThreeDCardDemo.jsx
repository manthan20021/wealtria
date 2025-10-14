"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo({servicedata}) {
  const {title, url, discption} = servicedata
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] md:w-auto lg:w-[550px] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
         {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
         {discption}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.jRdnu2EEBVsPcA_JgaR5pAHaE8?pid=Api&P=0&h=180"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
         
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
            Book free Consultaion
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
