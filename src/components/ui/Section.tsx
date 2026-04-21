import { type HTMLAttributes } from "react";
import { Container } from "./Container";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "alt" | "dark";
  containerSize?: "sm" | "md" | "lg" | "full";
}

const variantStyles = {
  default: "bg-[var(--color-background)]",
  alt: "bg-[var(--color-surface-alt)]",
  dark: "bg-[var(--color-primary)] text-white",
};

export function Section({
  children,
  className = "",
  variant = "default",
  containerSize = "lg",
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 md:py-24 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
