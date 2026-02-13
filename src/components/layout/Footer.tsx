import { Instagram, Twitter, Facebook } from "lucide-react";
import { Container } from "../ui/Container";

const companyLinks = [
  { href: "#", label: "About Us" },
  { href: "#features", label: "Features" },
  { href: "#", label: "Pricing" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

const contactLinks = [
  { href: "#contact", label: "Contact Us" },
  { href: "#", label: "Support" },
];

const socialIcons = [
  { href: "#", icon: Instagram },
  { href: "#", icon: Twitter },
  { href: "#", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="grid gap-12 py-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-white/20" />
              <span className="text-xl font-bold uppercase tracking-wide text-white">
                Habesha
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              © 2026 Habesha. All Rights Reserved.
            </p>
            <div className="mt-4 flex gap-4">
              {socialIcons.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg p-2 text-gray-400 transition-colors hover:text-white"
                  aria-label={Icon.name}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-2">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white">Join Our Newsletter</h4>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#c9a961] focus:outline-none focus:ring-1 focus:ring-[#c9a961]"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#c9a961] px-6 py-3 font-semibold text-[#1a4d3e] transition-colors hover:bg-[#b89850]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
          English (US) | USD
        </div>
      </Container>
    </footer>
  );
}
