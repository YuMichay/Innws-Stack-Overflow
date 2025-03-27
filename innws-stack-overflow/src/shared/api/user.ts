import { deletedUser } from "../constants/deletedUser";
import { User } from "../types/snippets";
import { api } from "./api";

export const getUser = async (id: number): Promise<User> => {
  try {
    const user: User = (await api.get(`/users/${id}`));
    return user;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch(err) {
    return deletedUser;
  }
};