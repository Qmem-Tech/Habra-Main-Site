import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { SeeWhatHappening } from "../components/sections/SeeWhatHappening";
import { SupportLocalBusinesses } from "../components/sections/SupportLocalBusinesses";
import { Testimonials } from "../components/sections/Testimonials";
import { CTA } from "../components/sections/CTA";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Hero />
      <Features />
      <SeeWhatHappening />
      <SupportLocalBusinesses />
      <Testimonials />
      <CTA />
    </>
  );
}
