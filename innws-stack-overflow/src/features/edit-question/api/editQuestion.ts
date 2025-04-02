import { api } from "../../../shared/api/api";
import { Question } from "../../../shared/types/questions";
import { EditQuestionProps } from "../types/types";

export const editQuestion = async ({id, title, description, attachedCode}: EditQuestionProps): Promise<Question | undefined> => {
  try {
    const response = await api.patch(`/api/questions/${id}`, {title, description, attachedCode});
    return response.data;
  } catch(err) {
    console.error("Failed to save question", err);
  }
};