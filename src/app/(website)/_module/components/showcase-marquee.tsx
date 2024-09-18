"use client";

import Marquee from "react-fast-marquee";

import one from "@/assets/images/slide-1.png";
import two from "@/assets/images/slide-2.png";
import three from "@/assets/images/slide-3.png";
import four from "@/assets/images/slide-4.png";
import Image, { StaticImageData } from "next/image";

export default function ShowcaseMarquee() {
  return (
    <div className="w-screen flex">
      <Marquee autoFill>
        <SlideCard image={one} />
        <SlideCard image={two} />
        <SlideCard image={three} />
        <SlideCard image={four} />
      </Marquee>
    </div>
  );
}

function SlideCard({ image }: { image: StaticImageData }) {
  return (
    <div className="h-[460px] aspect-square rounded-xl bg-neutral-100 mx-2 relative overflow-hidden">
      <Image
        src={image}
        alt="slide"
        fill
        className="object-cover"
        quality={100}
      />
    </div>
  );
}
