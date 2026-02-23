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
          <h2 className="text-heading-1" style={{ color: "var(--color-text)" }}>
            What Our Community Says
          </h2>
        </AnimateOnScroll>
        <div className="mx-auto mt-12 max-w-3xl">
          <p
            className="text-2xl italic transition-opacity duration-500 md:text-3xl"
            style={{ color: "var(--color-text)" }}
            key={activeIndex}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[var(--color-primary)]/20"
            >
              {testimonial.avatar ? (
                <LazyImage
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span
                  className="text-xl font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {testimonial.author.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text)]">{testimonial.author}</p>
              <p className="text-caption">{testimonial.role}</p>
            </div>
          </div>
          {/* Pagination dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ease-out ${
                  index === activeIndex
                    ? "w-6"
                    : "w-2 hover:scale-110"
                }`}
                style={{
                  backgroundColor:
                    index === activeIndex ? "var(--color-primary)" : "var(--color-border)",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
