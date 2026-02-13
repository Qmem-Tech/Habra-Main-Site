import { ChevronDown } from "lucide-react";
import { screenshots } from "../../assets/screenshots";
import { AppDownloadButtons } from "../common/AppDownloadButtons";
import { PhoneMockup } from "../common/PhoneMockup";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left: Content */}
        <div className="flex-1 text-center lg:text-left">
          <AnimateOnScroll variant="fadeUp" delay={0}>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Your Habesha Community,{" "}
              <span className="text-[#1a4d3e]">One App Away.</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fadeUp" delay={100}>
            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Discover new places, find businesses, connect with your community,
              get rewards for a cause, and even find a job — all through Habesha.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fadeUp" delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <AppDownloadButtons variant="dark" />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right: Phone mockup */}
        <AnimateOnScroll variant="fadeUpScale" delay={150} className="flex flex-1 justify-center lg:justify-end">
          <PhoneMockup src={screenshots.hero} alt="Habesha app feed" imageOnly priority />
        </AnimateOnScroll>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#features"
          className="flex flex-col items-center gap-1 text-gray-400 transition-colors hover:text-[#1a4d3e]"
          aria-label="Scroll to features"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}
