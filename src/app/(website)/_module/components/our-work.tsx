import Caps from "@/components/commons/caps-title";
import SectionTitle from "@/components/commons/section-title";
import Image, { StaticImageData } from "next/image";

import Work1Image from "@/assets/images/work-1.png";
import Work2Image from "@/assets/images/work-2.png";
import Work3Image from "@/assets/images/work-3.png";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function OurWork() {
  return (
    <section className="flex flex-col py-28 container">
      <Caps>OUR WORK IS FOCUSED ON</Caps>
      <SectionTitle className="text-center">
        Striking a seamless balance between function and form
      </SectionTitle>

      <div className="grid grid-cols-2 gap-4 mt-16">
        <Card
          image={Work1Image}
          title="Start ordering on GoSource today to make the process of buying food items very easy for your business."
          ctaLabel="Commerce"
          ctaLink="#"
          linkLabel="PLTFM"
          imageClassname="m-auto"
        />

        <Card
          image={Work2Image}
          title="Save for your next adventure, gadget, or goal and earn a consistent yield on your cash."
          ctaLabel="Book a call"
          ctaLink="#"
          linkLabel="Chanelled"
          imageClassname="mt-auto mx-auto"
          className="mt-28"
        />

        <Card
          image={Work3Image}
          title="Say goodbye to working in silos, create projects, share resources and get updates from your team members."
          ctaLabel="SAAS"
          ctaLink="#"
          linkLabel="Overlap"
          imageClassname="m-auto"
          className="col-span-full mt-16"
        />
      </div>
    </section>
  );
}

type CardProps = {
  image: StaticImageData;
  title: string;
  ctaLabel: string;
  ctaLink: string;
  linkLabel: string;
  imageClassname?: string;
  imageWrapperClassname?: string;
  className?: string;
};

function Card(props: CardProps) {
  return (
    <div className={cn("flex flex-col", props.className)}>
      <div
        className={cn(
          "bg-neutral-200 h-[550px] w-full rounded-lg flex flex-col",
          props.imageWrapperClassname
        )}
      >
        <Image
          src={props.image}
          alt="work"
          className={cn("w-[80%] h-[80%] object-contain", props.imageClassname)}
        />
      </div>

      <h3 className="text-3xl font-medium mt-16 mb-10">{props.title}</h3>

      <p className="text-neutral-400">
        {props.ctaLabel}:{" "}
        {
          <Link
            className="underline text-neutral-900 font-medium"
            href={props.ctaLink}
          >
            {props.linkLabel}
          </Link>
        }
      </p>
    </div>
  );
}
