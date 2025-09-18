"use client";

import React from "react";
import Heading from "./heading";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BlurFade } from "./magicui/blur-fade";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SkillIcon = ({
  icon: Icon,
  label,
  href,
  size = "size-12",
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  size?: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          target="_blank"
          aria-label={label}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "rounded-full dark:text-white/80 text-neutral-600",
            size,
            "hover:rotate-z-360 duration-500 ease-linear transition-transform"
          )}
        >
          <Icon className={size} />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const skills = [
  { icon: SiNextdotjs, label: "Next.js", href: "https://nextjs.org" },
  { icon: SiReact, label: "React", href: "https://react.dev" },
  {
    icon: SiTailwindcss,
    label: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    icon: SiJavascript,
    label: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { icon: SiNodedotjs, label: "Node.js", href: "https://nodejs.org" },
  { icon: SiExpress, label: "Express.js", href: "https://expressjs.com" },
  { icon: FaJava, label: "Java", href: "https://www.java.com" },
  { icon: SiMongodb, label: "MongoDB", href: "https://www.mongodb.com" },
  {
    icon: SiMysql,
    label: "MySQL",
    href: "https://www.mysql.com",
    size: "size-14",
  },
];

const Skills = () => {
  return (
    <div>
      <Heading heading="Skills" />
      <BlurFade className="flex flex-wrap gap-5 mt-8">
        {skills.map((skill) => (
          <SkillIcon
            key={skill.label}
            icon={skill.icon}
            label={skill.label}
            href={skill.href}
            size={skill.size}
          />
        ))}
      </BlurFade>
    </div>
  );
};

export default Skills;
