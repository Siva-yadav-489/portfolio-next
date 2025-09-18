import React from "react";
import { BlurFade } from "./magicui/blur-fade";

const Heading = ({ heading }: { heading: string }) => {
  return (
    <BlurFade>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl mb-2">
        {heading}
      </h2>
    </BlurFade>
  );
};

export default Heading;
