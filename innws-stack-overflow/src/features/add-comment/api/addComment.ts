import { api } from "../../../shared/api/api"
import { AddCommentProps } from "../types/types";

export const addComment = async({content, snippetId}: AddCommentProps) => {
  const response = await api.post(`/api/comments`, { content, snippetId });
  return response.data;
}