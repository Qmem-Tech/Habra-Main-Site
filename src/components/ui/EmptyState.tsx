import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-alt)] py-12 text-center",
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-surface)] text-[var(--color-text-muted)]">
          {icon}
        </div>
      )}
      <h3 className="text-heading-3 text-[var(--color-text)]">{title}</h3>
      {description && (
        <p className="mt-1 max-w-sm text-body text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
