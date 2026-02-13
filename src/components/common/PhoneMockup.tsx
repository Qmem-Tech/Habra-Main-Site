import { type ImgHTMLAttributes } from "react";

export interface PhoneMockupProps {
  src?: string;
  alt?: string;
  imgProps?: Partial<ImgHTMLAttributes<HTMLImageElement>>;
  className?: string;
  /** Optional: tilt angle for visual interest (e.g. "rotate-[-6deg]") */
  tilted?: boolean;
}

export function PhoneMockup({
  src,
  alt = "Habesha app screenshot",
  imgProps = {},
  className = "",
  tilted = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`
        relative mx-auto flex justify-center
        ${tilted ? "rotate-[-6deg]" : ""}
        ${className}
      `}
    >
      {/* Phone frame */}
      <div className="relative h-[520px] w-[260px] rounded-[2.5rem] border-[12px] border-gray-900 bg-gray-900 shadow-2xl sm:h-[600px] sm:w-[300px] md:h-[640px] md:w-[320px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
        {/* Screen content */}
        <div className="absolute inset-x-3 bottom-3 top-8 overflow-hidden rounded-2xl bg-gray-100">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover object-top"
              {...imgProps}
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
