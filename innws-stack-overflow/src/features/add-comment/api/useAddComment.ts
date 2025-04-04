import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment } from "./addComment";

export const useAddComment = (snippetId?: string, onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => addComment({ content, snippetId: Number(snippetId) }),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["comments", snippetId]});
      if (onSuccess) onSuccess();
    },
  });
};