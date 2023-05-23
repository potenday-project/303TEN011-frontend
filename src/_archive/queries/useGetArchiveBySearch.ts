import { useInfiniteQuery } from "@tanstack/react-query";

import api from "@/@shared/utils/api";
import { GetCardData, PageableData } from "@/@shared/types/cardTypes";

const getArchiveBySearch = async ({
  searchQuery,
  pageParam,
}: {
  searchQuery: string;
  pageParam: number;
}) => {
  const { data } = await api.get<{ content: GetCardData[]; pageableCustom: PageableData }>(
    "/api/archives",
    { params: { page: pageParam, title: searchQuery } },
  );

  return { data: data.content, nextPage: pageParam + 1, isLastPage: data.pageableCustom.last };
};

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
