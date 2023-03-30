import { useRouter } from "next/router";

import SearchBookModal from "@/components/write/SearchBookModal";
import Container from "@/components/common/Container";
import InnerContainer from "@/components/common/InnerContainer";
import PageTitle from "@/components/common/PageTitle";
import TextButton from "@/components/common/TextButton";
import SelectBook from "@/components/write/SelectBook";
import CardDecoTabBox from "@/components/write/CardDecoTabBox";
import BottomButton from "@/components/common/BottomButton";

import { useWriteActions } from "@/store/useWriteStore";
import CardImage from "@/components/write/CardImage";

const Write = () => {
  const { push } = useRouter();

  const handleClickWrite = () => {
    console.log("handleClickWrite");
  };

  const { clearData } = useWriteActions();
  const handleClickClose = () => {
    push("/main").then(() => clearData());
  };

  return (
    <>
      <SearchBookModal />

      <Container bgColor="bg-main-900" className="flex items-end">
        <InnerContainer className="h-inner">
          <header className="flex h-[70px] items-center justify-between rounded-t-[20px] bg-main-100 px-6">
            <PageTitle title="오늘의 한줄" />
            <TextButton text="닫기" onClick={handleClickClose} />
          </header>

          <div className="pb-[60px]">
            <SelectBook />

            <CardImage />

            <CardDecoTabBox />
          </div>
        </InnerContainer>
      </Container>

      <BottomButton text="완료" onClick={handleClickWrite} />
    </>
  );
};

export default Write;
