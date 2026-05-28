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

  /** Public marketing site URL (privacy policy, Play Console, etc.) */
  siteUrl: "https://habra.app" as string,

  /** Legal entity name and optional address (privacy policy) */
  company: {
    legalName: "Habra",
    /** Optional; leave empty string if not published yet */
    addressLine: "" as string,
  },

  /** Privacy policy dates and contact (update before publishing) */
  privacy: {
    effectiveDate: "May 20, 2026",
    lastUpdated: "May 20, 2026",
    /** Region used in “international transfers” section */
    primaryRegion: "United States",
  },

  /** Terms of Service dates */
  terms: {
    effectiveDate: "May 20, 2026",
    lastUpdated: "May 20, 2026",
    governingLawRegion: "State of Delaware, United States",
  },

  /** Public contact details */
  contact: {
    supportEmail: "support@habra.app",
    responseTime: "We typically respond within 2 business days.",
  },

  /** App Store download URL (iOS) */
  appStoreUrl: "https://apps.apple.com/app/habra/id000000000" as string,
  /** Google Play download URL (Android) */
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.habra.habra" as string,

  social: {
    instagram: "https://instagram.com/habra",
    twitter: "https://twitter.com/habra",
    facebook: "https://facebook.com/habra",
  },

  footer: {
    company: [
      { href: "/#about", label: "About Us" },
      { href: "/#features", label: "Features" },
      { href: "#", label: "Pricing" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
    contact: [
      { href: "/contact", label: "Contact Us" },
      { href: "mailto:support@habra.app", label: "Support" },
    ],
  },
} as const;
