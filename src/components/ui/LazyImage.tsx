import { type ImgHTMLAttributes, useState } from "react";

export interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Optional placeholder shown while loading (e.g. blur or skeleton) */
  placeholder?: React.ReactNode;
}

/**
 * Image that lazy-loads by default for performance.
 * Use for below-the-fold images (testimonials, galleries, etc.).
 */
export function LazyImage({
  src,
  alt,
  className = "",
  placeholder,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className="relative block overflow-hidden">
      {!loaded && placeholder}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${className} ${!loaded && placeholder ? "opacity-0 absolute inset-0" : ""}`}
        {...props}
      />
    </span>
  );
}
