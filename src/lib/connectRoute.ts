import type { ConnectPageVariant } from "../pages/ConnectPayoutPage";

/** Maps Stripe Connect redirect paths to landing-page variants. */
export function resolveConnectVariant(
  pathname: string,
  search: string,
): ConnectPageVariant | null {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const params = new URLSearchParams(search);

  if (params.has("error") || params.get("status") === "failed") {
    return "error";
  }

  if (normalized === "/connect/return") {
    return "success";
  }
  if (normalized === "/connect/refresh") {
    return "refresh";
  }

  return null;
}
