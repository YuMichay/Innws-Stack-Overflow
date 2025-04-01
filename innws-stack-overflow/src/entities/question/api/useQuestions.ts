import { useQuery } from "@tanstack/react-query";

import { getQuestions } from "../../../shared/api/questions";

export const useQuestions = (page: number) => {
  return useQuery({
    queryKey: ["questions", page],
    queryFn: () => getQuestions(page),
  });
};