import { getArchive } from "@/apis/api";
import { useQuery } from "@tanstack/react-query";

const useGetArchive = () => {
  return useQuery(["archive"], getArchive);
};

export default useGetArchive;
