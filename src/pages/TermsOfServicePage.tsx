import { Link } from "react-router-dom";
import { LegalDocumentLayout, useLegalPageTitle } from "../components/legal/LegalDocumentLayout";
import { siteConfig } from "../config/site";

const bodyClass = "mt-6 text-body text-[var(--color-text-muted)]";
const listClass = "mt-4 list-disc space-y-2 pl-6 text-body text-[var(--color-text-muted)]";
const h2Class = "mt-12 text-heading-1 text-[var(--color-text)]";
const h3Class = "mt-8 text-heading-3 text-[var(--color-text)]";

export function TermsOfServicePage() {
  useLegalPageTitle("Terms of Service");

  const { company, terms, siteUrl, appName } = siteConfig;
  const supportEmail = siteConfig.contact.supportEmail;

  return (
    <LegalDocumentLayout title="Terms of Service">
      <p className="mt-6 text-body-lg">
        <strong>Effective date:</strong> {terms.effectiveDate}
        <br />
        <strong>Last updated:</strong> {terms.lastUpdated}
      </p>

      <p className={bodyClass}>
        These Terms of Service (“<strong>Terms</strong>”) govern your access to and use of the{" "}
        <strong>{appName}</strong> mobile application (“<strong>App</strong>”), our website at{" "}
        <a href={siteUrl} className="font-medium text-[var(--color-primary)] underline">
          {siteUrl}
        </a>
        , and related services (together, the “<strong>Service</strong>”) operated by{" "}
        <strong>{company.legalName}</strong> (“<strong>we</strong>,” “<strong>us</strong>,” or “
        <strong>our</strong>”).
      </p>

      <p className={bodyClass}>
        By creating an account, downloading the App, or using the Service, you agree to these
        Terms and our{" "}
        <Link to="/privacy" className="font-medium text-[var(--color-primary)] underline">
          Privacy Policy
        </Link>
        . If you do not agree, do not use the Service.
      </p>

      <aside
        className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6"
        aria-label="Summary"
      >
        <p className="text-body text-[var(--color-text)]">
          <strong>Summary:</strong> {appName} connects community members with local businesses,
          events, and jobs. Business owners may list businesses, sell event tickets, and receive
          payouts through third-party payment providers. You are responsible for your content and
          conduct. Purchases and subscriptions are subject to platform and payment-provider rules.
          We may suspend accounts that violate these Terms.
        </p>
      </aside>

      <section>
        <h2 className={h2Class}>1. Who may use the Service</h2>
        <p className={bodyClass}>
          You must be at least 13 years old (or the minimum age required in your country) to use
          the Service. If you are under 18, you represent that you have permission from a parent
          or guardian. Business and payout features may require you to be 18 or older and able to
          enter binding contracts.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>2. Accounts</h2>
        <ul className={listClass}>
          <li>You must provide accurate registration information and keep it up to date.</li>
          <li>You are responsible for safeguarding your login credentials and activity on your account.</li>
          <li>
            You may sign in using email/password or third-party sign-in (such as Google or Apple)
            where offered.
          </li>
          <li>
            You may delete your account in the App (account settings). Deletion is subject to
            retention described in our Privacy Policy.
          </li>
        </ul>
      </section>

      <section>
        <h2 className={h2Class}>3. Roles: community members and business owners</h2>
        <h3 className={h3Class}>3.1 Community members</h3>
        <p className={bodyClass}>
          You may browse businesses, events, jobs, and community features, purchase tickets or
          other offerings where available, and interact with content according to these Terms.
        </p>
        <h3 className={h3Class}>3.2 Business owners</h3>
        <p className={bodyClass}>
          If you register as a business owner, you represent that you have authority to act for
          the business you list. You are responsible for the accuracy of listings, events, pricing,
          refunds (where you offer them), and compliance with applicable laws (including tax,
          consumer protection, and event regulations).
        </p>
      </section>

      <section>
        <h2 className={h2Class}>4. Events, tickets, and marketplace payments</h2>
        <ul className={listClass}>
          <li>
            Event tickets and certain purchases may be processed by <strong>Stripe</strong> or
            other payment partners. Card data is handled by those providers, not stored in full on
            our servers.
          </li>
          <li>
            Prices, fees, and availability are set by business owners unless we state otherwise.
            Platform or processing fees may apply and will be disclosed at checkout where required.
          </li>
          <li>
            Disputes about event quality, cancellations, or refunds are primarily between you and the
            business owner, though we may help facilitate communication at our discretion.
          </li>
          <li>Chargebacks and fraud prevention may be handled according to payment-provider rules.</li>
        </ul>
      </section>

      <section>
        <h2 className={h2Class}>5. Business subscriptions and boosts</h2>
        <p className={bodyClass}>
          Business tools, subscriptions, or promotional boosts may be billed through the{" "}
          <strong>Apple App Store</strong>, <strong>Google Play</strong>, and/or partners such as{" "}
          <strong>RevenueCat</strong>, according to the plan you select. Subscription terms
          (including renewal, cancellation, and free trials) are presented in the App and governed
          by the applicable store’s terms. Manage or cancel subscriptions through your device’s
          store account settings where applicable.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>6. Payouts (Stripe Connect)</h2>
        <p className={bodyClass}>
          Business owners who enable payouts must complete onboarding with <strong>Stripe Connect</strong>.
          Payout eligibility, identity verification, and bank account details are collected and
          processed by Stripe under Stripe’s terms. We do not store your full bank account
          credentials. Payout timing and holds are subject to Stripe and applicable law. You agree
          to provide accurate payout information and to comply with Stripe’s acceptable use policies.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>7. Your content</h2>
        <ul className={listClass}>
          <li>
            You retain ownership of content you submit (photos, reviews, listings, etc.). You grant
            us a worldwide, non-exclusive license to host, display, and distribute that content as
            needed to operate the Service.
          </li>
          <li>
            You represent that you have the rights to your content and that it does not violate law
            or third-party rights.
          </li>
          <li>
            We may remove content or suspend accounts that violate these Terms or that we reasonably
            believe are harmful, fraudulent, or abusive.
          </li>
        </ul>
      </section>

      <section>
        <h2 className={h2Class}>8. Prohibited conduct</h2>
        <p className={bodyClass}>You agree not to:</p>
        <ul className={listClass}>
          <li>Use the Service for illegal, harassing, discriminatory, or deceptive purposes.</li>
          <li>Impersonate others or misrepresent your affiliation.</li>
          <li>Scrape, reverse engineer, or attempt to disrupt the Service or its security.</li>
          <li>Upload malware, spam, or content that infringes intellectual property.</li>
          <li>Circumvent payments, fees, or access controls.</li>
        </ul>
      </section>

      <section>
        <h2 className={h2Class}>9. Intellectual property</h2>
        <p className={bodyClass}>
          The Service, including the {appName} name, logo, software, and design, is owned by us or
          our licensors and protected by intellectual property laws. These Terms do not grant you
          rights to our trademarks except as needed to use the Service.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>10. Third-party services</h2>
        <p className={bodyClass}>
          The Service integrates third parties (for example, Supabase, Firebase, Google Maps,
          Stripe, Apple, Google, and RevenueCat). Your use of those services may be subject to
          their separate terms and privacy policies. We are not responsible for third-party
          services outside our control.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>11. Disclaimers</h2>
        <p className={bodyClass}>
          THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY
          LAW, WE DISCLAIM WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE DO NOT GUARANTEE UNINTERRUPTED OR ERROR-FREE OPERATION. LISTINGS
          AND EVENTS ARE PROVIDED BY USERS; WE DO NOT ENDORSE EVERY BUSINESS OR EVENT.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>12. Limitation of liability</h2>
        <p className={bodyClass}>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE AND OUR AFFILIATES WILL NOT BE LIABLE FOR
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS
          OR DATA, ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR CLAIMS RELATING
          TO THE SERVICE IS LIMITED TO THE GREATER OF (A) AMOUNTS YOU PAID US IN THE TWELVE MONTHS
          BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (USD $100), EXCEPT WHERE LIABILITY
          CANNOT BE LIMITED BY LAW.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>13. Indemnity</h2>
        <p className={bodyClass}>
          You agree to indemnify and hold us harmless from claims arising out of your content,
          your use of the Service, or your violation of these Terms or applicable law, except to
          the extent caused by our negligence or willful misconduct.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>14. Termination</h2>
        <p className={bodyClass}>
          You may stop using the Service at any time. We may suspend or terminate access if you
          breach these Terms, if required by law, or to protect the Service or other users. Sections
          that by their nature should survive termination will survive.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>15. Governing law and disputes</h2>
        <p className={bodyClass}>
          These Terms are governed by the laws of the {terms.governingLawRegion}, without regard to
          conflict-of-law rules, except where mandatory local law applies. Disputes should first be
          sent to{" "}
          <a href={`mailto:${supportEmail}`} className="font-medium text-[var(--color-primary)] underline">
            {supportEmail}
          </a>{" "}
          so we can try to resolve them informally.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>16. Changes</h2>
        <p className={bodyClass}>
          We may update these Terms from time to time. We will post the updated version with a new
          “Last updated” date and, where appropriate, notify you in the App or by email. Continued
          use after changes become effective constitutes acceptance.
        </p>
      </section>

      <section>
        <h2 className={h2Class}>17. Contact</h2>
        <p className={bodyClass}>
          <strong>{company.legalName}</strong>
          <br />
          <strong>Email:</strong>{" "}
          <a href={`mailto:${supportEmail}`} className="font-medium text-[var(--color-primary)] underline">
            {supportEmail}
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
