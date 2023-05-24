import { GetCardData, PageableData } from "@/@shared/types/cardTypes";
import api from "@/@shared/utils/api";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Data {
  archives: {
    content: GetCardData[];
    pageableCustom: PageableData;
  };
  totalCreationDate: {
    [year: number]: number[];
  };
}

const getArchive = async ({ pageParam = 1 }) => {
  const { data } = await api.get<Data>("/api/archives", { params: { page: pageParam } });

  return {
    data: data.archives.content,
    nextPage: pageParam + 1,
    isLastPage: data.archives.pageableCustom.last,
  };
};

const useGetArchive = () => {
  return useInfiniteQuery(["archive"], getArchive, {
    retry: 0,
    getNextPageParam: (page) => (page.isLastPage ? undefined : page.nextPage),
  });
};

export default useGetArchive;
