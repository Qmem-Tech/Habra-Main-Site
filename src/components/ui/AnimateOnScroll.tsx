import { type ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

export interface AnimateOnScrollProps {
  children: ReactNode;
  /** Delay in ms before animation starts (for stagger) */
  delay?: number;
  /** Animation style */
  variant?: "fadeUp" | "fadeIn" | "fadeUpScale";
  /** Custom class when in view */
  className?: string;
  /** Custom class when not in view */
  inViewClass?: string;
  outOfViewClass?: string;
}

const variantClasses = {
  fadeUp: {
    out: "opacity-0 translate-y-8",
    in: "opacity-100 translate-y-0",
  },
  fadeIn: {
    out: "opacity-0",
    in: "opacity-100",
  },
  fadeUpScale: {
    out: "opacity-0 translate-y-6 scale-[0.98]",
    in: "opacity-100 translate-y-0 scale-100",
  },
};

export function AnimateOnScroll({
  children,
  delay = 0,
  variant = "fadeUp",
  className = "",
  inViewClass,
  outOfViewClass,
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView({ once: true });
  const v = variantClasses[variant];
  const out = outOfViewClass ?? v.out;
  const inClass = inViewClass ?? v.in;

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isInView ? inClass : out}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
