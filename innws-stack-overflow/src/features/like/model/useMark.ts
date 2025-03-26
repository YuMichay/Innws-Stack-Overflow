import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleMark } from "../api/mark";
import { markType } from "../../../shared/types/snippets";

export const useMark = () => {
  const queryClient = useQueryClient();

  return useMutation<Response, Error, { id: string, type: markType }>({
    mutationFn: toggleMark,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["snippets"]});
    },
  });
};
