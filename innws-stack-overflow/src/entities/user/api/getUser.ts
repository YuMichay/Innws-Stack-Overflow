import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../shared/api/user";

export const useUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });
};