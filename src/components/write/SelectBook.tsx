import Image from "next/image";

import { useModalActions } from "@/store/useModalStore";
import { useWriteActions, useWriteState } from "@/store/useWriteStore";
import { IconCancel, IconSearch } from "@/static/icons";

const SelectBook = () => {
  const { title, thumbnail, author } = useWriteState();
  const { clearData } = useWriteActions();
  const handleClickCancel = () => {
    clearData();
  };

  const { changeModalState } = useModalActions();
  const handleClickModalButton = () => {
    changeModalState("searchBook");
  };

  return (
    <section className="relative px-6">
      {title ? (
        <div className="flex h-[50px] w-full items-center justify-between gap-[10px] rounded-[10px] bg-white p-[12px]">
          <div className="flex items-center justify-start gap-[10px] overflow-hidden">
            <div className="relative h-[30px] w-[30px] shrink-0 rounded-md bg-[#d9d9d9]">
              {thumbnail && (
                <Image
                  className="rounded-md object-cover"
                  src={thumbnail}
                  alt="커버이미지"
                  fill
                  sizes="120px"
                  priority
                />
              )}
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="block truncate text-sm font-bold">{title}</span>
              <span className="block truncate text-xs text-[#777]">{author}</span>
            </div>
          </div>

          <button onClick={handleClickCancel} className="flex w-[28px] items-center justify-center">
            <IconCancel color="#585858" />
          </button>
        </div>
      ) : (
        <button
          className="flex h-[50px] w-full items-center justify-between rounded-[10px] bg-white p-4 text-sm font-semibold text-[#d9d9d9]"
          onClick={handleClickModalButton}
        >
          <span>책 검색하기</span>
          <IconSearch />
        </button>
      )}
    </section>
  );
};

export default SelectBook;
