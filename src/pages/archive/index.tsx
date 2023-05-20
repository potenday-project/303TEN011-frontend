import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";

import SearchArchiveModal from "@/components/archive/SearchArchiveModal";
import Container from "@/components/common/Container";
import PageTitle from "@/components/common/PageTitle";
import InnerContainer from "@/components/common/InnerContainer";
import ArchiveContainer from "@/components/archive/ArchiveContainer";
import Nav from "@/components/common/Nav";

import { IconSearch } from "@/static/icons";
import { useModalActions } from "@/store/useModalStore";

interface Props {
  nickname: string;
}

const Archive = ({ nickname }: Props) => {
  const { changeModalState } = useModalActions();
  const handleClickModalButton = () => {
    changeModalState("searchArchive");
  };

  return (
    <>
      <SearchArchiveModal />

      <Container bgColor="bg-main-900" className="flex items-end">
        <header className="fixed top-0 flex h-[130px] w-full items-center justify-between bg-main-900 px-6 sm:max-w-[320px]">
          <PageTitle
            title={`${nickname}님의 매일의 기록`}
            fontColor="text-white"
            lineColor="bg-[#616161]"
          />

          <button onClick={handleClickModalButton} className="text-white">
            <IconSearch />
          </button>
        </header>

        <InnerContainer className="h-archive-inner-container px-6 pt-[35px] pb-[60px]">
          <ArchiveContainer />
        </InnerContainer>
      </Container>

      <Nav />
    </>
  );
};

export default Archive;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("token", { req, res });
  const nickname = getCookie("nickname", { req, res });

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      nickname,
    },
  };
};
