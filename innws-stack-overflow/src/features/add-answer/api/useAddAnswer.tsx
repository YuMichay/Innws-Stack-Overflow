import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAnswer } from "./addAnswer";

export const useAddAnswer = (questionId?: string, onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => addAnswer({ content, questionId: Number(questionId) }),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["answer", questionId]});
      if (onSuccess) onSuccess();
    },
  });
};