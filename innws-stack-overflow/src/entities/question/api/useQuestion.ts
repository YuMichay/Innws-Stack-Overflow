import { useQuery } from "@tanstack/react-query";
import { getQuestion } from "../../../shared/api/questions";

export const useQuestion = (id: number) => {
  return useQuery({
    queryKey: ["question", id],
    queryFn: () => getQuestion(id),
  });
};