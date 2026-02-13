/**
 * Site-wide config: app store links, social, footer.
 * Replace placeholder values with real URLs when ready.
 */

export const siteConfig = {
  /** App Store download URL (iOS) */
  appStoreUrl: "https://apps.apple.com/app/habesha/id000000000" as string,
  /** Google Play download URL (Android) */
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.habesha.app" as string,

  social: {
    instagram: "https://instagram.com/habesha",
    twitter: "https://twitter.com/habesha",
    facebook: "https://facebook.com/habesha",
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
