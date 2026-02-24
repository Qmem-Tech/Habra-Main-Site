/**
 * Site-wide config: app store links, social, footer, brand assets.
 * Replace placeholder values with real URLs when ready.
 */

export const siteConfig = {
  /** Brand: logo and icons (paths from public) */
  brand: {
    logo: "/habra_logo.png",
    favicon: "/favicon.svg",
    appleTouchIcon: "/apple_svg.svg",
  },
  /** App name for headings and meta */
  appName: "Habra",

  /** App Store download URL (iOS) */
  appStoreUrl: "https://apps.apple.com/app/habra/id000000000" as string,
  /** Google Play download URL (Android) */
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.habra.app" as string,

  social: {
    instagram: "https://instagram.com/habra",
    twitter: "https://twitter.com/habra",
    facebook: "https://facebook.com/habra",
  },

  footer: {
    company: [
      { href: "#about", label: "About Us" },
      { href: "#features", label: "Features" },
      { href: "#", label: "Pricing" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
    contact: [
      { href: "#contact", label: "Contact Us" },
      { href: "#", label: "Support" },
    ],
  },
} as const;
