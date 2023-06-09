import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import { Dialog } from "@headlessui/react";

import IconButton from "@/@shared/elements/IconButton";
import { useModalActions, useMypageModalState } from "@/store/useModalStore";
import { IconCancel } from "@/static/icons";

interface Props {
  nickname: string;
}

const MypageModal = ({ nickname }: Props) => {
  const isOpen = useMypageModalState();
  const { changeModalState } = useModalActions();
  const handleClickClose = () => {
    changeModalState("mypage");
  };

  const { replace } = useRouter();
  const handleClickLogout = () => {
    deleteCookie("token");
    deleteCookie("nickname");
    replace("/");
  };

  const handleClickLeave = () => {
    changeModalState("mypage");
    changeModalState("leave");
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClickClose}
      className="sm:media-center fixed top-0 z-20 flex h-[100dvh] w-full min-w-[320px] items-start justify-end bg-black/60"
    >
      <Dialog.Panel className="relative h-[calc(100dvh-60px)] w-[230px] rounded-l-[10px] bg-white">
        <div className="flex h-[210px] flex-col gap-5 rounded-l-[10px] bg-main-900 pl-8 pr-6">
          <div className="flex h-[60px] items-center justify-end">
            <IconButton icon={<IconCancel className="text-white" />} onClick={handleClickClose} />
          </div>
          <div className="flex flex-col gap-1 text-headline2 font-medium text-white">
            <span>안녕하세요.</span>
            <span>{nickname}님</span>
          </div>
        </div>

        <div className="my-4 ml-8 mr-12 divide-y divide-[#d9d9d9]  font-medium">
          <ModalListItem onClick={handleClickLogout}>로그아웃하기</ModalListItem>
          <ModalListItem onClick={handleClickLeave}>탈퇴하기</ModalListItem>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MypageModal;

const ModalListItem = ({
  onClick,
  children,
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className="flex h-10 w-full items-center" onClick={onClick}>
      {children}
    </button>
  );
};
