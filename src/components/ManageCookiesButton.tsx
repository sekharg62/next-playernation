"use client";

import type { ReactNode } from "react";
import { requestCookieConsentReview } from "@/utils/cookieConsent";

type ManageCookiesButtonProps = {
  className?: string;
  children: ReactNode;
};

export default function ManageCookiesButton({
  className,
  children,
}: ManageCookiesButtonProps) {
  return (
    <button
      type="button"
      onClick={() => requestCookieConsentReview()}
      className={className}
    >
      {children}
    </button>
  );
}
