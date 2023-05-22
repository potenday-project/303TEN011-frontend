import { useInfiniteQuery } from "@tanstack/react-query";

import type { GetBookInfo } from "@/_write/types/bookTypes";
import kakaoApi from "@/@shared/utils/kakaoApi";

interface Argument {
  query: string;
  pageParam: number;
}

export const getSearchBookByQuery = async ({ query, pageParam }: Argument) => {
  const { data } = await kakaoApi.get<GetBookInfo>("/book", { params: { query, page: pageParam } });

  return {
    data: data.documents,
    nextPage: pageParam + 1,
    isLastPage: data.meta.is_end,
  };
};

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
