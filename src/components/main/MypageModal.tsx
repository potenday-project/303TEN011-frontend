import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import { Dialog } from "@headlessui/react";

import { useModalActions, useMypageModalState } from "@/store/useModalStore";
import { IconCancel } from "@/static/icons";

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
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="fixed top-0 z-20 flex h-[100dvh] w-full min-w-[320px] items-start justify-end bg-black/20 sm:left-1/2 sm:max-w-[320px] sm:-translate-x-1/2"
    >
      <Dialog.Panel className="h-mypage-modal relative w-[230px] rounded-l-[10px] bg-white p-[30px]">
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
    </Dialog>
  );
};

export default MypageModal;
