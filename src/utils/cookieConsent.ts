const COOKIE_CONSENT_KEY = "player-nation-cookie-consent";

/** Bump when a new optional cookie category is introduced. */
export const CONSENT_VERSION = 1;

/** Bump when the privacy policy changes materially. */
export const PRIVACY_POLICY_VERSION = 1;

/** GDPR guidance: re-prompt after ~6 months. */
export const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30 * 6;

export type CookiePreferences = {
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

export type StoredCookieConsent = {
  preferences: CookiePreferences;
  decidedAt: number;
  consentVersion: number;
  privacyPolicyVersion: number;
};

const DEFAULT_PREFERENCES: CookiePreferences = {
  analytics: false,
  functional: false,
  marketing: false,
};

const ALL_ACCEPTED_PREFERENCES: CookiePreferences = {
  analytics: true,
  functional: true,
  marketing: true,
};

function readStoredConsent(): StoredCookieConsent | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as StoredCookieConsent;
    if (
      parsed &&
      typeof parsed.decidedAt === "number" &&
      parsed.preferences &&
      typeof parsed.preferences.analytics === "boolean" &&
      typeof parsed.preferences.functional === "boolean" &&
      typeof parsed.preferences.marketing === "boolean"
    ) {
      return parsed;
    }
  } catch {
    // Fall through to legacy handling.
  }

  if (raw === "accepted") {
    return {
      preferences: ALL_ACCEPTED_PREFERENCES,
      decidedAt: Date.now(),
      consentVersion: CONSENT_VERSION,
      privacyPolicyVersion: PRIVACY_POLICY_VERSION,
    };
  }

  if (raw === "rejected") {
    return {
      preferences: DEFAULT_PREFERENCES,
      decidedAt: Date.now(),
      consentVersion: CONSENT_VERSION,
      privacyPolicyVersion: PRIVACY_POLICY_VERSION,
    };
  }

  return null;
}

function isConsentExpired(consent: StoredCookieConsent): boolean {
  return Date.now() - consent.decidedAt > CONSENT_MAX_AGE_MS;
}

export function shouldShowCookieBanner(): boolean {
  const stored = readStoredConsent();
  if (!stored) return true;
  if (isConsentExpired(stored)) return true;
  if (stored.consentVersion < CONSENT_VERSION) return true;
  if (stored.privacyPolicyVersion < PRIVACY_POLICY_VERSION) return true;
  return false;
}

export function getCookieConsent(): StoredCookieConsent | null {
  const stored = readStoredConsent();
  if (!stored || shouldShowCookieBanner()) return null;
  return stored;
}

/** Returns the last saved consent, even if expired or outdated. */
export function getLastCookieConsent(): StoredCookieConsent | null {
  return readStoredConsent();
}

export function getCookiePreferences(): CookiePreferences {
  return getCookieConsent()?.preferences ?? DEFAULT_PREFERENCES;
}

export function saveCookieConsent(preferences: CookiePreferences): void {
  const record: StoredCookieConsent = {
    preferences,
    decidedAt: Date.now(),
    consentVersion: CONSENT_VERSION,
    privacyPolicyVersion: PRIVACY_POLICY_VERSION,
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(record));
  window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: record }));
}

export function acceptAllCookies(): void {
  saveCookieConsent(ALL_ACCEPTED_PREFERENCES);
}

export function rejectOptionalCookies(): void {
  saveCookieConsent(DEFAULT_PREFERENCES);
}

export const COOKIE_CONSENT_OPEN_EVENT = "cookie-consent-open";

/** Re-open the consent modal (e.g. from footer or /manage-cookies). */
export function requestCookieConsentReview(options?: { showSettings?: boolean }): void {
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_OPEN_EVENT, { detail: options ?? { showSettings: true } }),
  );
}
