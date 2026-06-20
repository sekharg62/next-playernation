const COOKIE_CONSENT_KEY = "player-nation-cookie-consent";

export type CookieConsentStatus = "accepted" | "rejected";

export function getCookieConsent(): CookieConsentStatus | null {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "rejected") {
    return value;
  }

  return null;
}

export function setCookieConsent(status: CookieConsentStatus): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, status);
}
