import { useEffect, useRef, useState } from "react";

const MIN_DISPLAY_MS = 1200;
const FADE_OUT_MS = 400;
const MAX_WAIT_MS = 4000;

export function GlobalLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const loadFired = useRef(false);
  const minTimeMet = useRef(false);
  const maxWaitMet = useRef(false);

  useEffect(() => {
    const tryHide = () => {
      const ready =
        (loadFired.current && minTimeMet.current) || maxWaitMet.current;
      if (!ready) return;
      setIsVisible(false);
      setTimeout(() => setIsMounted(false), FADE_OUT_MS);
    };

    const onLoad = () => {
      loadFired.current = true;
      tryHide();
    };

    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    const minTimer = setTimeout(() => {
      minTimeMet.current = true;
      tryHide();
    }, MIN_DISPLAY_MS);

    const maxTimer = setTimeout(() => {
      maxWaitMet.current = true;
      tryHide();
    }, MAX_WAIT_MS);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`global-loader${!isVisible ? " global-loader--exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="global-loader__backdrop" />
      <div className="global-loader__content">
        <div className="global-loader__logo-wrap">
          <img
            src="/habra_logo.png"
            alt=""
            className="global-loader__logo"
            width={64}
            height={64}
            fetchPriority="high"
          />
        </div>
        <div className="global-loader__dots" aria-hidden="true">
          <span className="global-loader__dot" />
          <span className="global-loader__dot" />
          <span className="global-loader__dot" />
        </div>
      </div>
    </div>
  );
}
