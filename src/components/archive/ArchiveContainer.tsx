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
    <div className="h-archive-result-container grid grid-cols-2 content-start gap-3 overflow-y-auto pb-[20px]">
      {contents.map((item) => (
        <Link href={`/archive/${item.id}`} key={item.id}>
          <BasicCard
            className="gap-[2vw] p-[3.2vw]"
            backgroundColor={item.backgroundColor}
            imageSize={item.imageSize}
            fontColor={item.fontColor}
          >
            <IconQuote className="w-[3vw]" />
            <BasicCardContent
              className="text-[2vw] leading-[3vw]"
              fontColor={item.fontColor}
              fontStyle={item.fontStyle}
              content={item.content}
            />
            <BasicCardBookInfo
              className="bottom-[3vw] left-[3vw] w-[35vw]"
              titleClassName="text-[1.8vw] leading-[3vw]"
              authorClassName="text-[1.5vw] leading-[2.5vw]"
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
