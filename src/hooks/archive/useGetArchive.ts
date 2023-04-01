import { getArchive } from "@/apis/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetArchive = () => {
  return useInfiniteQuery(["archive"], getArchive, {
    retry: 0,
    getNextPageParam: (page) => (page.isLastPage ? undefined : page.nextPage),
  });
};

export default useGetArchive;
