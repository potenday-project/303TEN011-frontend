import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";

import MainHeader from "@/_main/components/MainHeader";
import MypageModal from "@/_main/components/MypageModal";
import RandomCardContainer from "@/_main/components/RandomCardContainer";
import WriteButton from "@/_main/elements/WriteButton";

import InnerLayout from "@/@shared/elements/InnerLayout";
import Layout from "@/@shared/elements/Layout";
import Nav from "@/@shared/elements/Nav";

interface MainProps {
  nickname: string;
}

const Main = ({ nickname }: MainProps) => {
  return (
    <>
      <MypageModal nickname={nickname} />

      <Layout bgColor="bg-main-900" className="flex items-end">
        <MainHeader />

        <InnerLayout className="h-main-inner-container flex flex-col gap-9 pb-[80px]">
          <WriteButton />
          <RandomCardContainer />
        </InnerLayout>
      </Layout>

      <Nav />
    </>
  );
};

export default Main;

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
    props: { nickname },
  };
};
