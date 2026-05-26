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
  const subject = `[Habra] ${topicLabels[params.topic]} — ${params.name}`;
  const body = [
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    `Topic: ${topicLabels[params.topic]}`,
    "",
    params.message,
  ].join("\n");

  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
