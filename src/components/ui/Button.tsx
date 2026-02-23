import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent-hover)]",
  secondary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
  outline:
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  ghost: "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-[var(--radius-md)]",
  md: "px-6 py-3 text-base rounded-[var(--radius-lg)]",
  lg: "px-8 py-4 text-lg rounded-[var(--radius-lg)]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out",
          "hover:scale-[1.02] active:scale-[0.98]",
          "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
