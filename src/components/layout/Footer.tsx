import type { ReactNode } from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { siteConfig } from "../../config/site";

const footerLinkClass =
  "transition-colors duration-200 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-dark-bg)] rounded-[var(--radius-sm)]";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const isClientRoute = href.startsWith("/") && !href.startsWith("//");
  if (isClientRoute) {
    return (
      <Link to={href} className={footerLinkClass} style={{ color: "var(--color-dark-text-muted)" }}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={footerLinkClass} style={{ color: "var(--color-dark-text-muted)" }}>
      {children}
    </a>
  );
}

const socialIcons = [
  { href: siteConfig.social.instagram, icon: Instagram, label: "Instagram" },
  { href: siteConfig.social.twitter, icon: Twitter, label: "Twitter" },
  { href: siteConfig.social.facebook, icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer
      className="text-[var(--color-dark-text-muted)]"
      style={{ backgroundColor: "var(--color-dark-bg)" }}
    >
      <Container>
        <div className="grid gap-12 py-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-dark-bg)] rounded-[var(--radius-md)]"
            >
              <img
                src={siteConfig.brand.logo}
                alt={`${siteConfig.appName} Logo`}
                className="h-8 w-8 rounded-[var(--radius-md)] object-cover transition-transform duration-200 hover:scale-105"
              />
              <span
                className="text-xl font-bold uppercase tracking-wide"
                style={{ color: "var(--color-dark-text)" }}
              >
                {siteConfig.appName}
              </span>
            </Link>
            <p className="mt-4 text-caption" style={{ color: "var(--color-dark-text-muted)" }}>
              © 2026 Habra. All Rights Reserved.
            </p>
            <div className="mt-4 flex gap-4">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[var(--radius-md)] p-2 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-dark-bg)]"
                  style={{ color: "var(--color-dark-text-muted)" }}
                  aria-label={label}
                >
                  <Icon size={20} className="hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-heading-3" style={{ color: "var(--color-dark-text)" }}>
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.footer.company.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-heading-3" style={{ color: "var(--color-dark-text)" }}>
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.footer.legal.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-heading-3" style={{ color: "var(--color-dark-text)" }}>
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.footer.contact.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-heading-3" style={{ color: "var(--color-dark-text)" }}>
              Join Our Newsletter
            </h4>
            <form
              className="mt-4 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Your Email"
                aria-label="Email for newsletter subscription"
                className="flex-1 border-[var(--color-dark-border)] bg-[var(--color-dark-surface)] text-[var(--color-dark-text)] placeholder:opacity-60 focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/30"
              />
              <Button type="submit" variant="primary" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div
          className="border-t py-4 text-center text-caption"
          style={{
            borderColor: "var(--color-dark-border)",
            color: "var(--color-dark-text-muted)",
          }}
        >
          English (US) | USD
        </div>
      </Container>
    </footer>
  );
}
