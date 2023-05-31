import { Dialog } from "@headlessui/react";

import usePostLeave from "@/_main/queries/usePostLeave";

import BasicButton from "@/@shared/elements/BasicButton";
import { useLeaveModalState, useModalActions } from "@/store/useModalStore";

const LeaveModal = () => {
  const isOpen = useLeaveModalState();
  const { changeModalState } = useModalActions();
  const handleClickClose = () => {
    changeModalState("leave");
    changeModalState("mypage");
  };

  const { mutate: postLeave } = usePostLeave();
  const handleClickLeave = () => {
    postLeave();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClickClose}
      className="sm:media-center fixed top-0 z-20 flex h-[100dvh] w-full min-w-[320px] items-center justify-center bg-black/60 p-6"
    >
      <Dialog.Panel className="relative h-[160px] w-full rounded-[10px] bg-white p-2">
        <div className="flex h-[90px] w-full items-center justify-center text-button1 font-semibold">
          정말로 탈퇴하시겠습니까?
        </div>
        <div className="absolute bottom-2 flex w-[calc(100%-16px)] gap-2">
          <BasicButton onClick={handleClickClose} text="취소" className="font-normal" />
          <BasicButton
            onClick={handleClickLeave}
            text="탈퇴하기"
            className="bg-black font-normal text-white"
          />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default LeaveModal;
