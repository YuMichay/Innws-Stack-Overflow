import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../../shared/api/comments";

export const useComments = (snippetId?: string) => {
  return useQuery({
    queryKey: ["comments", snippetId],
    queryFn: () => getComments(Number(snippetId)),
    enabled: !!snippetId,
  });
};
