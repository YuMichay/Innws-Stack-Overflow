import { api } from "../../../shared/api/api"
import { MarkProps } from "../types/types";

export const toggleMark = async({id, type}: MarkProps) => {
  const response = await api.post(`/snippets/${id}/mark`, { type });
  return response.data;
}