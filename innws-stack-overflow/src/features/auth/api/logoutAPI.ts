import { api } from "../../../shared/api/api";

export const logoutUser = async() => {
  const response = await api.post("/api/auth/logout");
  return response.data;
}