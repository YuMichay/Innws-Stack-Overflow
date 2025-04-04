import { api } from "../../../shared/api/api";
import { AuthData } from "../types/types";

export const loginUser = async({username, password}: AuthData) => {
  const response = await api.post("/api/auth/login", { username, password });
  return response.data;
}