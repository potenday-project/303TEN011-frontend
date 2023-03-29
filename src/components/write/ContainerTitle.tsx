import { Dialog } from "@headlessui/react";

interface Props {
  title: string;
}

const ContainerTitle = ({ title }: Props) => {
  return (
    <Dialog.Description className="flex h-[24px] items-center px-6 text-xs text-[#aaa]">
      {title}
    </Dialog.Description>
  );
};

export default ContainerTitle;
