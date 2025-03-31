import { api } from "../../../shared/api/api"
import { CreatePostData } from "../types/types";

export const postSnippet = async({language, code}: CreatePostData) => {
  const response = await api.post(`/api/snippets`, { language, code });
  return response.data;
}