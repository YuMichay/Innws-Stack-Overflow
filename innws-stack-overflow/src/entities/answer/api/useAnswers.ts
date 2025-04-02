import { useQuery } from "@tanstack/react-query";
import { getAnswers } from "../../../shared/api/questions";

export const useAnswers = (questionId: string) => {
  return useQuery({
    queryKey: ["answers", questionId],
    queryFn: () => getAnswers(Number(questionId)),
    enabled: !!questionId,
  });
};
