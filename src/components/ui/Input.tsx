import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-[var(--radius-md)] border bg-transparent px-4 py-3 text-base",
          "transition-colors duration-200",
          "placeholder:text-[var(--color-text-subtle)]",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
            : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
