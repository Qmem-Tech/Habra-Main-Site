import { AppDownloadButtons } from "../common/AppDownloadButtons";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

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
            Ready to Join Your Community?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Download Habra, connect with those near you, and explore all the
            great things our community has to offer.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <AppDownloadButtons variant="light" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
