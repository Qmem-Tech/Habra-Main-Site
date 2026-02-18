import { useState } from "react";
import { LazyImage } from "../ui/LazyImage";
import { Section } from "../ui/Section";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Finally, one app for everything! I found my favorite restaurant, got rewards for a cause, and even found a job — all through Habesha.",
    author: "Karen K.",
    role: "Habesha User",
    avatar: null,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  return (
    <Section>
      <div className="text-center">
        <AnimateOnScroll variant="fadeUp">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Community Says
          </h2>
        </AnimateOnScroll>
        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-2xl italic text-gray-700 transition-opacity duration-500 md:text-3xl" key={activeIndex}>
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-[#1a4d3e]/20 flex items-center justify-center overflow-hidden">
              {testimonial.avatar ? (
                <LazyImage
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-xl font-semibold text-[#1a4d3e]">
                  {testimonial.author.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          {/* Pagination dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ease-out ${
                  index === activeIndex
                    ? "w-6 bg-[#1a4d3e]"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
