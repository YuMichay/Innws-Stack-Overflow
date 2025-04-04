import { api } from "../../../shared/api/api";
import { AuthData } from "../types/types";

export const registerUser = async({username, password}: AuthData) => {
  const response = await api.post("/api/register", { username, password });
  return response.data;
}