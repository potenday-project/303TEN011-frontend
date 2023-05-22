import { FormEvent, useState } from "react";

import SearchResultContainer from "@/_write/components/SearchResultContainer";
import RecentQueryContainer from "@/_write/components/RecentQueryContainer";
import type { BookInfo } from "@/_write/types/bookTypes";

import Drawer from "@/@shared/elements/Drawer";
import SearchInput from "@/@shared/elements/SearchInput";
import BottomButton from "@/@shared/elements/BottomButton";

import { useStore } from "@/store/useStore";
import useHistoryStore from "@/store/useHistoryStore";
import { useModalActions, useSearchBookModalState } from "@/store/useModalStore";
import { useWriteActions } from "@/store/useWriteStore";

const SearchBookDrawer = () => {
  const [query, setQuery] = useState("");
  const historyStore = useStore(useHistoryStore, (state) => state);
  const handleSetQuery = (event: FormEvent<HTMLFormElement>, input: string) => {
    event.preventDefault();
    if (input.trim().length === 0 || input === query) return;
    setQuery(input);
    if (historyStore?.addHistory) {
      historyStore.addHistory(input);
    }
  };

  const handleClickRecent = (input: string) => {
    setQuery(input);
    if (historyStore?.addHistory) {
      historyStore.addHistory(input);
    }
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
    postData("thumbnail", selectedBook.thumbnail);
    handleClickClose();
  };

  const { changeModalState } = useModalActions();
  const isOpen = useSearchBookModalState();
  const handleClickClose = () => {
    changeModalState("searchBook");
    setSelectedBook(undefined);
    setQuery("");
  };

  return (
    <Drawer open={isOpen} onClose={handleClickClose}>
      <Drawer.Header title="책 검색하기" handleClickClose={handleClickClose}>
        <SearchInput
          query={query}
          onSubmit={handleSetQuery}
          placeholder="책 이름, 작가로 검색하기"
        />
      </Drawer.Header>

      <Drawer.Body className={`${selectedBook ? "pb-[60px]" : "pb-6"}`}>
        {query ? (
          <SearchResultContainer
            query={query}
            onChange={handleSelectedBook}
            handleClickClose={handleClickClose}
          />
        ) : (
          <RecentQueryContainer onClick={handleClickRecent} />
        )}
      </Drawer.Body>

      <BottomButton visible={!!selectedBook} onClick={handleClickButton} />
    </Drawer>
  );
};

export default SearchBookDrawer;
