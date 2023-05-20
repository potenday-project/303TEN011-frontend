import { FormEvent, useState } from "react";
import { Dialog } from "@headlessui/react";

import PageTitle from "../common/PageTitle";
import SearchInput from "../common/SearchInput";

import { IconCancel } from "@/static/icons";
import { useModalActions, useSearchArchiveModalState } from "@/store/useModalStore";
import SearchResultContainer from "./SearchResultContainer";

const SearchArchiveModal = () => {
  const { changeModalState } = useModalActions();
  const isOpen = useSearchArchiveModalState();
  const handleClose = () => {
    changeModalState("searchArchive");
  };

  const [query, setQuery] = useState("");
  const handleSetQuery = (event: FormEvent<HTMLFormElement>, input: string) => {
    event.preventDefault();
    setQuery(input);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Dialog.Panel className="fixed top-0 z-30 h-[100dvh] w-full bg-main-100 sm:left-1/2 sm:max-w-[375px] sm:-translate-x-1/2">
        <Dialog.Title className="flex h-[125px] flex-col items-center justify-center gap-[20px] px-6">
          <div className="flex w-full items-center justify-between">
            <PageTitle title="아카이브 검색하기" />
            <IconCancel onClick={handleClose} className="cursor-pointer" />
          </div>

          <SearchInput
            query={query}
            onSubmit={handleSetQuery}
            placeholder="책 이름, 작가로 검색하기"
          />
        </Dialog.Title>

        <Dialog.Description as="div" className={`h-search-container px-6 pb-6`}>
          <SearchResultContainer query={query} />
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  );
};

export default SearchArchiveModal;
