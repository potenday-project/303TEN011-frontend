import { useMemo } from "react";

import useGetArchive from "@/_archive/queries/useGetArchive";

import HalfCard from "@/@shared/elements/HalfCard";
import useIntersect from "@/@shared/hooks/useIntersect";

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
    <div className="scrollbar-design grid h-[calc(100dvh-224px)] grid-cols-2 content-start gap-3 overflow-y-auto pb-6">
      {contents.map((content) => (
        <HalfCard key={content.id} {...content} />
      ))}
      {hasNextPage && <div ref={ref} />}
    </div>
  );
};

export default ArchiveContainer;
