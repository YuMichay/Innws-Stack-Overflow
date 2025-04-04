import { api } from "../../../shared/api/api"
import { QuestionData } from "../../../shared/types/questions";

export const postQuestion = async({title, description, attachedCode}: QuestionData) => {
  const response = await api.post(`/api/questions`, { title, description, attachedCode });
  return response.data;
}