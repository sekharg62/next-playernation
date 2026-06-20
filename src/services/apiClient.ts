import axios, { AxiosError } from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  skip401Redirect?: boolean;
}
import { BASE_URL } from "../constants";
import { clearToken, getToken } from "@/utils/tokenStorage";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const token = getToken();

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error adding auth token:", error);
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Force logout on 401 errors
      clearToken();
      // Check if this request should skip the redirect (for exceptional cases)
      const skipRedirect = (error.config as CustomAxiosRequestConfig | undefined)
        ?.skip401Redirect;
      if (!skipRedirect) {
        // You can also redirect to login page here if needed
        // window.location.href = "/login";
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
