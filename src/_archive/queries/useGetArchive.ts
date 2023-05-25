import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";

import { GetCardData, PageableData } from "@/@shared/types/cardTypes";
import api from "@/@shared/utils/api";

interface Data {
  archives: {
    content: GetCardData[];
    pageableCustom: PageableData;
  };
  totalCreationDate: {
    [year: number]: number[];
  };
}

const getArchive = async (pageParam = 1, selectedDate = { year: 0, month: 0 }) => {
  const { data } = await api.get<Data>("/api/archives", {
    params: { page: pageParam, year: selectedDate.year || null, month: selectedDate.month || null },
  });

  return {
    data: data.archives.content,
    creationDate: data.totalCreationDate,
    nextPage: pageParam + 1,
    isLastPage: data.archives.pageableCustom.last,
  };
};

const useGetArchive = () => {
  const { query } = useRouter();
  const year = Number(query.year);
  const month = Number(query.month);

  if (!year && !month) {
    return useInfiniteQuery(["archive"], ({ pageParam }) => getArchive(pageParam), {
      retry: 0,
      getNextPageParam: (page) => (page.isLastPage ? undefined : page.nextPage),
    });
  } else {
    return useInfiniteQuery(
      ["archive", `${year}년${month}월`],
      ({ pageParam }) => getArchive(pageParam, { year, month }),
      {
        retry: 0,
        getNextPageParam: (page) => (page.isLastPage ? undefined : page.nextPage),
      },
    );
  }
};

export default useGetArchive;
