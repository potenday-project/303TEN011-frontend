import { getRitual } from "@/apis/api";
import { useQuery } from "@tanstack/react-query";

const useRitual = () => {
  return useQuery(["ritual"], getRitual);
};

export default useRitual;
