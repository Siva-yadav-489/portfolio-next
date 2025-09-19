import React from "react";
import { BlurFade } from "./magicui/blur-fade";
import Heading from "./heading";
import TiltedCard from "./TiltedCard";

const Intro = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Heading heading="Hello, I'm Siva Kumar Yadav M" />
        <BlurFade inView>
          <span className="text-pretty font-light opacity-70 tracking-tighter sm:text-xl">
            Full Stack Developer
          </span>
        </BlurFade>
      </div>
      <BlurFade inView>
        <TiltedCard
          imageSrc={"/profile-pic.jpeg"}
          altText="me"
          captionText="it's me"
          containerHeight="150px"
          containerWidth="150px"
          imageHeight="150px"
          imageWidth="150px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </BlurFade>
    </div>
  );
};

export default Intro;
