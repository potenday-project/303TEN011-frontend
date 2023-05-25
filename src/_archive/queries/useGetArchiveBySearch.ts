import { useInfiniteQuery } from "@tanstack/react-query";

import api from "@/@shared/utils/api";
import { GetCardData, PageableData } from "@/@shared/types/cardTypes";

interface Data {
  archives: {
    content: GetCardData[];
    pageableCustom: PageableData;
  };
  totalCreationDate: {
    [year: number]: number[];
  };
}

const getArchiveBySearch = async ({
  searchQuery,
  pageParam,
}: {
  searchQuery: string;
  pageParam: number;
}) => {
  const { data } = await api.get<Data>("/api/archives", {
    params: { page: pageParam, search: searchQuery },
  });

  return {
    data: data.archives.content,
    nextPage: pageParam + 1,
    isLastPage: data.archives.pageableCustom.last,
  };
};

const useGetArchiveBySearch = (searchQuery: string) => {
  return useInfiniteQuery(
    ["archive", searchQuery],
    ({ pageParam = 1 }) => getArchiveBySearch({ searchQuery, pageParam }),
    {
      enabled: !!searchQuery,
      retry: 0,
      getNextPageParam: (page) => (page.isLastPage ? undefined : page.nextPage),
    },
  );
};

export default useGetArchiveBySearch;
