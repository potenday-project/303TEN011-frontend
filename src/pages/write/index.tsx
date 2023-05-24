import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

import CardContainer from "@/_write/components/CardContainer";
import CardDecoContainer from "@/_write/components/CardDecoContainer";
import SearchBookDrawer from "@/_write/components/SearchBookDrawer";
import SelectBookContainer from "@/_write/components/SelectBookContainer";
import useEditCard from "@/_write/queries/useEditCard";
import usePostCard from "@/_write/queries/usePostCard";

import BottomButton from "@/@shared/elements/BottomButton";
import InnerLayout from "@/@shared/elements/InnerLayout";
import IconButton from "@/@shared/elements/IconButton";
import Layout from "@/@shared/elements/Layout";
import PageTitle from "@/@shared/elements/PageTitle";
import TextButton from "@/@shared/elements/TextButton";
import { useEditState, useWriteActions } from "@/store/useWriteStore";
import { IconInfomation } from "@/static/icons";
import { useModalActions, useWriteInfoModalState } from "@/store/useModalStore";

const Write = () => {
  const { back } = useRouter();

  const { editMode } = useEditState();
  const { mutate: editMutate } = useEditCard();
  const { mutate: postMutate } = usePostCard();
  const handleClickWrite = () => {
    if (editMode) {
      editMutate();
    } else {
      postMutate();
    }
  };

  const { clearData } = useWriteActions();
  const handleClickClose = () => {
    clearData();
    back();
  };

  const isOpen = useWriteInfoModalState();
  const { changeModalState } = useModalActions();
  const handleClickInfo = () => {
    changeModalState("writeInfo");
  };

  return (
    <>
      <SearchBookDrawer />

      <Layout bgColor="bg-main-900" className="flex items-end">
        <InnerLayout className="h-inner-container pb-[80px]">
          <InnerLayout.Header>
            <div className="flex">
              <PageTitle title="오늘의 한줄" />
              <IconButton icon={<IconInfomation />} onClick={handleClickInfo} />
            </div>
            <TextButton onClick={handleClickClose} />
          </InnerLayout.Header>

          <SelectBookContainer />
          <CardContainer />
          <CardDecoContainer />
        </InnerLayout>
      </Layout>

      <BottomButton visible={!isOpen} onClick={handleClickWrite} />
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
