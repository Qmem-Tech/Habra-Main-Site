import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "../../config/site";
import { cn } from "../../lib/utils";

const navLinks = [
  { to: "/#about", label: "About" },
  { to: "/#features", label: "Features" },
  { to: "/#contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: "contact" });
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const onJoinCommunity = () => {
    setMobileMenuOpen(false);
    scrollToContact();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)]/80 bg-[var(--color-background)]/95 backdrop-blur-sm transition-shadow duration-300 hover:shadow-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-90"
          >
            <img
              src={siteConfig.brand.logo}
              alt={`${siteConfig.appName} Logo`}
              className="h-8 w-8 rounded-[var(--radius-md)] object-cover transition-transform duration-200 hover:scale-105"
            />
            <span
              className="text-xl font-bold uppercase tracking-wide"
              style={{ color: "var(--color-primary)" }}
            >
              {siteConfig.appName}
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-primary)]"
              >
                {link.label}
              </Link>
            ))}
            <Button type="button" variant="primary" size="sm" onClick={scrollToContact}>
              Join Community
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "rounded-[var(--radius-md)] p-2 transition-colors duration-200 md:hidden",
              "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div
            className="absolute left-0 right-0 top-16 animate-slide-down border-b border-[var(--color-border)] py-4 md:hidden"
            style={{
              backgroundColor: "var(--color-background)",
            }}
          >
            <div className="flex flex-col gap-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-primary)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button type="button" variant="primary" className="w-full" onClick={onJoinCommunity}>
                Join Community
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
