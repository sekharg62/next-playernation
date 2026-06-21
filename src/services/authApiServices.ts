import { isAxiosError } from "axios";
import { BASE_URL } from "@/constants";
import apiClient from "./apiClient";

export async function fetchTotalUserCount(): Promise<number> {
  try {
    const response = await fetch(`${BASE_URL}/users/count`, {
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return 0;
    }

    const data: { totalCount?: number } = await response.json();
    return typeof data.totalCount === "number" ? data.totalCount : 0;
  } catch {
    return 0;
  }
}
