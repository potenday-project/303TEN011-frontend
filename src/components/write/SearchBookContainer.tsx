import { useMemo } from "react";
import { RadioGroup } from "@headlessui/react";

import ContainerTitle from "./ContainerTitle";
import SearchBookItem from "./SearchBookItem";

import useIntersect from "@/hooks/common/useIntersect";
import useGetSearchBook from "@/hooks/write/useGetSearchBook";
import type { BookInfo } from "@/constants/types";

interface Props {
  query: string;
  onChange: (value: BookInfo) => void;
}

const SearchBookContainer = ({ query, onChange }: Props) => {
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
      <ContainerTitle title="검색 결과" />

      <RadioGroup onChange={onChange} className="h-full overflow-y-auto px-6 pb-[230px]">
        {contents.map((item, idx) => (
          <SearchBookItem key={idx} item={item} />
        ))}
        {hasNextPage && <div ref={ref} />}
      </RadioGroup>
    </>
  );
};

export default SearchBookContainer;
