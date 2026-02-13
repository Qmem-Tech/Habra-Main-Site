import { MapPin, Tag, CalendarCheck, Star } from "lucide-react";
import { PhoneMockup } from "../common/PhoneMockup";

const bulletPoints = [
  {
    icon: MapPin,
    text: "Find businesses near you",
  },
  {
    icon: Tag,
    text: "Exclusive deals and promotions",
  },
  {
    icon: CalendarCheck,
    text: "Easy booking and ordering",
  },
  {
    icon: Star,
    text: "Read and write reviews",
  },
];

export function SupportLocalBusinesses() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f4]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left: Content */}
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Support Local Businesses
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Connect with local businesses in your community. Find great offers,
            book services, and support those who make your neighborhood special.
          </p>
          <ul className="mt-8 space-y-4">
            {bulletPoints.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a4d3e] text-white">
                  <Icon size={16} />
                </div>
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex flex-1 justify-center">
          <PhoneMockup tilted />
        </div>
      </div>
    </section>
  );
}
