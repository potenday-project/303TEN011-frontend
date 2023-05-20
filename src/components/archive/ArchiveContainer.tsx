import { useMemo } from "react";
import Link from "next/link";

import BasicCard from "@/components/common/BasicCard";
import BasicCardContent from "@/components/common/BasicCardContent";
import BasicCardBookInfo from "@/components/common/BasicCardBookInfo";

import useGetArchive from "@/hooks/archive/useGetArchive";
import useIntersect from "@/hooks/common/useIntersect";
import { IconQuote } from "@/static/icons";

const ArchiveContainer = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetArchive();
  const contents = useMemo(() => (data ? data.pages.flatMap((page) => page.data) : []), [data]);
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <div className="scrollbar-design h-archive-result-container grid grid-cols-2 content-start gap-3 overflow-y-auto pb-[20px]">
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
  );
};

export default ArchiveContainer;
