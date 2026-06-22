"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  acceptAllCookies,
  COOKIE_CONSENT_OPEN_EVENT,
  getCookieConsent,
  getLastCookieConsent,
  rejectOptionalCookies,
  saveCookieConsent,
  shouldShowCookieBanner,
  type CookiePreferences,
} from "@/utils/cookieConsent";

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
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    functional: false,
    marketing: false,
  });

  const openBanner = () => {
    const stored = getLastCookieConsent();
    if (stored) {
      setPreferences(stored.preferences);
    }
    setVisible(true);
  };

  useEffect(() => {
    if (shouldShowCookieBanner()) {
      setVisible(true);
    }

    const handleOpen = () => openBanner();
    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

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

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[55] bg-black/70 backdrop-blur-[2px]"
        aria-hidden
      />

      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        <div
          className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#1b1f27] shadow-[0_24px_80px_rgba(0,0,0,0.55)] md:max-h-none md:overflow-visible"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          aria-modal="true"
        >
          <div className="border-b border-white/8 px-6 py-5 sm:px-8 lg:py-4">
            <h2
              id="cookie-consent-title"
              className="text-xl font-bold tracking-tight text-foreground lg:text-[1.375rem]"
            >
              We use cookies on PlayerNation
            </h2>
            <p
              id="cookie-consent-description"
              className="mt-2.5 text-sm leading-relaxed text-muted lg:mt-2 lg:text-[0.875rem] lg:leading-snug"
            >
              We use cookies and similar technologies to keep PlayerNation working,
              remember your preferences, and understand how the platform is used.
              Strictly necessary cookies are always on. You can choose whether to
              allow optional cookies below. See our{" "}
              <Link
                href="/privacy"
                className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>{" "}
              for more details.
            </p>
          </div>

          <div className="divide-y divide-white/8 px-6 sm:px-8">
            {COOKIE_CATEGORIES.map((category) => {
              const preferenceKey = category.id as keyof CookiePreferences;
              const checked = category.alwaysOn
                ? true
                : preferences[preferenceKey];

              return (
                <div
                  key={category.id}
                  className="flex items-start justify-between gap-4 py-4 lg:py-3"
                >
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted lg:mt-0.5 lg:text-[0.8125rem] lg:leading-snug">
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

          <div className="border-t border-white/8 px-6 py-5 sm:px-8 lg:py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-nowrap">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Save my preferences
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Reject all optional
              </button>
            </div>

            <p className="mt-4 text-sm text-muted lg:mt-3 lg:text-[0.8125rem]">
              You can update your cookie preferences at any time in{" "}
              <button
                type="button"
                onClick={openBanner}
                className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary"
              >
                Settings
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
