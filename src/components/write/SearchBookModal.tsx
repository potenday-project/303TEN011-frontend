import { FormEvent, useState } from "react";
import { Dialog } from "@headlessui/react";

import PageTitle from "../common/PageTitle";
import SearchInput from "../common/SearchInput";
import SearchBookContainer from "./SearchBookContainer";
import BottomButton from "../common/BottomButton";

import type { BookInfo } from "@/constants/types";
import { IconCancel } from "@/static/icons";
import { useModalActions, useSearchBookModalState } from "@/store/useModalStore";
import { useWriteActions } from "@/store/useWriteStore";
import { recentQuery } from "@/util/recentQuery";

const SearchBookModal = () => {
  const [query, setQuery] = useState("");
  const handleSetQuery = (event: FormEvent<HTMLFormElement>, input: string) => {
    event.preventDefault();
    if (input.trim().length === 0 || input === query) return;
    setQuery(input);
    recentQuery(input);
  };

  const [selectedBook, setSelectedBook] = useState<BookInfo>();
  const handleSelectedBook = (value: BookInfo) => {
    setSelectedBook(value);
  };

  const { postData } = useWriteActions();
  const handleClickButton = () => {
    if (!selectedBook) return;
    postData("title", selectedBook.title);
    postData("author", selectedBook.authors.join(", "));
    changeModalState("searchBook");
  };

  const { changeModalState } = useModalActions();
  const isOpen = useSearchBookModalState();
  const handleClose = () => {
    changeModalState("searchBook");
    setQuery("");
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

        <SearchBookContainer query={query} onChange={handleSelectedBook} />

        <BottomButton text="완료" onClick={handleClickButton} />
      </Dialog.Panel>
    </Dialog>
  );
};

export default SearchBookModal;