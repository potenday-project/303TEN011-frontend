import SearchBookModal from "@/components/write/SearchBookModal";
import Container from "@/components/common/Container";
import InnerContainer from "@/components/common/InnerContainer";
import InnerContainerHeader from "@/components/common/InnerContainerHeader";
import SelectBookContainer from "@/components/write/SelectBookContainer";
import CardContainer from "@/components/write/CardContainer";
import CardDecoContainer from "@/components/write/CardDecoContainer";
import BottomButton from "@/components/common/BottomButton";

import usePostCard from "@/hooks/write/usePostCard";
import { useWriteActions } from "@/store/useWriteStore";

const Write = () => {
  const { clearData } = useWriteActions();

  const { mutate } = usePostCard();
  const handleClickWrite = () => {
    mutate();
  };

  return (
    <>
      <SearchBookModal />

      <Container bgColor="bg-main-900" className="flex items-end">
        <InnerContainer className="h-inner-container pb-[60px]">
          <InnerContainerHeader title="오늘의 한줄" func={clearData} />
          <SelectBookContainer />
          <CardContainer />
          <CardDecoContainer />
        </InnerContainer>
      </Container>

      <BottomButton text="완료" onClick={handleClickWrite} />
    </>
  );
};

export default Write;
