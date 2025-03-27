import { api } from "../../../shared/api/api";

export const authUser = async() => {
  try {
    const response = await api.get("/auth");

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Auth check failed", error);
    return false;
  }
}