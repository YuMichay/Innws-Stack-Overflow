import { User } from "../types/snippets";
import { api } from "./api";

export const getUsers = async (): Promise<User[] | undefined> => {
  try {
    const { data } = (await api.get(`/api/users`)).data;
    return data;
  } catch(err) {
    console.error("Error fetching user data:", err);
  }
};