import { IconSearch } from "@/static/icons";
import { useModalActions } from "@/store/useModalStore";

const NotSelectedBook = () => {
  const { changeModalState } = useModalActions();
  const handleClickModalButton = () => {
    changeModalState("searchBook");
  };

  return (
    <button
      className="flex h-[50px] w-full items-center justify-between rounded-[10px] bg-white p-4 text-button3 font-semibold text-[#d9d9d9]"
      onClick={handleClickModalButton}
    >
      <span>책 검색하기</span>
      <IconSearch />
    </button>
  );
};

export default NotSelectedBook;
