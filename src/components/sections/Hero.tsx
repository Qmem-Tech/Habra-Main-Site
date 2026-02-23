import { ChevronDown } from "lucide-react";
import { screenshots } from "../../assets/screenshots";
import { AppDownloadButtons } from "../common/AppDownloadButtons";
import { PhoneMockup } from "../common/PhoneMockup";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        <div className="flex-1 text-center lg:text-left">
          <AnimateOnScroll variant="fadeUp" delay={0}>
            <h1 className="text-display" style={{ color: "var(--color-text)" }}>
              Your Habesha Community,{" "}
              <span style={{ color: "var(--color-primary)" }}>One App Away.</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fadeUp" delay={100}>
            <p className="mt-6 max-w-xl text-body-lg">
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
          className="flex flex-col items-center gap-1 transition-colors hover:opacity-80"
          style={{ color: "var(--color-text-subtle)" }}
          aria-label="Scroll to features"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}
