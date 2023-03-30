import { Dialog } from "@headlessui/react";
import PageTitle from "../common/PageTitle";
import SearchInput from "../common/SearchInput";

import { IconCancel } from "@/static/icons";
import { useModalActions, useSearchArchiveModalState } from "@/store/useModalStore";

const SearchArchiveModal = () => {
  const { changeModalState } = useModalActions();
  const isOpen = useSearchArchiveModalState();
  const handleClose = () => {
    changeModalState("searchArchive");
  };

  const handleSetQuery = () => {
    console.log("handle");
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Dialog.Panel className="fixed inset-0 z-30 bg-main-100">
        <Dialog.Title className="flex h-[125px] flex-col items-center justify-center gap-[20px] px-6">
          <div className="flex w-full items-center justify-between">
            <PageTitle title="아카이브 검색하기" />
            <IconCancel onClick={handleClose} />
          </div>

          <SearchInput onSubmit={handleSetQuery} placeholder="책 이름, 작가로 검색하기" />
        </Dialog.Title>

        <Dialog.Description as="div" className={`h-searchContainer px-6`}></Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  );
};

export default SearchArchiveModal;
