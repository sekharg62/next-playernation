"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsentStatus,
} from "@/utils/cookieConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  const handleChoice = (status: CookieConsentStatus) => {
    setCookieConsent(status);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-[2px]"
        aria-hidden
      />

      <div className="fixed inset-x-0 bottom-0 z-[60] sm:px-4 sm:pb-4">
        <div
          className="rounded-t-2xl border border-b-0 border-primary bg-[#0a0c10] px-4 py-5 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] sm:rounded-2xl sm:border-b sm:px-6 sm:py-6"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          aria-modal="true"
        >
          <div className="mx-auto flex max-w-7.5xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <p
              id="cookie-consent-description"
              className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]"
            >
              <span id="cookie-consent-title" className="sr-only">
                Cookie consent
              </span>
              By clicking{" "}
              <span className="font-semibold text-foreground">Accept</span>, you
              agree to the storing of cookies on your device to enhance site
              navigation, analyze site usage, and assist in our marketing
              efforts. For more details, please refer to our{" "}
              <Link
                href="/privacy"
                className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => handleChoice("rejected")}
                className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => handleChoice("accepted")}
                className="rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c10]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
