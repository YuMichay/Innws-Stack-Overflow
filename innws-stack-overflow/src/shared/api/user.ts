import { User } from "../types/users";
import { api } from "./api";

export const getUser = async (id: number): Promise<User | undefined> => {
  try {
    const response = (await api.get(`/api/users/${id}`)).data.data;
    return response.data;
  } catch(err) {
    console.error("Can't load data", err);
  }
};