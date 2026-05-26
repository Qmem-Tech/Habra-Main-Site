import { Link } from "react-router-dom";
import { AppDownloadButtons } from "../common/AppDownloadButtons";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { cn } from "../../lib/utils";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimateOnScroll variant="fadeUp">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to join your community?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Download Habra to discover local businesses, events, and jobs—or get in touch if you
            have questions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <AppDownloadButtons variant="light" />
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className={cn(
                "inline-flex items-center justify-center rounded-[var(--radius-lg)] px-8 py-4 text-lg font-semibold",
                "border-2 border-white/40 bg-white/10 text-white transition-all duration-200",
                "hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]",
                "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-primary)]"
              )}
            >
              Contact us
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
