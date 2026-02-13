import { type ImgHTMLAttributes } from "react";

export interface PhoneMockupProps {
  src?: string;
  alt?: string;
  imgProps?: Partial<ImgHTMLAttributes<HTMLImageElement>>;
  className?: string;
  /** Optional: tilt angle for visual interest (ignored when imageOnly) */
  tilted?: boolean;
  /**
   * Set true for above-the-fold mockup (e.g. Hero) to load immediately.
   * Default false = lazy load for performance.
   */
  priority?: boolean;
  /**
   * When true: no phone frame, no rotation. Use for pre-angled images with transparent background.
   */
  imageOnly?: boolean;
}

export function PhoneMockup({
  src,
  alt = "Habesha app screenshot",
  imgProps = {},
  className = "",
  tilted = false,
  priority = false,
  imageOnly = false,
}: PhoneMockupProps) {
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : undefined;

  if (imageOnly && src) {
    return (
      <div className={`relative mx-auto flex justify-center ${className}`}>
        <img
          {...imgProps}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
          className={`max-h-[520px] w-auto max-w-[280px] object-contain sm:max-h-[600px] sm:max-w-[320px] md:max-h-[640px] md:max-w-[360px] ${imgProps.className || ""}`.trim()}
        />
      </div>
    );
  }

  return (
    <div
      className={`
        relative mx-auto flex justify-center
        ${!imageOnly && tilted ? "rotate-[-6deg]" : ""}
        ${className}
      `}
    >
      <div className="relative h-[520px] w-[260px] rounded-[2.5rem] border-[12px] border-gray-900 bg-gray-900 shadow-2xl sm:h-[600px] sm:w-[300px] md:h-[640px] md:w-[320px]">
        <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
        <div className="absolute inset-x-3 bottom-3 top-8 overflow-hidden rounded-2xl bg-gray-100">
          {src ? (
            <img
              {...imgProps}
              src={src}
              alt={alt}
              loading={loading}
              decoding="async"
              fetchPriority={fetchPriority}
              className={`h-full w-full object-cover object-top ${imgProps.className || ""}`.trim()}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#1a4d3e]/20 to-[#c9a961]/20">
              <span className="text-sm text-gray-400">App screenshot</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
