import PageTitle from "./PageTitle";
import TextButton from "./TextButton";

interface Props {
  title: string;
  func?: () => void;
}

const InnerContainerHeader = ({ title, func }: Props) => {
  const handleClickClose = () => {
    if (func) func();
  };

  return (
    <header className="flex h-[70px] items-center justify-between px-6">
      <PageTitle title={title} />
      <TextButton text="닫기" onClick={handleClickClose} />
    </header>
  );
};

export default InnerContainerHeader;
