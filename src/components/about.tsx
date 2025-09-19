import React from "react";
import Heading from "./heading";
import { BlurFade } from "./magicui/blur-fade";

const About = () => {
  return (
    <div>
      <Heading heading="About" />
      <BlurFade>
        <p className="dark:text-white/80 text-neutral-600">
          I&apos;m a B.Tech graduate in Information Technology with a passion
          for building user-friendly websites. I&apos;m currently working as an
          SDE intern at Codedale, where I&apos;m gaining hands-on experience by
          working on diverse projects. My expertise lies in full-stack
          development, with a particular focus on crafting modern and responsive
          user interfaces using React, Next.js, and Tailwind CSS.
        </p>
      </BlurFade>
    </div>
  );
};

export default About;
