import { GetCardData, PageableData } from "@/@shared/types/cardTypes";
import api from "@/@shared/utils/api";
import { useInfiniteQuery } from "@tanstack/react-query";

const getArchive = async ({ pageParam = 1 }) => {
  const { data } = await api.get<{ content: GetCardData[]; pageableCustom: PageableData }>(
    "/api/archives",
    { params: { page: pageParam } },
  );

  return { data: data.content, nextPage: pageParam + 1, isLastPage: data.pageableCustom.last };
};

const useGetArchive = () => {
  return useInfiniteQuery(["archive"], getArchive, {
    retry: 0,
    getNextPageParam: (page) => (page.isLastPage ? undefined : page.nextPage),
  });
};

export default useGetArchive;
