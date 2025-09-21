import type { Plans } from "../types/plans";
import type { UserInfo } from "../types/user";

const API_BASE_URL = "/api";

const getBaseRequestOptions = () => ({
  headers: {
    "Content-Type": "application/json",
  },
});

class APIError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = "APIError";
    this.status = status;
    this.data = data;
  }
}

const getUsers = async (): Promise<UserInfo> => {
  const response = await fetch(`${API_BASE_URL}/user.json`, {
    ...getBaseRequestOptions(),
    method: "GET",
  });

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new APIError(result.message, response.status, result);
};

const getPlans = async (): Promise<Plans[]> => {
  const response = await fetch(`${API_BASE_URL}/plans.json`, {
    ...getBaseRequestOptions(),
    method: "GET",
  });

  const result = await response.json();

  if (response.ok) {
    const { list } = result;
    return list;
  }

  throw new APIError(result.message, response.status, result);
};

export const rimacAPI = {
  getUsers,
  getPlans,
};
