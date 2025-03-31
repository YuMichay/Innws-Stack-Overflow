import { User } from "../types/users";
import { api } from "./api";

export const getUsers = async (): Promise<User[] | undefined> => {
  try {
    const response = (await api.get(`/api/users`)).data;
    return response.data;
  } catch(err) {
    console.error("Error fetching user data:", err);
  }
};