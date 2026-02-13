import { ChevronDown } from "lucide-react";
import { AppDownloadButtons } from "../common/AppDownloadButtons";
import { PhoneMockup } from "../common/PhoneMockup";

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left: Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Your Habesha Community,{" "}
            <span className="text-[#1a4d3e]">One App Away.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Discover new places, find businesses, connect with your community,
            get rewards for a cause, and even find a job — all through Habesha.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <AppDownloadButtons variant="dark" />
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <PhoneMockup tilted />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#features"
          className="flex flex-col items-center gap-1 text-gray-400"
          aria-label="Scroll to features"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}
