# Habra Main Site — QA Testing Checklist

**Project:** Habra (Habesha Community) — Marketing/Landing Site  
**Document version:** 1.0  
**Last updated:** February 2026  

This checklist is for QA to verify every functionality, UX, UI, error handling, accessibility, and cross-environment behavior before release.

---

## Table of Contents

1. [Pre-Test Setup](#1-pre-test-setup)
2. [Global & Page Load](#2-global--page-load)
3. [Header & Navigation](#3-header--navigation)
4. [Hero Section](#4-hero-section)
5. [Features Section](#5-features-section)
6. [See What's Happening Section](#6-see-whats-happening-section)
7. [Support Local Businesses Section](#7-support-local-businesses-section)
8. [Testimonials Section](#8-testimonials-section)
9. [CTA Section](#9-cta-section)
10. [Footer](#10-footer)
11. [Links & External URLs](#11-links--external-urls)
12. [Forms & Inputs](#12-forms--inputs)
13. [UI Components (Buttons, Images, Animations)](#13-ui-components-buttons-images-animations)
14. [Responsive Design & Breakpoints](#14-responsive-design--breakpoints)
15. [Accessibility (a11y)](#15-accessibility-a11y)
16. [Error Handling & Edge Cases](#16-error-handling--edge-cases)
17. [Performance & Loading](#17-performance--loading)
18. [Browser & Device Compatibility](#18-browser--device-compatibility)
19. [Content & Copy](#19-content--copy)
20. [SEO & Meta](#20-seo--meta)

---

## 1. Pre-Test Setup

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 1.1 | Build succeeds: `npm run build` | ☐ | |
| 1.2 | No console errors on fresh load (dev: `npm run dev`) | ☐ | |
| 1.3 | Test on clean cache (or incognito) | ☐ | |
| 1.4 | Note browser, OS, and viewport for each test session | ☐ | |

---

## 2. Global & Page Load

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 2.1 | Initial page load shows **global loader** (logo + bouncing dots) | ☐ | |
| 2.2 | Loader displays for at least ~1.2s (min display time) | ☐ | |
| 2.3 | Loader fades out smoothly (~0.4s) and unmounts | ☐ | |
| 2.4 | Loader disappears even if load event is slow (max ~4s) | ☐ | |
| 2.5 | With **prefers-reduced-motion**, loader has no spin/bounce animation | ☐ | |
| 2.6 | Loader has `role="status"` and `aria-label="Loading"` | ☐ | |
| 2.7 | After load, no layout shift (CLS) from loader removal | ☐ | |
| 2.8 | Page title is correct: "Habesha Community - Your Community, One App Away" | ☐ | |
| 2.9 | Favicon and apple-touch-icon load (check tab and bookmarks) | ☐ | |
| 2.10 | Smooth scroll behavior when using anchor links | ☐ | |

---

## 3. Header & Navigation

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 3.1 | **Logo** visible and links to `#` (or home) | ☐ | |
| 3.2 | Logo has correct `alt` text (e.g. "Habra Logo") | ☐ | |
| 3.3 | Logo hover: slight scale/opacity change | ☐ | |
| 3.4 | **Desktop nav:** About, Features, Contact links visible | ☐ | |
| 3.5 | Each nav link scrolls to correct section (#about, #features, #contact) | ☐ | |
| 3.6 | Nav link hover: color change to primary | ☐ | |
| 3.7 | **"Join Community"** button visible and styled (primary variant) | ☐ | |
| 3.8 | Header is **sticky** (stays at top on scroll) | ☐ | |
| 3.9 | Header has border and subtle shadow on scroll/hover | ☐ | |
| 3.10 | **Mobile:** Hamburger icon visible, desktop nav hidden | ☐ | |
| 3.11 | Hamburger opens menu; icon toggles to X | ☐ | |
| 3.12 | Mobile menu shows same links + "Join Community" full width | ☐ | |
| 3.13 | Clicking a nav link in mobile menu **closes** the menu | ☐ | |
| 3.14 | Hamburger has `aria-label="Toggle menu"` and `aria-expanded` | ☐ | |
| 3.15 | Mobile menu has slide-down animation (and respects reduced motion) | ☐ | |

---

## 4. Hero Section

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 4.1 | Section has `id="about"` for anchor | ☐ | |
| 4.2 | Headline: "Your Habesha Community, **One App Away.**" (primary color on second part) | ☐ | |
| 4.3 | Subtext and value proposition readable | ☐ | |
| 4.4 | **App download buttons** (App Store + Google Play) visible | ☐ | |
| 4.5 | Buttons use **dark** variant badges | ☐ | |
| 4.6 | App Store link opens in new tab, correct URL (from config) | ☐ | |
| 4.7 | Google Play link opens in new tab, correct URL | ☐ | |
| 4.8 | **Phone mockup** image loads (hero screenshot) | ☐ | |
| 4.9 | Hero image has appropriate `alt` (e.g. "Habesha app feed") | ☐ | |
| 4.10 | **Scroll indicator** (chevron down) visible at bottom | ☐ | |
| 4.11 | Scroll indicator links to `#features` and scrolls correctly | ☐ | |
| 4.12 | Scroll indicator has `aria-label="Scroll to features"` | ☐ | |
| 4.13 | Animations (fadeUp / fadeUpScale) trigger on scroll into view | ☐ | |
| 4.14 | With reduced motion, content still visible (no reliance on motion) | ☐ | |

---

## 5. Features Section

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 5.1 | Section has `id="features"` for anchor | ☐ | |
| 5.2 | Heading: "Everything You Need" and subtext present | ☐ | |
| 5.3 | **Six feature cards** visible: Events & Contests, Business Directory, Job Board, Deals & Promo, Messaging, Community Groups | ☐ | |
| 5.4 | Each card has icon, title, and description | ☐ | |
| 5.5 | Card hover: lift (-translate-y), shadow, icon scale, title color change | ☐ | |
| 5.6 | Cards animate in on scroll (staggered delay) | ☐ | |
| 5.7 | Layout: 1 col mobile, 2 col sm, 3 col lg | ☐ | |

---

## 6. See What's Happening Section

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 6.1 | Heading: "See What's Happening" and body copy | ☐ | |
| 6.2 | Four bullet points with icons: Discover local events, Follow creators, Real-time updates, Share experiences | ☐ | |
| 6.3 | Bullet icons have primary background; hover scale on first list | ☐ | |
| 6.4 | **Phone mockup** (events screenshot) loads with correct alt | ☐ | |
| 6.5 | Section background uses `var(--color-surface-alt)` | ☐ | |
| 6.6 | On large screens: image left, text right (or per design) | ☐ | |
| 6.7 | Scroll animations trigger for heading, list, image | ☐ | |

---

## 7. Support Local Businesses Section

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 7.1 | Heading: "Support Local Businesses" and body copy | ☐ | |
| 7.2 | Four bullets: Find businesses, Exclusive deals, Easy booking, Read/write reviews | ☐ | |
| 7.3 | Phone mockup (business directory screenshot) loads | ☐ | |
| 7.4 | Layout and animations consistent with "See What's Happening" | ☐ | |
| 7.5 | Section background matches (surface-alt) | ☐ | |

---

## 8. Testimonials Section

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 8.1 | Heading: "What Our Community Says" | ☐ | |
| 8.2 | One testimonial quote and author "Karen K.", role "Habesha User" | ☐ | |
| 8.3 | **Avatar:** When no image, first letter of author shown in circle (e.g. "K") | ☐ | |
| 8.4 | **Pagination dots** visible below testimonial | ☐ | |
| 8.5 | Active dot: wider (w-6), primary color; inactive: small circle, border color | ☐ | |
| 8.6 | Clicking dot switches testimonial (when multiple); content updates | ☐ | |
| 8.7 | Dots have `aria-label="Go to testimonial N"` | ☐ | |
| 8.8 | Quote text has smooth transition when changing (opacity/duration) | ☐ | |
| 8.9 | If avatar URL provided, **LazyImage** loads and shows image | ☐ | |

---

## 9. CTA Section

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 9.1 | Section has `id="contact"` for anchor | ☐ | |
| 9.2 | Background uses primary color (green) | ☐ | |
| 9.3 | Heading: "Ready to Join Your Community?" and supporting text | ☐ | |
| 9.4 | **App download buttons** use **light** variant badges | ☐ | |
| 9.5 | Buttons open same App Store / Google Play URLs in new tab | ☐ | |
| 9.6 | Text is readable (white/contrast) on primary background | ☐ | |
| 9.7 | Scroll-in animation plays for CTA block | ☐ | |

---

## 10. Footer

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 10.1 | Logo and brand name at top; © 2026 Habesha. All Rights Reserved | ☐ | |
| 10.2 | **Social links:** Instagram, Twitter, Facebook — open in new tab, `rel="noopener noreferrer"` | ☐ | |
| 10.3 | Social icons have `aria-label` (e.g. "Instagram") | ☐ | |
| 10.4 | **Company:** About Us, Features, Pricing — each link works | ☐ | |
| 10.5 | **Legal:** Privacy Policy (/privacy), Terms of Service (/terms) | ☐ | |
| 10.6 | **Get in Touch:** Contact Us, Support | ☐ | |
| 10.7 | **Newsletter:** "Join Our Newsletter" heading | ☐ | |
| 10.8 | Email **input** visible, placeholder "Your Email" | ☐ | |
| 10.9 | **Subscribe** button visible and submit does not cause full page reload (form prevents default) | ☐ | |
| 10.10 | Footer bottom line: "English (US) \| USD" | ☐ | |
| 10.11 | Footer uses dark theme (dark bg, dark text, dark border) | ☐ | |
| 10.12 | Input focus: border/ring uses accent color | ☐ | |

---

## 11. Links & External URLs

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 11.1 | All external links open in new tab where appropriate | ☐ | |
| 11.2 | External links have `rel="noopener noreferrer"` | ☐ | |
| 11.3 | App Store URL matches `siteConfig.appStoreUrl` | ☐ | |
| 11.4 | Play Store URL matches `siteConfig.playStoreUrl` | ☐ | |
| 11.5 | Social URLs match config (Instagram, Twitter, Facebook) | ☐ | |
| 11.6 | No broken internal anchors (#about, #features, #contact) | ☐ | |
| 11.7 | Placeholder links (#, /privacy, /terms) documented or replaced for production | ☐ | |

---

## 12. Forms & Inputs

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 12.1 | **Newsletter email input:** type="email", placeholder, accessible label (visible or sr-only) | ☐ | |
| 12.2 | Input **default state:** border, focus ring (primary/accent) | ☐ | |
| 12.3 | Input **error state:** when `error` prop used, red border and focus ring | ☐ | |
| 12.4 | Submit button disabled state: opacity 50%, no scale on hover/active | ☐ | |
| 12.5 | Form submit: no full page reload (current implementation) | ☐ | |
| 12.6 | Empty submit / invalid email: no crash; document expected behavior (e.g. validation message) | ☐ | |

---

## 13. UI Components (Buttons, Images, Animations)

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 13.1 | **Button variants:** primary, secondary, outline, ghost — each renders and has distinct style | ☐ | |
| 13.2 | **Button sizes:** sm, md, lg — padding and text size differ | ☐ | |
| 13.3 | Button hover: scale(1.02); active: scale(0.98) | ☐ | |
| 13.4 | Button focus: ring 2px primary, ring-offset 2 | ☐ | |
| 13.5 | **LazyImage:** below-fold images use loading="lazy"; onLoad hides placeholder | ☐ | |
| 13.6 | **AnimateOnScroll:** variants fadeUp, fadeIn, fadeUpScale trigger when in view (once) | ☐ | |
| 13.7 | **Reduced motion:** CSS reduces/removes animation duration; content still visible | ☐ | |
| 13.8 | **EmptyState** (if used elsewhere): icon, title, description, action slot render | ☐ | |
| 13.9 | **LoadingSkeleton:** pulse animation, role="status", aria-label="Loading" | ☐ | |
| 13.10 | **PhoneMockup** without src: shows "App screenshot" placeholder in frame | ☐ | |

---

## 14. Responsive Design & Breakpoints

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 14.1 | **Mobile (e.g. 320px–480px):** All sections stack; no horizontal scroll | ☐ | |
| 14.2 | **Tablet (e.g. 768px):** Header nav visible (md:flex); mobile menu hidden | ☐ | |
| 14.3 | **Desktop (e.g. 1024px+):** Full layout; multi-column where designed | ☐ | |
| 14.4 | Container max-width and padding (px-4 sm:px-6 lg:px-8) applied | ☐ | |
| 14.5 | Typography: clamp/fluid for display heading; heading-1/2/3 scale | ☐ | |
| 14.6 | Touch targets at least ~44px where interactive | ☐ | |
| 14.7 | Phone mockup and images scale (max-width/max-height) without overflow | ☐ | |

---

## 15. Accessibility (a11y)

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 15.1 | **HTML:** `<html lang="en">` set | ☐ | |
| 15.2 | **Landmarks:** header, main, footer present | ☐ | |
| 15.3 | **Headings:** Single h1 (Hero); h2 per section; order (h1 → h2, no skips) | ☐ | |
| 15.4 | **Focus order:** Tab through page; order is logical | ☐ | |
| 15.5 | **Focus visible:** All interactive elements show visible focus (ring) | ☐ | |
| 15.6 | **Images:** All meaningful images have non-empty `alt` | ☐ | |
| 15.7 | **Decorative images:** alt="" or role="presentation" where appropriate | ☐ | |
| 15.8 | **Links/buttons:** Descriptive text or aria-label (e.g. "Download on the App Store") | ☐ | |
| 15.9 | **Color contrast:** Text on background meets WCAG AA (e.g. 4.5:1 for body) | ☐ | |
| 15.10 | **Reduced motion:** prefers-reduced-motion respected (loader, animations) | ☐ | |
| 15.11 | **Keyboard:** All actions (nav, menu, testimonial dots, subscribe) reachable and operable | ☐ | |

---

## 16. Error Handling & Edge Cases

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 16.1 | **Missing screenshot images:** Broken image does not break layout; alt or placeholder shown | ☐ | |
| 16.2 | **Invalid/missing config:** Document expected behavior if appStoreUrl/playStoreUrl missing | ☐ | |
| 16.3 | **Empty testimonials array:** If possible, ensure no runtime error; show empty or fallback | ☐ | |
| 16.4 | **Very long copy:** Text wraps; no overflow or overlap | ☐ | |
| 16.5 | **JS disabled:** Critical content still visible (progressive enhancement) | ☐ | |
| 16.6 | **Network slow/fail:** Loader hides after max wait; images show broken/placeholder as appropriate | ☐ | |

---

## 17. Performance & Loading

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 17.1 | **Lazy loading:** Below-fold images (e.g. testimonials, sections) use loading="lazy" | ☐ | |
| 17.2 | **Hero image:** fetchPriority="high" or loading="eager" where used | ☐ | |
| 17.3 | **No unnecessary re-renders:** Menu open/close, testimonial switch feel instant | ☐ | |
| 17.4 | **Build output:** No obvious duplicate or oversized assets | ☐ | |

---

## 18. Browser & Device Compatibility

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 18.1 | **Chrome/Edge (latest)** | ☐ | |
| 18.2 | **Firefox (latest)** | ☐ | |
| 18.3 | **Safari (latest, macOS/iOS)** | ☐ | |
| 18.4 | **Mobile Safari (iOS)** | ☐ | |
| 18.5 | **Chrome Android** | ☐ | |
| 18.6 | **Viewport meta:** width=device-width, initial-scale=1.0 | ☐ | |

---

## 19. Content & Copy

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 19.1 | Brand name consistent (Habra / Habesha per design) | ☐ | |
| 19.2 | No lorem ipsum or placeholder copy in production | ☐ | |
| 19.3 | Legal links (Privacy, Terms) point to correct pages or placeholders noted | ☐ | |
| 19.4 | Date in footer (© 2026) correct | ☐ | |

---

## 20. SEO & Meta

| # | Check | Pass / Fail | Notes |
|---|--------|-------------|--------|
| 20.1 | Title tag present and descriptive | ☐ | |
| 20.2 | Meta charset UTF-8 | ☐ | |
| 20.3 | Favicon and apple-touch-icon linked | ☐ | |
| 20.4 | (If applicable) Meta description and OG tags added and tested | ☐ | |

---

## Summary

- **Total checks:** ~150+  
- **Tester name:** _____________________  
- **Date:** _____________________  
- **Build/commit tested:** _____________________  
- **Environment (e.g. staging URL):** _____________________  

**Sign-off:**  
- [ ] All critical checks passed  
- [ ] Known issues documented with bug IDs  
- [ ] Ready for release / Needs re-test  

---

*End of QA Testing Checklist*
