import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions {
  /** Margin around root (e.g. "0px 0px -80px 0px" to trigger when 80px from bottom) */
  rootMargin?: string;
  /** Threshold 0–1; element visibility to trigger */
  threshold?: number;
  /** If true, animation runs once and stays visible */
  once?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const { rootMargin = "0px 0px -60px 0px", threshold = 0.1, once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, isInView };
}
