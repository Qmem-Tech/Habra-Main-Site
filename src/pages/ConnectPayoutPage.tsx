import { CheckCircle2, AlertCircle, Smartphone } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { AppDownloadButtons } from "../components/common/AppDownloadButtons";

export type ConnectPageVariant = "success" | "refresh" | "error";

interface ConnectPayoutPageProps {
  variant: ConnectPageVariant;
}

const copy: Record<
  ConnectPageVariant,
  { title: string; body: string; icon: "success" | "warning" | "error" }
> = {
  success: {
    title: "Payout setup complete",
    body: "Stripe saved your details. Return to the Habra app, open Profile → Payout setup, and tap “I've completed setup – check status” to finish.",
    icon: "success",
  },
  refresh: {
    title: "Continue in the Habra app",
    body: "Your Stripe session ended or needs more information. Open Habra, go to Profile → Payout setup, and tap Set up payouts to continue.",
    icon: "warning",
  },
  error: {
    title: "Payout setup could not be completed",
    body: "Something went wrong during Stripe onboarding. Open Habra, go to Profile → Payout setup, and try again. If the problem continues, contact support.",
    icon: "error",
  },
};

function StatusIcon({ kind }: { kind: "success" | "warning" | "error" }) {
  const styles =
    kind === "success"
      ? "bg-emerald-100 text-emerald-700"
      : kind === "error"
        ? "bg-red-100 text-red-700"
        : "bg-amber-100 text-amber-800";

  const Icon = kind === "success" ? CheckCircle2 : AlertCircle;

  return (
    <div
      className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${styles}`}
    >
      <Icon className="h-10 w-10" strokeWidth={1.75} />
    </div>
  );
}

function tryOpenHabraApp() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) return;
  window.location.href = "habra://auth/callback";
}

export function ConnectPayoutPage({ variant }: ConnectPayoutPageProps) {
  const content = copy[variant];

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
          <div className="mx-auto max-w-lg animate-fade-in-up rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm md:p-10">
            <StatusIcon kind={content.icon} />

            <h1 className="mb-3 text-center text-2xl font-bold text-[#1a4d3e] md:text-3xl">
              {content.title}
            </h1>
            <p className="mb-8 text-center text-base leading-relaxed text-gray-600">
              {content.body}
            </p>

            <div className="mb-8 rounded-xl bg-[#1a4d3e]/5 p-4">
              <div className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-[#1a4d3e]" />
                <div>
                  <p className="text-sm font-semibold text-[#1a4d3e]">
                    Return to the Habra app
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Switch back to Habra using your app switcher, or tap the button
                    below if you are on your phone.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={tryOpenHabraApp}
              >
                Open Habra app
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Back to habra.app
              </Button>
            </div>

            <div className="mt-10 border-t border-gray-100 pt-8">
              <p className="mb-4 text-center text-sm text-gray-500">
                Don&apos;t have the app installed?
              </p>
              <AppDownloadButtons variant="light" className="justify-center" />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
