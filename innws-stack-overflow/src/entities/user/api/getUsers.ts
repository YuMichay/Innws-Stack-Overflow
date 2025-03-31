import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../shared/api/users";

export const useUsers = (page: number) => {
  return useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsers(page),
  });
};