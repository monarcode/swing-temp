import Hero from "./_module/components/hero";
import OurWork from "./_module/components/our-work";
import ShowcaseMarquee from "./_module/components/showcase-marquee";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <ShowcaseMarquee />
      <OurWork />
    </div>
  );
}
