import { FormEvent, useState } from "react";
import { Dialog } from "@headlessui/react";

import PageTitle from "../common/PageTitle";
import SearchInput from "../common/SearchInput";
import SearchBookContainer from "./SearchBookContainer";
import RecentQueryContainer from "./RecentQueryContainer";
import BottomButton from "../common/BottomButton";

import type { BookInfo } from "@/constants/types";
import { IconCancel } from "@/static/icons";
import { useModalActions, useSearchBookModalState } from "@/store/useModalStore";
import { useWriteActions } from "@/store/useWriteStore";
import { useHistoryActions } from "@/store/useHistoryStore";

const SearchBookModal = () => {
  const { addHistory } = useHistoryActions();
  const [query, setQuery] = useState("");
  const handleSetQuery = (event: FormEvent<HTMLFormElement>, input: string) => {
    event.preventDefault();
    if (input.trim().length === 0) return;
    setQuery(input);
    addHistory(input);
  };

  const [selectedBook, setSelectedBook] = useState<BookInfo>();
  const handleSelectedBook = (value: BookInfo) => {
    setSelectedBook(value);
  };

  const { changeModalState } = useModalActions();
  const isOpen = useSearchBookModalState();
  const handleClose = () => {
    changeModalState("searchBook");
    setSelectedBook(undefined);
    setQuery("");
  };

  const { postData } = useWriteActions();
  const handleClickButton = () => {
    if (!selectedBook) return;
    postData("title", selectedBook.title);
    postData("author", selectedBook.authors.join(", "));
    postData("thumbnail", selectedBook.thumbnail);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Dialog.Panel className="fixed inset-0 z-30 bg-main-100">
        <Dialog.Title className="flex h-[125px] flex-col items-center justify-center gap-[20px] px-6">
          <div className="flex w-full items-center justify-between">
            <PageTitle title="책 검색하기" />
            <IconCancel onClick={handleClose} />
          </div>

          <SearchInput onSubmit={handleSetQuery} placeholder="책 이름, 작가로 검색하기" />
        </Dialog.Title>

        <Dialog.Description as="div" className={`mt-[-125px] h-full pt-[125px] pb-[60px]`}>
          {query ? (
            <SearchBookContainer
              query={query}
              onChange={handleSelectedBook}
              handleClose={handleClose}
            />
          ) : (
            <RecentQueryContainer />
          )}
        </Dialog.Description>

        {selectedBook && <BottomButton text="완료" onClick={handleClickButton} />}
      </Dialog.Panel>
    </Dialog>
  );
};

export default SearchBookModal;
