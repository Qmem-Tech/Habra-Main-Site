export type AuthPageVariant = "reset-password";

/** True when the current URL is the web password-reset callback. */
export function resolveAuthVariant(pathname: string): AuthPageVariant | null {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (
    normalized === "/auth/reset-password" ||
    normalized.startsWith("/auth/reset-password/")
  ) {
    return "reset-password";
  }
  return null;
}
