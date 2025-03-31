import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../shared/api/profile";

export const useProfile = () => {
  return useQuery({
    queryKey: ["account"],
    queryFn: () => getProfile(),
  });
};