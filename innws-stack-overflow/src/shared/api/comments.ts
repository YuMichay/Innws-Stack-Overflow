import { api } from "./api";

export const getComments = async (id: number): Promise<Comment[]> => {
  const { data } = (await api.get(`/api/snippets/${id}`)).data;
  return data.comments;
}