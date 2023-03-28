import { ChangeEvent, useMemo, useState } from "react";
import Image from "next/image";

import useDebounce from "@/hooks/common/useDebounce";
import useIntersect from "@/hooks/common/useIntersect";
import useGetSearchBook from "@/hooks/write/useGetSearchBook";
import { Combobox } from "@headlessui/react";
import { BookInfo } from "@/constants/types";

const Write = () => {
  const [selectedBook, setSelectedBook] = useState<BookInfo>();
  const [query, setQuery] = useState("");

  const { data, hasNextPage, isFetching, fetchNextPage } = useGetSearchBook(useDebounce(query));
  const contents = useMemo(() => (data ? data.pages.flatMap((page) => page.data) : []), [data]);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Combobox onChange={setSelectedBook}>
        <Combobox.Label>{selectedBook?.title}</Combobox.Label>

        <Combobox.Button as="div" className="h-20 bg-slate-500">
          <Combobox.Input
            placeholder="책 제목, 저자등을 검색해보세요."
            value={query}
            onChange={handleChangeQuery}
            className="w-full bg-slate-100"
          />
        </Combobox.Button>

        <Combobox.Options
          static
          className={`ui-not-open:hidden bg-green-400 h-80 max-h-80 overflow-y-auto`}
        >
          {!query && <div>이전에 검색한 목록이에요.</div>}

          {query &&
            contents.map((item, idx) => (
              <Combobox.Option
                key={idx}
                value={item}
                className="grid grid-cols-[30px_auto] gap-3 h-11 border border-neutral-900"
              >
                <div className="relative">
                  {item.thumbnail && (
                    <Image
                      className="object-contain"
                      src={item.thumbnail}
                      alt="커버이미지"
                      fill
                      sizes="120px"
                      priority
                    />
                  )}
                </div>

                <div className="truncate">{item.title}</div>
              </Combobox.Option>
            ))}

          {query && hasNextPage && <div ref={ref}>loading</div>}
        </Combobox.Options>
      </Combobox>
    </>
  );
};

export default Write;
