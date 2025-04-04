import { api } from "../../../shared/api/api"
import { AddAnswerProps } from "../types/types";

export const addAnswer = async({content, questionId}: AddAnswerProps) => {
  const response = await api.post(`/api/answers`, { content, questionId });
  return response.data;
}