/**
 * Simple classNames merger for conditional classes.
 * Use with design-system classes and component variants.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
