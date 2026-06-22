export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://theplayernation.com";

export const CONTACT_EMAIL = "play@statmagic.xyz";

/** Cloudflare Turnstile — dev uses interactive test key (requires user action). */
export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
  (process.env.NODE_ENV === "development" ? "3x00000000000000000000FF" : "3x00000000000000000000FF");

export const STORAGE_KEYS = {
    AUTH_TOKEN: "auth_token",
    REFRESH_TOKEN: "refresh_token",
    USER_DATA: "user_data",
  };