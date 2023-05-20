import { RadioGroup } from "@headlessui/react";

import ContainerTitle from "./ContainerTitle";

import { IconCancel } from "@/static/icons";
import useHistoryStore, { useStore } from "@/store/useHistoryStore";

interface Props {
  onClick: (input: string) => void;
}

const RecentQueryContainer = ({ onClick }: Props) => {
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

      <RadioGroup className="scrollbar-design flex h-full flex-wrap content-start items-start gap-[6px] overflow-y-auto">
        {historyStore?.history.map((query) => (
          <RadioGroup.Option
            onClick={() => onClick(query)}
            key={query}
            value={query}
            className="flex h-fit w-fit cursor-pointer items-center justify-center gap-2 rounded-full border border-black px-4 py-2"
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
