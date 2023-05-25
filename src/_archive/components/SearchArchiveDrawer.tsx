import { FormEvent, useState } from "react";

import SearchResultContainer from "@/_archive/components/SearchResultContainer";

import Drawer from "@/@shared/elements/Drawer";
import SearchInput from "@/@shared/elements/SearchInput";
import { useModalActions, useSearchArchiveModalState } from "@/store/useModalStore";

const SearchArchiveDrawer = () => {
  const { changeModalState } = useModalActions();
  const isOpen = useSearchArchiveModalState();
  const handleClickClose = () => {
    changeModalState("searchArchive");
    setQuery("");
  };

  const [query, setQuery] = useState("");
  const handleSetQuery = (event: FormEvent<HTMLFormElement>, input: string) => {
    event.preventDefault();
    setQuery(input);
  };

  return (
    <Drawer open={isOpen} onClose={handleClickClose}>
      <Drawer.Header title="아카이브 검색하기" handleClickClose={handleClickClose}>
        <SearchInput
          query={query}
          onSubmit={handleSetQuery}
          placeholder="책 이름, 작가로 검색하기"
        />
      </Drawer.Header>

      <Drawer.Body>
        <SearchResultContainer query={query} />
      </Drawer.Body>
    </Drawer>
  );
};

export default SearchArchiveDrawer;
