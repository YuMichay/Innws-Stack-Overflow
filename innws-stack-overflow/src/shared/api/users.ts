import { UserData } from "../types/users";
import { api } from "./api";

export const getUsers = async (page: number): Promise<UserData | undefined> => {
  try {
    const response = (await api.get(`/api/users?page=${page}`)).data;
    return response.data;
  } catch(err) {
    console.error("Error fetching user data:", err);
  }
};