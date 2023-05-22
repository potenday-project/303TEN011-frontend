import { RadioGroup } from "@headlessui/react";

import ContainerTitle from "@/_write/elements/ContainerTitle";

import { IconCancel } from "@/static/icons";
import useHistoryStore from "@/store/useHistoryStore";
import { useStore } from "@/store/useStore";

interface RecentQueryContainerProps {
  onClick: (input: string) => void;
}

const RecentQueryContainer = ({ onClick }: RecentQueryContainerProps) => {
  const historyStore = useStore(useHistoryStore, (state) => state);
  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>, query: string) => {
    event.stopPropagation();
    if (historyStore?.deleteHistory) {
      historyStore.deleteHistory(query);
    }
  };

  return (
    <>
      <ContainerTitle title="최근 검색 기록" />

      <RadioGroup className="h-search-container scrollbar-design flex flex-wrap content-start items-start gap-[6px] overflow-y-auto">
        {historyStore?.history.map((query) => (
          <RadioGroup.Option
            onClick={() => onClick(query)}
            key={query}
            value={query}
            className="flex h-fit w-fit cursor-pointer items-center justify-center gap-2 rounded-full border border-black py-2 pl-4 pr-3"
          >
            <span className="text-sm font-semibold">{query}</span>
            <button
              onClick={(event) => handleClickDelete(event, query)}
              className="flex w-5 items-center justify-center"
            >
              <IconCancel className="w-[14px]" />
            </button>
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </>
  );
};

export default RecentQueryContainer;
