import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../ui/Container";
import { siteConfig } from "../../config/site";

const baseTitle = "Habesha Community - Your Community, One App Away";

type LegalDocumentLayoutProps = {
  title: string;
  children: ReactNode;
};

export function LegalDocumentLayout({ title, children }: LegalDocumentLayoutProps) {
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

        <article className="max-w-none">
          <h1 className="text-heading-1 text-[var(--color-text)]">{title}</h1>
          {children}
        </article>
      </Container>
    </div>
  );
}

export function useLegalPageTitle(pageTitle: string) {
  useEffect(() => {
    document.title = `${pageTitle} | ${siteConfig.appName}`;
    return () => {
      document.title = baseTitle;
    };
  }, [pageTitle]);
}
