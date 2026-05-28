import { siteConfig } from "../config/site";

export type ContactTopic =
  | "general"
  | "support"
  | "business"
  | "privacy"
  | "legal"
  | "partnership";

const topicLabels: Record<ContactTopic, string> = {
  general: "General inquiry",
  support: "App support",
  business: "Business / events",
  privacy: "Privacy request",
  legal: "Legal / terms",
  partnership: "Partnership",
};

export function topicLabel(topic: ContactTopic): string {
  return topicLabels[topic];
}

export function buildContactMailto(params: {
  name: string;
  email: string;
  topic: ContactTopic;
  message: string;
}): string {
  const to = siteConfig.contact.supportEmail;
  const { subject, body } = buildContactDraft(params);

  // Keep the mailbox literal (do not URI-encode '@') for better client compatibility.
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildContactDraft(params: {
  name: string;
  email: string;
  topic: ContactTopic;
  message: string;
}): { subject: string; body: string } {
  const subject = `[Habra] ${topicLabels[params.topic]} — ${params.name}`;
  const body = [
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    `Topic: ${topicLabels[params.topic]}`,
    "",
    params.message,
  ].join("\n");
  return { subject, body };
}

export function buildGmailComposeUrl(params: {
  name: string;
  email: string;
  topic: ContactTopic;
  message: string;
}): string {
  const to = siteConfig.contact.supportEmail;
  const { subject, body } = buildContactDraft(params);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
