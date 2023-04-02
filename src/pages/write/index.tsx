import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

import SearchBookModal from "@/components/write/SearchBookModal";
import Container from "@/components/common/Container";
import InnerContainer from "@/components/common/InnerContainer";
import InnerContainerHeader from "@/components/common/InnerContainerHeader";
import SelectBookContainer from "@/components/write/SelectBookContainer";
import CardContainer from "@/components/write/CardContainer";
import CardDecoContainer from "@/components/write/CardDecoContainer";
import BottomButton from "@/components/common/BottomButton";

import usePostCard from "@/hooks/write/usePostCard";
import useEditCard from "@/hooks/archive/useEditCard";
import { useEditState, useWriteActions } from "@/store/useWriteStore";

const Write = () => {
  const { back } = useRouter();
  const { clearData } = useWriteActions();

  const { editMode } = useEditState();
  const { mutate: editMutate } = useEditCard();
  const { mutate } = usePostCard();
  const handleClickWrite = () => {
    if (editMode) {
      editMutate();
    } else {
      mutate();
    }
  };

  const handleClickClose = () => {
    clearData();
    back();
  };

  return (
    <>
      <SearchBookModal />

      <Container bgColor="bg-main-900" className="flex items-end">
        <InnerContainer className="h-inner-container pb-[60px]">
          <InnerContainerHeader title="오늘의 한줄" func={handleClickClose} />
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("token", { req, res });

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
