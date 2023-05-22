import { useMemo } from "react";
import Image from "next/image";
import { RadioGroup } from "@headlessui/react";

import ContainerTitle from "@/_write/elements/ContainerTitle";
import SearchBookItem from "@/_write/elements/SearchResultItem";
import useGetSearchBook from "@/_write/queries/useGetSearchBook";
import type { BookInfo } from "@/_write/types/bookTypes";

import useIntersect from "@/@shared/hooks/useIntersect";
import NotFoundSearchImage from "public/images/not_found_search.svg";
import { useWriteActions } from "@/store/useWriteStore";

interface SearchResultContainerProps {
  query: string;
  onChange: (value: BookInfo) => void;
  handleClickClose: () => void;
}

const SearchResultContainer = ({
  query,
  onChange,
  handleClickClose,
}: SearchResultContainerProps) => {
  const { postData } = useWriteActions();
  const handleClickButton = () => {
    postData("title", query);
    handleClickClose();
  };

  const { data, hasNextPage, isFetching, fetchNextPage } = useGetSearchBook(query);
  const contents = useMemo(() => (data ? data.pages.flatMap((page) => page.data) : []), [data]);
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <>
      {!isFetching && contents.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center">
          <span className="text-[#6a6a6a]">검색 결과가 없습니다 🥲</span>
          <Image
            className="mt-[14px]"
            src={NotFoundSearchImage}
            alt="검색 결과 없음 이미지"
            width={103}
            height={161}
          />
          <div className="mt-[30px] text-ellipsis break-words break-all text-center font-bold">{`'${query}' (으)로`}</div>
          <button
            onClick={handleClickButton}
            className="mt-1 h-[60px] w-full rounded-[10px] bg-[#ececec] font-medium"
          >
            책 이름 <span className="font-extrabold">직접 입력하기</span>
          </button>
        </div>
      ) : (
        <>
          <ContainerTitle title="검색 결과" />

          <RadioGroup
            onChange={onChange}
            className="h-search-container scrollbar-design overflow-y-auto"
          >
            {contents.map((item, idx) => (
              <SearchBookItem key={idx} item={item} />
            ))}
            {hasNextPage && <div ref={ref} />}
          </RadioGroup>
        </>
      )}
    </>
  );
};

export default SearchResultContainer;
