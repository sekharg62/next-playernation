"use client";

import { useEffect } from "react";
import { requestCookieConsentReview } from "@/utils/cookieConsent";

export default function ManageCookiesPage() {
  useEffect(() => {
    requestCookieConsentReview();
  }, []);

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground">Cookie settings</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Use the cookie preferences dialog to review and update your choices. If it
          didn&apos;t open automatically, click{" "}
          <button
            type="button"
            onClick={() => requestCookieConsentReview()}
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Manage Cookies
          </button>{" "}
          in the footer.
        </p>
      </div>
    </div>
  );
}
