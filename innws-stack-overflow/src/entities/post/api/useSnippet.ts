import { useQuery } from "@tanstack/react-query";
import { getSnippet } from "../../../shared/api/snippets";

export const useSnippet = (id?: string) => {
  return useQuery({
    queryKey: ["snippet", id],
    queryFn: () => getSnippet(Number(id)),
    enabled: !!id,
  });
};