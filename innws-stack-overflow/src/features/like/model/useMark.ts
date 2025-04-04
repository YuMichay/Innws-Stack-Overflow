import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleMark } from "../api/mark";
import { markType } from "../../../shared/types/snippets";

export const useMark = () => {
  const queryClient = useQueryClient();

  return useMutation<Response, Error, { id: number, type: markType }>({
    mutationFn: ({id, type}) => toggleMark({id, type}),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["snippets"]});
    },
  });
};
