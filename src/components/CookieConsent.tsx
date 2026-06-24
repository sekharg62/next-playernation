"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  acceptAllCookies,
  COOKIE_CONSENT_OPEN_EVENT,
  getLastCookieConsent,
  rejectOptionalCookies,
  saveCookieConsent,
  shouldShowCookieBanner,
  type CookiePreferences,
} from "@/utils/cookieConsent";

type ConsentView = "intro" | "settings";

const COOKIE_CATEGORIES = [
  {
    id: "necessary" as const,
    title: "Strictly necessary",
    description:
      "Login, security, and core platform functions. Cannot be disabled.",
    alwaysOn: true,
  },
  {
    id: "analytics" as const,
    title: "Analytics & performance",
    description:
      "Helps us understand how the platform is used so we can improve it.",
    alwaysOn: false,
  },
  {
    id: "functional" as const,
    title: "Functional",
    description:
      "Remembers your preferences, language, and settings across sessions.",
    alwaysOn: false,
  },
  {
    id: "marketing" as const,
    title: "Marketing & advertising",
    description:
      "Used to show relevant ads and measure their effectiveness, including via third-party networks.",
    alwaysOn: false,
  },
];

const linkClass =
  "font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary";

function ToggleSwitch({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed ${
        checked ? "bg-primary/80" : "bg-white/15"
      }`}
    >
      <span
        className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<ConsentView>("intro");
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    functional: false,
    marketing: false,
  });

  const openModal = (showSettings = false) => {
    const stored = getLastCookieConsent();
    if (stored) {
      setPreferences(stored.preferences);
    }
    setView(showSettings ? "settings" : "intro");
    setVisible(true);
  };

  useEffect(() => {
    if (shouldShowCookieBanner()) {
      openModal(false);
    }

    const handleOpen = (event: Event) => {
      const detail = (event as CustomEvent<{ showSettings?: boolean }>).detail;
      openModal(detail?.showSettings ?? true);
    };

    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousPadding = document.body.style.paddingBottom;
    document.body.style.paddingBottom =
      view === "settings" ? "min(70vh, 32rem)" : "min(42vh, 22rem)";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && view === "settings" && shouldShowCookieBanner()) {
        setView("intro");
      } else if (event.key === "Escape" && !shouldShowCookieBanner()) {
        setVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.paddingBottom = previousPadding;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [visible, view]);

  const handleSave = () => {
    saveCookieConsent(preferences);
    setVisible(false);
  };

  const handleAcceptAll = () => {
    acceptAllCookies();
    setVisible(false);
  };

  const handleRejectOptional = () => {
    rejectOptionalCookies();
    setVisible(false);
  };

  const handleClose = () => {
    if (shouldShowCookieBanner() && view === "settings") {
      setView("intro");
      return;
    }
    setVisible(false);
  };

  if (!visible) return null;

  const isFirstVisit = shouldShowCookieBanner();
  const title =
    view === "settings" ? "Cookie settings" : "We use cookies on PlayerNation";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-60 flex justify-center px-4 pb-0 pt-4 sm:px-6">
      <div
        className={`pointer-events-auto w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-b-0 border-white/10 bg-[#1b1f27] shadow-[0_-12px_48px_rgba(0,0,0,0.45)] ${
          view === "settings"
            ? "max-h-[min(70vh,32rem)]"
            : "max-h-[min(42vh,22rem)]"
        }`}
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/8 px-6 py-5 sm:px-8">
          <div className="min-w-0">
            <h2
              id="cookie-consent-title"
              className="text-xl font-bold tracking-tight text-foreground sm:text-[1.375rem]"
            >
              {title}
            </h2>
            {view === "intro" ? (
              <p
                id="cookie-consent-description"
                className="mt-2.5 text-sm leading-relaxed text-muted"
              >
                We use cookies and similar technologies to keep PlayerNation working,
                remember your preferences, and understand how the platform is used. Strictly
                necessary cookies are always on. You can accept all cookies, reject optional
                ones, or manage your preferences. See our{" "}
                <Link href="/privacypolicy" className={linkClass}>
                  Privacy Policy
                </Link>{" "}
                for more details.
              </p>
            ) : (
              <p
                id="cookie-consent-description"
                className="mt-2.5 text-sm leading-relaxed text-muted"
              >
                Choose which optional cookies you allow. Strictly necessary cookies cannot be
                disabled because they are required for the platform to function.
              </p>
            )}
          </div>

          {!isFirstVisit && (
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close cookie settings"
              className="shrink-0 rounded-lg p-1.5 text-muted transition-colors hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {view === "settings" && (
          <div className="divide-y divide-white/8 px-6 sm:px-8">
            {COOKIE_CATEGORIES.map((category) => {
              const preferenceKey = category.id as keyof CookiePreferences;
              const checked = category.alwaysOn
                ? true
                : preferences[preferenceKey];

              return (
                <div
                  key={category.id}
                  className="flex items-start justify-between gap-4 py-4"
                >
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {category.description}
                    </p>
                  </div>

                  {category.alwaysOn ? (
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted">
                      Always on
                    </span>
                  ) : (
                    <ToggleSwitch
                      checked={checked}
                      onChange={(value) =>
                        setPreferences((current) => ({
                          ...current,
                          [preferenceKey]: value,
                        }))
                      }
                      label={`${category.title} cookies`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="border-t border-white/8 px-6 py-5 sm:px-8">
          {view === "intro" ? (
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() => setView("settings")}
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Cookie settings
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Reject all optional
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={handleSave}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Save my preferences
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Reject all optional
              </button>
              {isFirstVisit && (
                <button
                  type="button"
                  onClick={() => setView("intro")}
                  className="rounded-lg border border-transparent px-5 py-2.5 text-sm font-semibold text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  Back
                </button>
              )}
            </div>
          )}

          {view === "intro" && (
            <p className="mt-4 text-sm text-muted">
              You can update your cookie preferences at any time from the footer under{" "}
              <span className="font-medium text-foreground">Manage Cookies</span>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
