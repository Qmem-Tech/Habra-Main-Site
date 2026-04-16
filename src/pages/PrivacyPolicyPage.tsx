import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../components/ui/Container";
import { siteConfig } from "../config/site";

const baseTitle = "Habesha Community - Your Community, One App Away";

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = `Privacy Policy | ${siteConfig.appName}`;
    return () => {
      document.title = baseTitle;
    };
  }, []);

  const { company, privacy, siteUrl } = siteConfig;

  return (
    <div
      className="py-12 md:py-16"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <Container size="md">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-body font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 rounded-[var(--radius-sm)]"
        >
          <ArrowLeft size={18} aria-hidden />
          Back to home
        </Link>

        <article className="prose-privacy max-w-none">
          <h1 className="text-heading-1 text-[var(--color-text)]">Privacy Policy</h1>

          <p className="mt-6 text-body-lg">
            <strong>Effective date:</strong> {privacy.effectiveDate}
            <br />
            <strong>Last updated:</strong> {privacy.lastUpdated}
          </p>

          <p className="mt-6 text-body text-[var(--color-text-muted)]">
            {company.legalName} (“<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”) operates
            the <strong>{siteConfig.appName}</strong> mobile application (“<strong>App</strong>”) and related
            services. This Privacy Policy explains how we collect, use, disclose, and protect information when you
            use the App and when you visit{" "}
            {siteUrl ? (
              <a
                href={siteUrl}
                className="font-medium text-[var(--color-primary)] underline underline-offset-2 hover:opacity-90"
              >
                our website
              </a>
            ) : (
              "our website"
            )}
            .
          </p>

          <p className="mt-4 text-body text-[var(--color-text-muted)]">
            By using the App, you agree to this Privacy Policy. If you do not agree, please do not use the App.
          </p>

          <aside
            className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6"
            aria-label="Summary"
          >
            <p className="text-body text-[var(--color-text)]">
              <strong>Summary:</strong> {siteConfig.appName} helps you discover businesses, events, and community
              features. We collect account and profile data, content you upload (including photos if you use the
              camera or gallery), optional location if you allow it, and data needed to run payments and
              notifications. We use service providers under contract, do not store full card numbers ourselves, and
              explain your choices and rights below. Questions? Email{" "}
              <a
                href={`mailto:${privacy.contactEmail}`}
                className="font-medium text-[var(--color-primary)] underline underline-offset-2"
              >
                {privacy.contactEmail}
              </a>
              .
            </p>
          </aside>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">1. Information we collect</h2>

            <h3 className="mt-8 text-heading-3 text-[var(--color-text)]">1.1 Account and profile information</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]">
              <li>
                Email address, name, and authentication identifiers when you register or sign in (including sign-in
                with third parties such as Google or Apple, where enabled).
              </li>
              <li>Profile details you choose to provide (for example, city or preferences).</li>
              <li>
                Business listing information if you use owner features (business name, description, contact
                details, photos, hours, and similar fields you submit).
              </li>
            </ul>

            <h3 className="mt-8 text-heading-3 text-[var(--color-text)]">1.2 Content you provide</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]">
              <li>
                Photos and images you upload (for example, profile pictures, business images, event images).{" "}
                <strong>Using the camera or photo library</strong> may involve access to your device camera or media
                as permitted by your operating system and the permissions you grant.
              </li>
            </ul>

            <h3 className="mt-8 text-heading-3 text-[var(--color-text)]">1.3 Location</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]">
              <li>
                Approximate or precise location <strong>if you enable location</strong> or use map or discovery
                features that rely on it, as described in the App and your device settings.
              </li>
            </ul>

            <h3 className="mt-8 text-heading-3 text-[var(--color-text)]">1.4 Usage and device information</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]">
              <li>
                App interactions, diagnostics, and device information typical for mobile apps (for example, device type,
                operating system, and app version), as needed to operate and improve the service.
              </li>
            </ul>

            <h3 className="mt-8 text-heading-3 text-[var(--color-text)]">1.5 Communications</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]">
              <li>
                Messages you send to us (for example, support requests) and, where applicable, in-app notifications.
              </li>
            </ul>

            <h3 className="mt-8 text-heading-3 text-[var(--color-text)]">1.6 Payments</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]">
              <li>
                Payments for certain features may be processed by third-party providers (for example, app stores,
                payment processors, or subscription platforms). We do <strong>not</strong> store full payment card
                numbers on our servers; payment partners process card data according to their terms and privacy
                policies.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">2. How we use information</h2>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">We use the information above to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]">
              <li>Create and manage your account and provide the App’s features.</li>
              <li>Show listings, events, jobs, and personalized or location-relevant content where applicable.</li>
              <li>Process transactions and subscriptions you initiate.</li>
              <li>
                Send service-related messages, security notices, and (where you opt in) marketing or push
                notifications.
              </li>
              <li>Improve, secure, and troubleshoot the App.</li>
              <li>Comply with law and enforce our terms.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">3. How we share information</h2>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">We may share information with:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]">
              <li>
                <strong>Service providers</strong> who help us host data, send notifications, analyze usage, or
                process payments, under contractual obligations to protect information.
              </li>
              <li>
                <strong>Payment and subscription platforms</strong> (for example, Google Play, Apple App Store,
                Stripe, or RevenueCat) as needed to complete purchases you authorize.
              </li>
              <li>
                <strong>Maps or location providers</strong> when you use map features, subject to their policies.
              </li>
              <li>
                <strong>Authorities</strong> when required by law or to protect rights and safety.
              </li>
            </ul>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">
              We do not sell your personal information for money as a traditional “sale” of data; if your region
              defines “sale” broadly (for example, certain U.S. state laws), contact us for applicable choices.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">4. Data retention</h2>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">
              We keep information only as long as needed for the purposes above, including legal, accounting, and
              security requirements. Retention periods may depend on the type of data and your account status.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">5. Security</h2>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">
              We use reasonable administrative, technical, and organizational measures to protect information. No
              method of transmission or storage is 100% secure.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">6. Your choices and rights</h2>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">
              Depending on where you live, you may have rights to access, correct, delete, or export certain
              information, or to object to or restrict certain processing. To exercise rights, contact us at{" "}
              <a
                href={`mailto:${privacy.contactEmail}`}
                className="font-medium text-[var(--color-primary)] underline underline-offset-2"
              >
                {privacy.contactEmail}
              </a>
              . We may verify your request as permitted by law.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]">
              <li>
                <strong>Device permissions:</strong> You can grant or revoke camera, location, notifications, and
                other permissions in your device settings. Revoking permission may limit some features.
              </li>
              <li>
                <strong>Marketing:</strong> Where required, we will obtain consent before marketing communications;
                you can opt out of marketing as described in those messages.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">7. Children</h2>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">
              The App is not directed at children under 13 (or the minimum age in your jurisdiction). We do not
              knowingly collect personal information from children. If you believe we have, contact us and we will
              take appropriate steps.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">8. International transfers</h2>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">
              If you use the App from outside {privacy.primaryRegion}, your information may be processed in countries
              where we or our providers operate, which may have different data protection laws.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">9. Third-party services and links</h2>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">
              The App may contain links to third-party sites or integrate third-party services (for example, sign-in,
              maps, payments). Their practices are governed by their own policies. We encourage you to read them.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">10. Changes to this policy</h2>
            <p className="mt-6 text-body text-[var(--color-text-muted)]">
              We may update this Privacy Policy from time to time. We will post the updated version with a new “Last
              updated” date and, where appropriate, notify you in the App or by email.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-heading-1 text-[var(--color-text)]">11. Contact us</h2>
            <p className="mt-6 text-body text-[var(--color-text)]">
              <strong>{company.legalName}</strong>
            </p>
            {company.addressLine ? (
              <p className="mt-2 text-body text-[var(--color-text-muted)]">{company.addressLine}</p>
            ) : null}
            <p className="mt-4 text-body text-[var(--color-text-muted)]">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${privacy.contactEmail}`}
                className="font-medium text-[var(--color-primary)] underline underline-offset-2"
              >
                {privacy.contactEmail}
              </a>
            </p>
            <p className="mt-2 text-body text-[var(--color-text-muted)]">
              <strong>Website:</strong>{" "}
              <a
                href={siteUrl}
                className="font-medium text-[var(--color-primary)] underline underline-offset-2"
              >
                {siteUrl}
              </a>
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
}
