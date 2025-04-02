import { api } from "../../../shared/api/api"
import { PostData } from "../../../shared/types/snippets";

export const postSnippet = async({language, code}: PostData) => {
  const response = await api.post(`/api/snippets`, { language, code });
  return response.data;
}