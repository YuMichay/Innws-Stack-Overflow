import { User } from "../types/snippets";
import { api } from "./api";

export const getUser = async (id: number): Promise<User | undefined> => {
  try {
    const user: User = (await api.get(`/api/users/${id}`)).data.data;
    return user;
  } catch(err) {
    console.error("Can't load data", err);
  }
};