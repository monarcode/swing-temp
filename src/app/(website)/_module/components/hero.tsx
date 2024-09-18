"use client";

import BigBen from "@/assets/images/big-ben.jpg";
import Phone from "@/assets/images/phone.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="space-y-7 mt-28 container">
      <h1 className="text-[clamp(2.75rem,calc(1.5rem+2.3vw),4.5rem)] font-medium text-neutral-900 leading-tight">
        Swing is a venture studio based in London{" "}
        <span className="h-[clamp(70px,0.3vw,75px)] w-[110px] overflow-hidden rounded-xl relative inline-block">
          <Image src={BigBen} alt="big ben" className="object-cover" fill />
        </span>{" "}
        partnering with startups to craft intuitive{" "}
        <span className="h-[clamp(70px,0.3vw,75px)] w-[110px] overflow-hidden rounded-xl relative inline-block">
          <Image src={Phone} alt="big ben" className="object-cover" fill />
        </span>{" "}
        products for their customers.
      </h1>

      <Button className="flex items-center gap-2 font-medium group">
        Book a call{" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:-rotate-45 transition-transform"
        >
          <path
            d="M12.9077 5.64985C12.5762 5.25209 11.9851 5.19835 11.5873 5.52981C11.1896 5.86129 11.1358 6.45244 11.4673 6.8502L13.3109 9.0625H4.6875C4.16974 9.0625 3.75 9.48224 3.75 10C3.75 10.5178 4.16974 10.9375 4.6875 10.9375H13.311L11.4673 13.1499C11.1358 13.5476 11.1896 14.1388 11.5873 14.4703C11.9851 14.8018 12.5762 14.748 12.9077 14.3503L16.0327 10.6002C16.3225 10.2525 16.3225 9.74753 16.0327 9.39985L12.9077 5.64985Z"
            fill="white"
          />
        </svg>
      </Button>
    </header>
  );
}
