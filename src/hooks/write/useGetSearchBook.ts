import { getSearchBookByQuery } from "@/apis/kakaoApi";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetSearchBook = (query: string) => {
  return useInfiniteQuery(
    ["book_query", query],
    ({ pageParam = 1 }) => getSearchBookByQuery({ query, pageParam }),
    {
      enabled: !!query,
      retry: 0,
      getNextPageParam: (page) => (page.isLastPage ? undefined : page.nextPage),
    },
  );
};

export default useGetSearchBook;
