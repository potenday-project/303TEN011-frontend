import { PropsWithChildren } from "react";
import { Dialog } from "@headlessui/react";
import PageTitle from "./PageTitle";
import IconButton from "./IconButton";
import { IconCancel } from "@/static/icons";

interface DrawerProps {
  className?: string;
  open: boolean;
  onClose: () => void;
}

interface DrawerHeaderProps {
  title: string;
  handleClickClose: () => void;
}

const Drawer = ({ children, open, onClose, className }: PropsWithChildren<DrawerProps>) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Panel
        className={`${className} sm:media-center fixed top-0 z-30 h-[100dvh] w-full cursor-default bg-main-100 px-6`}
      >
        {children}
      </Dialog.Panel>
    </Dialog>
  );
};

const DrawerHeader = ({
  children,
  title,
  handleClickClose,
}: PropsWithChildren<DrawerHeaderProps>) => {
  return (
    <Dialog.Title className="flex flex-col items-center">
      <div className="flex h-[50px] w-full items-center justify-between">
        <PageTitle title={title} />
        <IconButton icon={<IconCancel />} onClick={handleClickClose} />
      </div>

      {children && <div className="flex h-[75px] w-full items-center">{children}</div>}
    </Dialog.Title>
  );
};

const DrawerBody = ({ children, className }: PropsWithChildren<Pick<DrawerProps, "className">>) => {
  return (
    <Dialog.Description as="div" className={`${className} h-drawer-container pb-6`}>
      {children}
    </Dialog.Description>
  );
};

Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
export default Drawer;
