import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { AppDownloadButtons } from "../components/common/AppDownloadButtons";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

type PageStatus = "loading" | "ready" | "success" | "error" | "unconfigured";

export function AuthResetPasswordPage() {
  const [status, setStatus] = useState<PageStatus>(
    isSupabaseConfigured ? "loading" : "unconfigured",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!supabase) return;

    let cancelled = false;

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event) => {
        if (cancelled) return;
        if (event === "PASSWORD_RECOVERY") {
          setStatus("ready");
          setErrorMessage(null);
        }
      },
    );

    void (async () => {
      const hashParams = new URLSearchParams(
        window.location.hash.replace(/^#/, ""),
      );
      const queryParams = new URLSearchParams(window.location.search);
      const hasAuthParams =
        hashParams.has("access_token") ||
        hashParams.has("error_description") ||
        queryParams.has("code");

      if (!hasAuthParams) {
        const { data } = await supabase.auth.getSession();
        if (!cancelled && data.session) {
          setStatus("ready");
          return;
        }
        if (!cancelled) {
          setStatus("error");
          setErrorMessage(
            "This reset link is invalid or has expired. Request a new link from the Habra app.",
          );
        }
        return;
      }

      // detectSessionInUrl runs on createClient; give it a moment.
      await new Promise((r) => setTimeout(r, 400));
      const { data, error } = await supabase.auth.getSession();
      if (cancelled) return;
      if (error) {
        setStatus("error");
        setErrorMessage(error.message);
        return;
      }
      if (data.session) {
        setStatus("ready");
      } else {
        setStatus("error");
        setErrorMessage(
          "We could not verify your reset link. Request a new password reset email from the app.",
        );
      }
    })();

    return () => {
      cancelled = true;
      subscription.subscription.unsubscribe();
    };
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!supabase) return;

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    const { error } = await supabase.auth.updateUser({ password });
    setSubmitting(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    await supabase.auth.signOut();
    setStatus("success");
    window.history.replaceState({}, "", "/auth/reset-password");
  }

  return (
    <div className="min-h-screen bg-[#f5f5f4]">
      <header className="border-b border-gray-200/80 bg-white">
        <Container>
          <div className="flex h-16 items-center gap-2 md:h-20">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/habra_logo.png"
                alt="Habra"
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="text-xl font-bold uppercase tracking-wide text-[#1a4d3e]">
                Habra
              </span>
            </a>
          </div>
        </Container>
      </header>

      <main className="py-12 md:py-20">
        <Container>
          <div className="mx-auto max-w-md rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm">
            {status === "loading" && (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <Loader2 className="h-10 w-10 animate-spin text-[#1a4d3e]" />
                <p className="text-gray-600">Verifying your reset link…</p>
              </div>
            )}

            {status === "unconfigured" && (
              <div className="text-center">
                <AlertCircle className="mx-auto mb-4 h-12 w-12 text-amber-600" />
                <h1 className="text-xl font-semibold text-gray-900">
                  Password reset unavailable
                </h1>
                <p className="mt-2 text-gray-600">
                  This page is not configured yet. Use the Habra app to reset your
                  password, or contact support.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="text-center">
                <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-600" />
                <h1 className="text-xl font-semibold text-gray-900">
                  Reset link problem
                </h1>
                <p className="mt-2 text-gray-600">{errorMessage}</p>
                <p className="mt-4 text-sm text-gray-500">
                  Open the Habra app → Sign in → Forgot password and request a new
                  email.
                </p>
                <div className="mt-8">
                  <AppDownloadButtons />
                </div>
              </div>
            )}

            {status === "ready" && (
              <>
                <h1 className="text-center text-2xl font-bold text-gray-900">
                  Create a new password
                </h1>
                <p className="mt-2 text-center text-gray-600">
                  Choose a new password for your Habra account.
                </p>
                <form className="mt-8 space-y-4" onSubmit={onSubmit}>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">
                      New password
                    </span>
                    <input
                      type="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#1a4d3e] focus:ring-2 focus:ring-[#1a4d3e]/20"
                      required
                      minLength={6}
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700">
                      Confirm password
                    </span>
                    <input
                      type="password"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#1a4d3e] focus:ring-2 focus:ring-[#1a4d3e]/20"
                      required
                      minLength={6}
                    />
                  </label>
                  {errorMessage ? (
                    <p className="text-sm text-red-600" role="alert">
                      {errorMessage}
                    </p>
                  ) : null}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? "Saving…" : "Update password"}
                  </Button>
                </form>
              </>
            )}

            {status === "success" && (
              <div className="text-center">
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
                <h1 className="text-xl font-semibold text-gray-900">
                  Password updated
                </h1>
                <p className="mt-2 text-gray-600">
                  You can now sign in with your new password in the Habra app.
                </p>
                <div className="mt-8">
                  <AppDownloadButtons />
                </div>
              </div>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
}
