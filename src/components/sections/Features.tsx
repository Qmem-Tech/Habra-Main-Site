import {
  MapPin,
  Building2,
  Briefcase,
  Gift,
  MessageCircle,
  Users,
} from "lucide-react";
import { FeatureCard } from "../common/FeatureCard";
import { Section } from "../ui/Section";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

const features = [
  {
    icon: <MapPin size={24} />,
    title: "Events & Contests",
    description:
      "Stay in the loop with community events, contests, and happenings. Never miss what's going on around you.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Business Directory",
    description:
      "Explore local businesses, find services near you, and discover new favorites in your community.",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Job Board",
    description:
      "Find job opportunities and career connections within the Habesha community. Your next role could be one tap away.",
  },
  {
    icon: <Gift size={24} />,
    title: "Deals & Promo Area",
    description:
      "Access exclusive deals and promotions from local businesses. Support your community while saving.",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Messaging",
    description:
      "Connect directly with community members and businesses. Real-time messaging made simple.",
  },
  {
    icon: <Users size={24} />,
    title: "Community Groups",
    description:
      "Join or create groups based on interests, location, or causes. Build meaningful connections.",
  },
];

const stagger = [0, 80, 160, 240, 320, 400];

export function Features() {
  return (
    <Section id="features">
      <AnimateOnScroll variant="fadeUp" className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Everything You Need
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Habesha is a platform for your community. Never miss what&apos;s
          happening.
        </p>
      </AnimateOnScroll>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <AnimateOnScroll key={feature.title} variant="fadeUp" delay={stagger[i] ?? 0}>
            <FeatureCard {...feature} />
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
