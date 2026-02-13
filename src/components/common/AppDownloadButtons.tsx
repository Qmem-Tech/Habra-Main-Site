import { Apple, Play } from "lucide-react";
import { siteConfig } from "../../config/site";

export interface AppDownloadButtonsProps {
  variant?: "dark" | "light";
  className?: string;
}

export function AppDownloadButtons({
  variant = "dark",
  className = "",
}: AppDownloadButtonsProps) {
  const isDark = variant === "dark";
  const buttonStyles = isDark
    ? "bg-gray-900 text-white hover:bg-gray-800"
    : "bg-white text-gray-900 hover:bg-gray-50";

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <a
        href={siteConfig.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex items-center gap-3 px-5 py-3 rounded-xl font-medium
          transition-colors duration-200
          ${buttonStyles}
        `}
      >
        <Apple size={24} strokeWidth={2} />
        <span>Download on the App Store</span>
      </a>
      <a
        href={siteConfig.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex items-center gap-3 px-5 py-3 rounded-xl font-medium
          transition-colors duration-200
          ${buttonStyles}
        `}
      >
        <Play size={24} strokeWidth={2} />
        <span>GET IT ON Google Play</span>
      </a>
    </div>
  );
}
