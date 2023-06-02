import { Dialog } from "@headlessui/react";

import CardDecoTabButton from "@/_write/elements/CardDecoTabButton";

import { useModalActions, useWriteInfoModalState } from "@/store/useModalStore";
import { IconBasicColor, IconFont, IconSpoide, IconTemplate } from "@/static/icons";

const WriteInfoModal = () => {
  const isOpen = useWriteInfoModalState();
  const { changeModalState } = useModalActions();
  const handleClickClose = () => {
    changeModalState("writeInfo");
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClickClose}
      className="sm:media-center fixed top-0 left-0 z-30 flex h-[100dvh] w-full min-w-[320px] items-center justify-center bg-black/40 p-6"
    >
      <Dialog.Panel className="relative h-[330px] w-full rounded-[10px] bg-white px-5">
        <div className="flex h-[50px] w-full items-center justify-center border-b font-bold">
          아이콘 설명
        </div>

        <div className="flex flex-col gap-[10px] pt-4">
          {INFO.map(({ icon, desc }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 whitespace-pre-line break-keep text-body2"
            >
              <div className="flex shrink-0">{icon}</div>
              <span>{desc}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleClickClose}
          className="absolute bottom-0 left-0 h-[60px] w-full rounded-b-[10px] bg-black text-button2 font-semibold text-white"
        >
          확인
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default WriteInfoModal;

const INFO = [
  {
    icon: <CardDecoTabButton icon={<IconBasicColor />} className="cursor-default" />,
    desc: "단색 배경을 선택할 수 있습니다.",
  },
  {
    icon: <CardDecoTabButton icon={<IconTemplate />} className="cursor-default" />,
    desc: "디자인 배경을 선택할 수 있습니다.",
  },
  {
    icon: <CardDecoTabButton icon={<IconSpoide />} className="cursor-default" />,
    desc: `표지 색상을 배경으로\n사용할 수 있습니다.`,
  },
  {
    icon: <CardDecoTabButton icon={<IconFont />} className="cursor-default" />,
    desc: "폰트를 선택할 수 있습니다.",
  },
];
