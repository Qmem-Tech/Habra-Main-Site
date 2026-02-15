# Habra Landing Page — Design System

**Purpose:** This document describes the design system used on the **promotional Landing page** (Habra Main Site). Use it as a single reference when building or updating the **Business Admin landing page** so both experiences share the same look, feel, and behavior.

---

## 1. Design Tokens

### 1.1 Colors

| Token | Hex | Usage |
|-------|-----|--------|
| **Primary** | `#1a4d3e` | Brand green — headings, logo, primary CTAs, icon backgrounds, focus rings |
| **Primary dark** | `#0f3329` | Hover state for primary/secondary buttons |
| **Accent** | `#c9a961` | Gold — primary buttons, newsletter button, focus borders |
| **Accent light** | `#e5d4a1` | Lighter gold (optional highlights) |
| **Surface alt** | `#f5f5f4` | Alternate section backgrounds (off-white) |
| **Text muted** | `#6b7280` | Gray-500 — secondary text |

**Neutrals (Tailwind):**

- **Backgrounds:** `bg-white`, `bg-gray-50`, `bg-gray-100`, `bg-gray-800`, `bg-gray-900`
- **Text:** `text-gray-900` (headings), `text-gray-700` / `text-gray-600` (body), `text-gray-500` (muted), `text-gray-400` (footer links)
- **Borders:** `border-gray-200`, `border-gray-600`, `border-gray-800`

**Dark sections (e.g. CTA, footer):**

- Background: `#1a4d3e` or `bg-gray-900`
- Text: `text-white`, `text-white/90`, `text-gray-300`, `text-gray-400`

### 1.2 Typography

