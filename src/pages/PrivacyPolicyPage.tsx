import { Link } from "react-router-dom";
import { LegalDocumentLayout, useLegalPageTitle } from "../components/legal/LegalDocumentLayout";
import { siteConfig } from "../config/site";

const bodyClass = "mt-6 text-body text-[var(--color-text-muted)]";
const listClass = "mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]";
const h2Class = "mt-12 text-heading-1 text-[var(--color-text)]";
const h3Class = "mt-8 text-heading-3 text-[var(--color-text)]";

export function PrivacyPolicyPage() {
  useLegalPageTitle("Privacy Policy");

  const { company, privacy, siteUrl, appName, contact } = siteConfig;

  return (
    <LegalDocumentLayout title="Privacy Policy">
      <p className="mt-6 text-body-lg">
        <strong>Effective date:</strong> {privacy.effectiveDate}
        <br />
        <strong>Last updated:</strong> {privacy.lastUpdated}
      </p>

      <p className={bodyClass}>
        {company.legalName} (“<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>
        ”) operates the <strong>{appName}</strong> mobile application (“<strong>App</strong>”) and
        the website at{" "}
        <a href={siteUrl} className="font-medium text-[var(--color-primary)] underline">
          {siteUrl}
        </a>{" "}
        (together, the “<strong>Service</strong>”). This Privacy Policy explains how we collect,
        use, disclose, and protect personal information when you use the Service.
      </p>

      <p className={bodyClass}>
        By using the Service, you agree to this Privacy Policy and our{" "}
        <Link to="/terms" className="font-medium text-[var(--color-primary)] underline">
          Terms of Service
        </Link>
        . If you do not agree, please do not use the Service.
      </p>

      <aside
        className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6"
        aria-label="Summary"
      >
        <p className="text-body text-[var(--color-text)]">
          <strong>Summary:</strong> We collect account and profile data, content you upload, optional
          location, device and usage information, and data needed for payments, payouts, and push
          notifications. We use providers such as Supabase, Stripe, Firebase, and app stores under
          contract. You can manage permissions in device settings, delete your account in the App,
          and contact us for privacy requests at{" "}
          <a
            href={`mailto:${contact.supportEmail}`}
            className="font-medium text-[var(--color-primary)] underline"
          >
            {contact.supportEmail}
          </a>
          .
        </p>
      </aside>

      <section>
        <h2 className={h2Class}>1. Information we collect</h2>

        <h3 className={h3Class}>1.1 Account and profile</h3>
        <ul className={listClass}>
          <li>Email, name, role (community member or business owner), and authentication identifiers.</li>
          <li>Sign-in with Google or Apple, where enabled.</li>
          <li>Profile details you provide (preferences, city, avatar, etc.).</li>
          <li>
            Business listing fields if you are a business owner (name, description, hours, contact
            details, photos).
          </li>
        </ul>

        <h3 className={h3Class}>1.2 Content you provide</h3>
        <ul className={listClass}>
          <li>Photos, reviews, event details, and other content you upload or publish.</li>
          <li>
            Camera and photo-library access only when you choose to add images, per your device
            permissions.
          </li>
        </ul>

        <h3 className={h3Class}>1.3 Location</h3>
        <ul className={listClass}>
          <li>
            Approximate or precise location if you enable it for maps, discovery, or nearby features.
          </li>
        </ul>

        <h3 className={h3Class}>1.4 Usage and device</h3>
        <ul className={listClass}>
          <li>App interactions, diagnostics, device type, OS version, and similar technical data.</li>
          <li>Push notification tokens if you enable notifications.</li>
        </ul>

        <h3 className={h3Class}>1.5 Payments and payouts</h3>
        <ul className={listClass}>
          <li>
            Purchase and subscription data processed by Stripe, Apple App Store, Google Play,
            RevenueCat, or related partners (we do not store full card numbers).
          </li>
          <li>
            For business payouts via <strong>Stripe Connect</strong>, Stripe collects identity and
            banking information required for verification and transfers. We receive status and
            limited account identifiers from Stripe, not your full bank credentials.
          </li>
        </ul>

        <h3 className={h3Class}>1.6 Communications</h3>
        <ul className={listClass}>
          <li>Support messages you send us (including via our contact form or email).</li>
          <li>Service and security-related emails (for example, password reset).</li>
        </ul>
      </section>

      <section>
        <h2 className={h2Class}>2. How we use information</h2>
        <ul className={listClass}>
          <li>Provide, maintain, and improve the Service.</li>
          <li>Authenticate users and personalize experiences.</li>
          <li>Process tickets, subscriptions, boosts, and payouts you authorize.</li>
          <li>Send push notifications and service messages (where permitted).</li>
          <li>Detect fraud, abuse, and security issues.</li>
          <li>Comply with law and enforce our Terms.</li>
        </ul>
      </section>

      <section>
        <h2 className={h2Class}>3. How we share information</h2>
        <p className={bodyClass}>We may share information with:</p>
        <ul className={listClass}>
          <li>
            <strong>Infrastructure and auth:</strong> hosting and database providers (for example,
            Supabase).
          </li>
          <li>
            <strong>Payments:</strong> Stripe (including Connect), Apple, Google, and RevenueCat for
            transactions you initiate.
          </li>
          <li>
            <strong>Notifications:</strong> Firebase Cloud Messaging and related services for push
            delivery.
          </li>
          <li>
            <strong>Maps:</strong> Google Maps when you use map features.
          </li>
          <li>
            <strong>Analytics and support tools</strong> that help us operate the Service, under
            contractual safeguards.
          </li>
          <li>
            <strong>Legal and safety:</strong> regulators, law enforcement, or others when required
            or to protect rights and safety.
          </li>
        </ul>
        <p className={bodyClass}>
          We do not sell your personal information for money. If your region defines “sale” broadly,
          contact us for applicable choices.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>4. Retention</h2>
        <p className={bodyClass}>
          We retain information as long as needed for the purposes above, including legal, tax, and
          security requirements. When you delete your account, we delete or anonymize personal data
          within a reasonable period, except where we must retain certain records by law or for
          legitimate business purposes (for example, payment records).
        </p>
      </section>

      <section>
        <h2 className={h2Class}>5. Security</h2>
        <p className={bodyClass}>
          We use administrative, technical, and organizational measures designed to protect
          information. No system is completely secure; please use a strong password and protect your
          device.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>6. Your choices and rights</h2>
        <ul className={listClass}>
          <li>
            <strong>Permissions:</strong> Manage camera, location, notifications, and contacts in
            device settings.
          </li>
          <li>
            <strong>Account deletion:</strong> Available in App account settings; see section 4 for
            retention limits.
          </li>
          <li>
            <strong>Access and correction:</strong> Update profile information in the App where
            available.
          </li>
          <li>
            <strong>Privacy rights:</strong> Depending on your location, you may request access,
            deletion, correction, or portability. Email{" "}
            <a
              href={`mailto:${contact.supportEmail}`}
              className="font-medium text-[var(--color-primary)] underline"
            >
              {contact.supportEmail}
            </a>
            .
          </li>
          <li>
            <strong>Marketing:</strong> Opt out of promotional messages where offered; service
            messages may still be sent.
          </li>
        </ul>
      </section>

      <section>
        <h2 className={h2Class}>7. Children</h2>
        <p className={bodyClass}>
          The Service is not directed at children under 13. We do not knowingly collect personal
          information from children under 13. Contact us if you believe we have collected such
          information.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>8. International transfers</h2>
        <p className={bodyClass}>
          If you use the Service from outside {privacy.primaryRegion}, your information may be
          processed in countries where we or our providers operate, which may have different data
          protection laws.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>9. Third-party links</h2>
        <p className={bodyClass}>
          The Service may link to third-party sites or services. Their privacy practices are governed
          by their own policies.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>10. Changes</h2>
        <p className={bodyClass}>
          We may update this Privacy Policy from time to time. We will post the updated version with
          a new “Last updated” date and, where appropriate, notify you in the App or by email.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>11. Contact us</h2>
        <p className={bodyClass}>
          <strong>{company.legalName}</strong>
          {company.addressLine ? (
            <>
              <br />
              {company.addressLine}
            </>
          ) : null}
        </p>
        <p className={bodyClass}>
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${contact.supportEmail}`}
            className="font-medium text-[var(--color-primary)] underline"
          >
            {contact.supportEmail}
          </a>
          <br />
          <strong>Contact form:</strong>{" "}
          <Link to="/contact" className="font-medium text-[var(--color-primary)] underline">
            {siteUrl}/contact
          </Link>
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
