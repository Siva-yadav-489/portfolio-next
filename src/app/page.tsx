"use client";
import About from "@/components/about";
import Intro from "@/components/intro";

import { DockDemo } from "@/components/magicui/dock-demo";
import Noise from "@/components/magicui/noise";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="h-full relative overflow-hidden flex flex-col items-center space-x-5">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <div className="font-bold max-w-4xl mx-auto max-[900px]:mx-5 my-20 max-md:my-10 font-mono space-y-14">
        <Intro />
        <About />
        <Skills />
        <Projects />
      </div>
      <DockDemo />
    </div>
  );
}
