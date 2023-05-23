import { useMemo } from "react";

import useGetArchiveBySearch from "@/_archive/queries/useGetArchiveBySearch";

import useIntersect from "@/@shared/hooks/useIntersect";
import HalfCard from "@/@shared/elements/HalfCard";

interface Props {
  query: string;
}

const SearchResultContainer = ({ query }: Props) => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetArchiveBySearch(query);
  const contents = useMemo(() => (data ? data.pages.flatMap((page) => page.data) : []), [data]);
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <>
      {!isFetching && query && contents.length === 0 ? (
        <div className="mt-[30px] flex w-full justify-center text-[#6a6a6a]">
          검색 결과가 없습니다 🥲
        </div>
      ) : (
        <div className="scrollbar-design h-search-container grid grid-cols-2 content-start gap-3 overflow-y-auto">
          {contents.map((content) => (
            <HalfCard key={content.id} {...content} />
          ))}
          {hasNextPage && <div ref={ref} />}
        </div>
      )}
    </>
  );
};

export default SearchResultContainer;
