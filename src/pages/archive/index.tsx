import Link from "next/link";

import SearchArchiveModal from "@/components/archive/SearchArchiveModal";
import Container from "@/components/common/Container";
import PageTitle from "@/components/common/PageTitle";
import InnerContainer from "@/components/common/InnerContainer";
import BasicCard from "@/components/common/BasicCard";
import Nav from "@/components/common/Nav";

import useGetArchive from "@/hooks/archive/useGetArchive";
import { IconQuote, IconSearch } from "@/static/icons";
import { useModalActions } from "@/store/useModalStore";
import BasicCardContent from "@/components/common/BasicCardContent";
import BasicCardBookInfo from "@/components/common/BasicCardBookInfo";

const Archive = () => {
  const { data } = useGetArchive();

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

          <button onClick={handleClickModalButton} className="text-white">
            <IconSearch />
          </button>
        </header>

        <InnerContainer className="h-archive-inner-container px-6 pt-[35px] pb-[60px]">
          <div className="h-archive-result-container grid grid-cols-2 content-start gap-3 overflow-y-auto">
            {data?.map((item, idx) => (
              <Link href={`/archive/1`} key={idx}>
                <BasicCard
                  backgroundColor={item.backgroundColor}
                  imageSize={item.imageSize}
                  fontColor={item.fontColor}
                >
                  <IconQuote className="w-[3.2vw]" />
                  <BasicCardContent
                    fontColor={item.fontColor}
                    fontStyle={item.fontStyle}
                    content={item.content}
                  />
                  <BasicCardBookInfo
                    fontColor={item.fontColor}
                    bookTitle={item.title}
                    bookAuthors={item.author}
                  />
                </BasicCard>
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
