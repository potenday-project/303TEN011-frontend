import { Dialog } from "@headlessui/react";
import { useModalActions, useMypageModalState } from "@/store/useModalStore";
import { IconCancel } from "@/static/icons";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

interface Props {
  nickname: string;
}

const MypageModal = ({ nickname }: Props) => {
  const { changeModalState } = useModalActions();
  const isOpen = useMypageModalState();
  const handleClose = () => {
    changeModalState("mypage");
  };

  const { replace } = useRouter();
  const handleClickLogout = () => {
    deleteCookie("token");
    deleteCookie("nickname");
    replace("/");
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Dialog.Panel className="h-mypage-modal fixed top-0 right-0 z-40 w-[230px] rounded-l-[10px] bg-white p-[30px]">
        <div className="flex justify-end">
          <IconCancel onClick={handleClose} className="mt-[30px] text-[#585858]" />
        </div>

        <div className="mt-[20px] flex flex-col gap-1 text-headline2 font-medium">
          <span>안녕하세요.</span>
          <span>{nickname}님</span>
        </div>

        <div className="absolute bottom-[30px] font-medium">
          <button onClick={handleClickLogout}>로그아웃하기</button>
        </div>
      </Dialog.Panel>
      <Dialog.Backdrop className="fixed inset-0 z-30 bg-black/20" />
    </Dialog>
  );
};

export default MypageModal;
