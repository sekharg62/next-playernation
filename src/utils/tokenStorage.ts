import { STORAGE_KEYS } from "../constants";

// Token storage utilities
export const getToken = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch (error) {
    console.error("Error getting token from localStorage:", error);
    return null;
  }
};

export const setToken = (token: string): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  } catch (error) {
    console.error("Error setting token in localStorage:", error);
  }
};

export const clearToken = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch (error) {
    console.error("Error clearing token from localStorage:", error);
  }
};