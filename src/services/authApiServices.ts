import { isAxiosError } from "axios";
import apiClient from "./apiClient";

export const getTotalUserCount = async () => {
    try {
      const response = await apiClient.get("/users/count", {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      return {
        data: response?.data,
        status: response?.status,
        success: response?.status === 200,
      };
    } catch (error: unknown) {
      return {
        data: null,
        status: isAxiosError(error) ? error.response?.status ?? 500 : 500,
        success: false,
      };
    }
  };
  