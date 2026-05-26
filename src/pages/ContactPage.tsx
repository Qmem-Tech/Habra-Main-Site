import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Clock, MessageSquare } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { siteConfig } from "../config/site";
import {
  buildContactMailto,
  topicLabel,
  type ContactTopic,
} from "../lib/contactForm";
import { useLegalPageTitle } from "../components/legal/LegalDocumentLayout";

const topics: ContactTopic[] = [
  "general",
  "support",
  "business",
  "privacy",
  "legal",
  "partnership",
];

export function ContactPage() {
  useLegalPageTitle("Contact");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<ContactTopic>("general");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError("Please fill in all fields.");
      return;
    }
    if (!trimmedEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    const mailto = buildContactMailto({
      name: trimmedName,
      email: trimmedEmail,
      topic,
      message: trimmedMessage,
    });

    window.location.href = mailto;
    setSent(true);
  }

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

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <h1 className="text-heading-1 text-[var(--color-text)]">Contact us</h1>
            <p className="mt-4 text-body-lg text-[var(--color-text-muted)]">
              Questions about the Habra app, business listings, events, or your account?
              Send us a message and we will get back to you.
            </p>

            {sent ? (
              <div
                className="mt-8 rounded-[var(--radius-xl)] border border-emerald-200 bg-emerald-50 p-6 text-body text-emerald-900"
                role="status"
              >
                <p className="font-medium">Your email app should open shortly.</p>
                <p className="mt-2">
                  Send the pre-filled message from there. If nothing opens, email us directly
                  at{" "}
                  <a
                    href={`mailto:${siteConfig.contact.supportEmail}`}
                    className="font-medium underline"
                  >
                    {siteConfig.contact.supportEmail}
                  </a>
                  .
                </p>
                <Button
                  type="button"
                  variant="secondary"
                  className="mt-4"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-body font-medium">
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-body font-medium">
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-topic" className="mb-1 block text-body font-medium">
                    Topic
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value as ContactTopic)}
                    className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent px-4 py-3 text-base focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {topicLabel(t)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-body font-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    required
                    className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent px-4 py-3 text-base placeholder:text-[var(--color-text-subtle)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  />
                </div>

                {error ? (
                  <p className="text-body text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}

                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  Send message
                </Button>
                <p className="text-caption text-[var(--color-text-muted)]">
                  Submitting opens your email app with a pre-filled message to our support team.
                </p>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2">
            <div className="space-y-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-text)]">Support</p>
                  <a
                    href={`mailto:${siteConfig.contact.supportEmail}`}
                    className="text-body text-[var(--color-primary)] underline underline-offset-2"
                  >
                    {siteConfig.contact.supportEmail}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-text)]">Privacy</p>
                  <a
                    href={`mailto:${siteConfig.privacy.contactEmail}`}
                    className="text-body text-[var(--color-primary)] underline underline-offset-2"
                  >
                    {siteConfig.privacy.contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-text)]">Response time</p>
                  <p className="text-body text-[var(--color-text-muted)]">
                    {siteConfig.contact.responseTime}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-body text-[var(--color-text-muted)]">
              For privacy rights requests, see our{" "}
              <Link to="/privacy" className="font-medium text-[var(--color-primary)] underline">
                Privacy Policy
              </Link>
              . For app terms, see{" "}
              <Link to="/terms" className="font-medium text-[var(--color-primary)] underline">
                Terms of Service
              </Link>
              .
            </p>
          </aside>
        </div>
      </Container>
    </div>
  );
}
