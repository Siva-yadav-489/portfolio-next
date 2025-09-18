"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { StaticImageData } from "next/image";

type ThreeDCardDemoProps = {
  title: string;
  description: string;
  techstack: string;
  image: StaticImageData;
  github: string;
  liveUrl: string;
};
export function ThreeDCardDemo({
  title,
  description,
  techstack,
  image,
  github,
  liveUrl,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[27rem] h-[40rem] rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image.src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-5"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <span className="text-neutral-600 dark:text-white">Tech Stack:</span>{" "}
          {techstack}
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={github}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            github →
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={liveUrl}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live Demo
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
