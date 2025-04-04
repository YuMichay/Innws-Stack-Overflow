import { Comment } from "../types/snippets";
import { api } from "./api";

export const getComments = async (id: number): Promise<Comment[] | []> => {
  const response = (await api.get(`/api/snippets/${id}`)).data;
  return response.data?.comments ?? [];
}