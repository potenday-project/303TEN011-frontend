import { useMemo } from "react";
import Link from "next/link";

import BasicCard from "../common/BasicCard";
import BasicCardContent from "../common/BasicCardContent";
import BasicCardBookInfo from "../common/BasicCardBookInfo";

import useGetArchiveBySearch from "@/hooks/archive/useGetArchiveBySearch";
import useIntersect from "@/hooks/common/useIntersect";
import { IconQuote } from "@/static/icons";

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
          검색 결과가 없습니다🥲
        </div>
      ) : (
        <div className="scrollbar-design grid h-full grid-cols-2 content-start gap-3 overflow-y-auto">
          {contents.map((item) => (
            <Link href={`/archive/${item.id}`} key={item.id}>
              <BasicCard
                className="gap-[2vw] p-[3.2vw] sm:gap-[10px] sm:p-[10px]"
                backgroundColor={item.backgroundColor}
                imageSize={item.imageSize}
                fontColor={item.fontColor}
              >
                <IconQuote className="w-[3vw] sm:w-[10px]" />
                <BasicCardContent
                  className="text-[2vw] leading-[3vw] sm:text-[7px] sm:leading-[12px]"
                  fontColor={item.fontColor}
                  fontStyle={item.fontStyle}
                  content={item.content}
                />
                <BasicCardBookInfo
                  className="bottom-[3vw] left-[3vw] w-[35vw] sm:bottom-[10px] sm:left-[10px] sm:w-[110px]"
                  titleClassName="text-[1.8vw] leading-[3vw] sm:text-[6px] sm:leading-[12px]"
                  authorClassName="text-[1.5vw] leading-[2.5vw] sm:text-[5px] sm:leading-[10px]"
                  fontColor={item.fontColor}
                  bookTitle={item.title}
                  bookAuthors={item.author}
                />
              </BasicCard>
            </Link>
          ))}
          {hasNextPage && <div ref={ref} />}
        </div>
      )}
    </>
  );
};

export default SearchResultContainer;