- **Font:** System stack (antialiased) — no custom font in `index.html`; body uses `text-gray-800`.
- **Headings:**
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900`; highlight with `text-[#1a4d3e]`.
  - H2: `text-3xl md:text-4xl font-bold text-gray-900`.
  - H3: `text-lg font-semibold text-gray-900`.
- **Body:** `text-lg text-gray-600` for lead; `text-gray-600` or `text-gray-700` for paragraphs.
- **Logo:** `text-xl font-bold uppercase tracking-wide` with `text-[#1a4d3e]` (header) or `text-white` (footer).
- **Small / captions:** `text-sm text-gray-500` or `text-gray-400`.

### 1.3 Spacing & layout

- **Section padding:** `py-16 md:py-24` (sometimes `lg:py-32` for hero).
- **Content width:** `max-w-7xl` (lg), `max-w-5xl` (md), `max-w-3xl` (sm), `max-w-4xl` for narrow CTA.
- **Horizontal padding:** `px-4 sm:px-6 lg:px-8` inside containers.
- **Gaps:** `gap-4`, `gap-8`, `gap-12`, `gap-16`; grid `gap-8` for feature grids.

### 1.4 Radii & shadows

- **Cards / buttons:** `rounded-lg`, `rounded-xl`, `rounded-2xl`.
- **Pills / icons:** `rounded-full`.
- **Shadows:** `shadow-sm` (header hover), `shadow-lg` (cards hover), `shadow-2xl` (phone mockup).

### 1.5 Motion

- **Transitions:** `transition-all duration-200` or `duration-300`; `ease-out`.
- **Hover scale:** Buttons `hover:scale-[1.02] active:scale-[0.98]`; icons `hover:scale-110`.
- **Respect reduced motion:** Use `@media (prefers-reduced-motion: reduce)` to disable or shorten animations.

---

## 2. Global styles (Tailwind v4)

Use the same base and utilities in your Business admin landing CSS:

```css
@import "tailwindcss";

@theme {
  --color-primary: #1a4d3e;
  --color-primary-dark: #0f3329;
  --color-accent: #c9a961;
  --color-accent-light: #e5d4a1;
  --color-surface-alt: #f5f5f4;
  --color-text-muted: #6b7280;
}

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply antialiased text-gray-800 bg-white; }
}

/* Animations */
@layer utilities {
  @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slide-down {
    from { opacity: 0; transform: translateY(-12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
  .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
  .animate-slide-down { animation: slide-down 0.35s ease-out forwards; }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in, .animate-fade-in-up, .animate-slide-down { animation: none; }
  [class*="transition-"] { transition-duration: 0.01ms !important; }
}
```

---

## 3. Layout components

### 3.1 Container

- **Role:** Max-width + horizontal padding; center content.
- **Sizes:** `sm` → `max-w-3xl`, `md` → `max-w-5xl`, `lg` → `max-w-7xl`, `full` → `max-w-full`.
- **Classes:** `mx-auto w-full px-4 sm:px-6 lg:px-8` + size class.

### 3.2 Section

- **Role:** Full-width section with consistent vertical padding and optional background.
- **Variants:**
  - `default`: `bg-white`
  - `alt`: `bg-[#f5f5f4]`
  - `dark`: `bg-[#1a4d3e] text-white`
- **Padding:** `py-16 md:py-24`.
- **Usage:** Wrap content in `<Section id="…" variant="…"><Container>…</Container></Section>` or use the same class names directly.

---

## 4. UI components

### 4.1 Button

- **Variants:**
  - **Primary:** `bg-[#c9a961] text-[#1a4d3e] hover:bg-[#b89850]` — main CTAs.
  - **Secondary:** `bg-[#1a4d3e] text-white hover:bg-[#0f3329]`.
  - **Outline:** `border-2 border-[#1a4d3e] text-[#1a4d3e] hover:bg-[#1a4d3e] hover:text-white`.
  - **Ghost:** `text-gray-600 hover:bg-gray-100`.
- **Sizes:** `sm` → `px-4 py-2 text-sm rounded-lg`; `md` → `px-6 py-3 text-base rounded-xl`; `lg` → `px-8 py-4 text-lg rounded-xl`.
- **Common:** `inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#1a4d3e] focus:ring-offset-2 disabled:opacity-50`.

### 4.2 Feature card (tile)

- **Container:** `rounded-2xl`, hover `-translate-y-1 hover:shadow-lg`, `transition-all duration-300 ease-out`.
- **Icon box:** `h-14 w-14 rounded-xl bg-[#1a4d3e] text-white`, icon size 24; hover `group-hover:scale-110`.
- **Title:** `text-lg font-semibold text-gray-900`, hover `group-hover:text-[#1a4d3e]`.
- **Description:** `text-gray-600 leading-relaxed`.

### 4.3 App download buttons (optional for Business admin)

- **Dark variant:** `bg-gray-900 text-white hover:bg-gray-800`; **Light variant:** `bg-white text-gray-900 hover:bg-gray-50`.
- **Shape:** `inline-flex items-center gap-3 px-5 py-3 rounded-xl font-medium`; same hover/active scale as Button.

### 4.4 Form inputs (e.g. newsletter)

- **Input:** `rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]`.
- **Submit on dark:** `rounded-lg bg-[#c9a961] px-6 py-3 font-semibold text-[#1a4d3e] hover:scale-[1.02] hover:bg-[#b89850] active:scale-[0.98]`.

---

## 5. Page structure patterns

### 5.1 Header (sticky)

- **Bar:** `sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-sm`, hover `hover:shadow-sm`.
- **Nav height:** `h-16 md:h-20`.
- **Logo:** Image `h-8 w-8 rounded-lg` + text `text-xl font-bold uppercase tracking-wide text-[#1a4d3e]`.
- **Links:** `text-gray-600 hover:text-[#1a4d3e]`; primary CTA = Button `variant="primary" size="sm"`.
- **Mobile menu:** Slide-down panel `animate-slide-down border-b border-gray-200 bg-white`; same link/button styles.

### 5.2 Hero

- **Section:** `bg-white py-16 md:py-24 lg:py-32`.
- **Layout:** Two-column on lg: `flex flex-col lg:flex-row`; content + asset (e.g. phone mockup or illustration).
- **H1:** One line in `text-[#1a4d3e]` for emphasis.
- **Lead + CTA:** `mt-6` / `mt-10`; buttons in `flex flex-wrap justify-center gap-4 lg:justify-start`.
- **Scroll cue (optional):** `animate-bounce` chevron, `text-gray-400 hover:text-[#1a4d3e]`.

### 5.3 Two-column content sections (e.g. “See what’s happening”, “Support local”)

- **Background:** `bg-[#f5f5f4]`, `py-16 md:py-24`.
- **Layout:** `max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8`; swap column order with `order-1` / `order-2` if needed.
- **Headings:** H2 `text-3xl md:text-4xl font-bold text-gray-900`; paragraph `mt-6 text-lg text-gray-600`.
- **Bullet list:** Icon in `h-8 w-8 rounded-full bg-[#1a4d3e] text-white`, icon 16px; text `text-gray-700`; `space-y-4`.

### 5.4 Feature grid

- **Section:** Use `<Section id="features">` (or equivalent).
- **Heading block:** Centered; H2 + `mt-4 max-w-2xl mx-auto text-lg text-gray-600`.
- **Grid:** `grid gap-8 sm:grid-cols-2 lg:grid-cols-3`; each item = Feature card style.

### 5.5 Testimonials

- **Section:** Default (white) Section.
- **Quote:** `text-2xl md:text-3xl italic text-gray-700`.
- **Avatar fallback:** `h-14 w-14 rounded-full bg-[#1a4d3e]/20` with initial letter `text-xl font-semibold text-[#1a4d3e]`.
- **Pagination dots:** Active `w-6 h-2 rounded-full bg-[#1a4d3e]`; inactive `h-2 w-2 rounded-full bg-gray-300 hover:bg-gray-400 hover:scale-110`.

### 5.6 CTA block

- **Section:** `bg-[#1a4d3e] py-16 md:py-24`; content `max-w-4xl mx-auto text-center`.
- **Heading:** `text-3xl md:text-4xl font-bold text-white`.
- **Subtext:** `text-lg text-white/90`.
- **Buttons:** Centered `flex flex-wrap justify-center gap-4` (e.g. App download or primary Button).

### 5.7 Footer

- **Bar:** `bg-gray-900 text-gray-300`.
- **Layout:** Grid `grid gap-12 py-12 lg:grid-cols-12 lg:gap-8` (e.g. logo+social, 3–4 link columns, newsletter).
- **Logo:** Same as header but `text-white`.
- **Column titles:** `font-semibold text-white`.
- **Links:** `text-gray-400 hover:text-white`.
- **Newsletter input:** Dark input + accent button (see Form inputs above).
- **Bottom bar:** `border-t border-gray-800 py-4 text-center text-sm text-gray-500`.

---

## 6. Animation on scroll

- **Concept:** Elements start slightly off (opacity 0, translateY, optional scale) and transition into place when in view.
- **Variants:**
  - **fadeUp:** `opacity-0 translate-y-8` → `opacity-100 translate-y-0`
  - **fadeIn:** `opacity-0` → `opacity-100`
  - **fadeUpScale:** `opacity-0 translate-y-6 scale-[0.98]` → `opacity-100 translate-y-0 scale-100`
- **Transition:** `duration-700 ease-out`; optional stagger via `transitionDelay` (e.g. 0, 80, 160 ms).
- **Trigger:** IntersectionObserver, `rootMargin: "0px 0px -60px 0px"`, `threshold: 0.1`, `once: true`.

Use the same utility classes and/or an `AnimateOnScroll`-style component on the Business admin landing for consistency.

---

## 7. Assets & tech

- **Icons:** Lucide React (e.g. `MapPin`, `Building2`, `Menu`, `X`, `ChevronDown`, `Apple`, `Play`).
- **Logo:** `/habra_logo.png` (or equivalent path); header/footer use same asset.
- **Stack:** React, Vite, Tailwind CSS v4 (`@tailwindcss/vite`), TypeScript.

---

## 8. Checklist for Business Admin landing

When applying this design system to the Business admin landing page:

1. **Copy design tokens** — Use the same `@theme` and color hex values in your CSS.
2. **Reuse or mirror layout** — `Container` + `Section` with same max-widths and padding.
3. **Use the same Button variants** — Primary = accent gold; secondary = primary green.
4. **Match typography** — H1/H2/H3 and body classes above.
5. **Reuse header/footer pattern** — Sticky header with logo + nav + CTA; dark footer with columns and newsletter.
6. **Use same section rhythm** — `py-16 md:py-24`, alternating white / `#f5f5f4` or one dark CTA.
7. **Apply same motion** — 200–300 ms transitions, hover scale, and reduced-motion media query.
8. **Keep focus and a11y** — `focus:ring-2 focus:ring-[#1a4d3e] focus:ring-offset-2` on buttons/links; `aria-label` where needed.

You can copy this entire document into your Business admin landing repo or Notion and use it as the single source of truth for the Habra landing design system.
