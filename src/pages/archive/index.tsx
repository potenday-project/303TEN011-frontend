import SearchArchiveModal from "@/components/archive/SearchArchiveModal";
import Container from "@/components/common/Container";
import InnerContainer from "@/components/common/InnerContainer";
import Nav from "@/components/common/Nav";
import PageTitle from "@/components/common/PageTitle";
import { IconSearch } from "@/static/icons";
import { useModalActions } from "@/store/useModalStore";

const Archive = () => {
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
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className={`${
                  item === 1 ? "aspect-[9/16]" : "aspect-square"
                } h-fit w-full rounded-[10px] bg-blue-200`}
              ></div>
            ))}
          </div>
        </InnerContainer>
      </Container>

      <Nav />
    </>
  );
};

export default Archive;
