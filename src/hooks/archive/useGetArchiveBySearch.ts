import { getArchiveBySearch } from "@/apis/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetArchiveBySearch = (searchQuery: string) => {
  return useInfiniteQuery(
    ["archive_search", searchQuery],
    ({ pageParam = 1 }) => getArchiveBySearch({ searchQuery, pageParam }),
    {
      enabled: !!searchQuery,
      retry: 0,
      getNextPageParam: (page) => (page.isLastPage ? undefined : page.nextPage),
    },
  );
};

export default useGetArchiveBySearch;
