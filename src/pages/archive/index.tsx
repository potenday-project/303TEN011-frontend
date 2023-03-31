import SearchArchiveModal from "@/components/archive/SearchArchiveModal";
import ArchiveCard from "@/components/common/ArchiveCard";
import Container from "@/components/common/Container";
import InnerContainer from "@/components/common/InnerContainer";
import Nav from "@/components/common/Nav";
import PageTitle from "@/components/common/PageTitle";
import useGetArchive from "@/hooks/archive/useGetArchive";
import { IconSearch } from "@/static/icons";
import { useModalActions } from "@/store/useModalStore";
import Link from "next/link";

const Archive = () => {
  const { data } = useGetArchive();

  console.log(data);

  const { changeModalState } = useModalActions();
  const handleClickModalButton = () => {
    changeModalState("searchArchive");
  };

  return (
    <>
      <SearchArchiveModal />

      <Container bgColor="bg-main-900" className="flex items-end">
        <header className="fixed top-0 flex h-[90px] w-full items-center justify-between bg-main-900 px-6">
          <PageTitle
            title="김영진님의 매일의 기록"
            fontColor="text-white"
            lineColor="bg-[#616161]"
          />

          <button onClick={handleClickModalButton}>
            <IconSearch className="text-white" />
          </button>
        </header>

        <InnerContainer className="h-archiveInner px-6 pt-[35px] pb-[60px]">
          <div className="h-archiveContainer grid grid-cols-2 content-start gap-3 overflow-y-auto">
            {data?.map((item, idx) => (
              <Link href={`/archive/${item}`} key={idx}>
                <ArchiveCard item={item} />
              </Link>
            ))}
          </div>
        </InnerContainer>
      </Container>

      <Nav />
    </>
  );
};

export default Archive;
