export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://theplayernation.com";

export const STORAGE_KEYS = {
    AUTH_TOKEN: "auth_token",
    REFRESH_TOKEN: "refresh_token",
    USER_DATA: "user_data",
  };