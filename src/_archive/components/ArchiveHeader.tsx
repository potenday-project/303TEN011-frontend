import IconButton from "@/@shared/elements/IconButton";
import PageTitle from "@/@shared/elements/PageTitle";
import { IconSearch } from "@/static/icons";
import { useModalActions } from "@/store/useModalStore";

interface ArchiveHeaderProps {
  nickname: string;
}

const ArchiveHeader = ({ nickname }: ArchiveHeaderProps) => {
  const { changeModalState } = useModalActions();
  const handleClickModalButton = () => {
    changeModalState("searchArchive");
  };

  return (
    <section className="fixed top-0 flex h-[140px] w-full items-start justify-between bg-archive bg-bottom bg-no-repeat px-6 pt-[80px] sm:max-w-[320px]">
      <PageTitle
        title={`${nickname}님의 매일의 기록`}
        fontColor="text-white"
        lineColor="bg-[#616161]"
      />

      <IconButton icon={<IconSearch className="text-white" />} onClick={handleClickModalButton} />
    </section>
  );
};

export default ArchiveHeader;
