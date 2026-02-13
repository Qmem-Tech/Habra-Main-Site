import { Calendar, User, Bell, Share2 } from "lucide-react";
import { screenshots } from "../../assets/screenshots";
import { PhoneMockup } from "../common/PhoneMockup";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

const bulletPoints = [
  {
    icon: Calendar,
    text: "Discover local events",
  },
  {
    icon: User,
    text: "Follow your favorite creators",
  },
  {
    icon: Bell,
    text: "Get real-time updates",
  },
  {
    icon: Share2,
    text: "Share your experiences",
  },
];

export function SeeWhatHappening() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f4]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        <AnimateOnScroll variant="fadeUp" className="order-2 flex flex-1 justify-center lg:order-1">
          <PhoneMockup src={screenshots.events} alt="Events and feed" imageOnly />
        </AnimateOnScroll>

        <div className="order-1 flex flex-1 flex-col justify-center lg:order-2">
          <AnimateOnScroll variant="fadeUp">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              See What&apos;s Happening
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Stay updated with the latest community events, news, and stories.
              Our feed keeps you connected to what matters most.
            </p>
          </AnimateOnScroll>
          <ul className="mt-8 space-y-4">
            {bulletPoints.map(({ icon: Icon, text }, i) => (
              <AnimateOnScroll key={text} variant="fadeUp" delay={100 + i * 60}>
                <li className="group flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a4d3e] text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon size={16} />
                  </div>
                  <span className="text-gray-700">{text}</span>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
