import { siteConfig } from "../../config/site";

export interface AppDownloadButtonsProps {
  variant?: "dark" | "light";
  className?: string;
}

const BADGES = {
  dark: {
    appStore: "/badges/app-store-badge.svg",
    googlePlay: "/badges/google-play-badge.svg",
  },
  light: {
    appStore: "/badges/app-store-badge-light.svg",
    googlePlay: "/badges/google-play-badge-light.svg",
  },
} as const;

export function AppDownloadButtons({
  variant = "dark",
  className = "",
}: AppDownloadButtonsProps) {
  const badges = BADGES[variant];

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <a
        href={siteConfig.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-90 active:opacity-95"
        aria-label="Download on the App Store"
      >
        <img
          src={badges.appStore}
          alt="Download on the App Store"
          className="h-10 w-auto md:h-11"
          width={120}
          height={40}
        />
      </a>
      <a
        href={siteConfig.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-90 active:opacity-95"
        aria-label="Get it on Google Play"
      >
        <img
          src={badges.googlePlay}
          alt="Get it on Google Play"
          className="h-10 w-auto md:h-11"
          width={135}
          height={40}
        />
      </a>
    </div>
  );
}
