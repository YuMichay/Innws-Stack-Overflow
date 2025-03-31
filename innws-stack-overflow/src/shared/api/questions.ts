import { QuestionsData } from "../types/questions";
import { api } from "./api";

export const getQuestions = async(page: number): Promise<QuestionsData | undefined> => {
  try {
    const response = (await api.get(`/api/questions?page=${page}`)).data;
    return response.data;
  } catch(err) {
    console.error("Error fetching user data:", err);
  }
}