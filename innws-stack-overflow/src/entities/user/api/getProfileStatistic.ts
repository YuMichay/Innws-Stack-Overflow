import { useQuery } from "@tanstack/react-query";
import { getProfileStatistic } from "../../../shared/api/profile";

export const useStatistic = (id: number) => {
  return useQuery({
    queryKey: ["profileStatistic", id],
    queryFn: () => getProfileStatistic(id),
  });
};