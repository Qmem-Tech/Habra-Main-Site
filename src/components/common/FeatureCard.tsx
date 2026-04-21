import { type ReactNode } from "react";

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-[var(--radius-2xl)] p-1 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)] text-white transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-heading-3 text-[var(--color-text)] transition-colors duration-200 group-hover:text-[var(--color-primary)]">
        {title}
      </h3>
      <p className="text-body text-[var(--color-text-muted)]">{description}</p>
    </div>
  );
}
