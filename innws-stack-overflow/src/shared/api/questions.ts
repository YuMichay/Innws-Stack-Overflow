import { QuestionsData } from "../types/questions";
import { api } from "./api";

export const getQuestions = async(page: number): Promise<QuestionsData | undefined> => {
  try {
    const response = (await api.get(`/api/questions?page=${page}`)).data;
    return response.data;
  } catch(err) {
    console.error("Cannot load questions data:", err);
  }
}

export const getQuestion = async(id: number) => {
  try {
    const response = (await api.get(`/api/questions/${id}`)).data;
    return response.data;
  } catch(err) {
    console.error("Cannot load question data:", err);
  }
}