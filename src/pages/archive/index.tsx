import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";

import ArchiveContainer from "@/_archive/components/ArchiveContainer";
import ArchiveHeader from "@/_archive/components/ArchiveHeader";
import DatePickerModal from "@/_archive/components/DatePickerModal";
import DateSearchButton from "@/_archive/components/DateSearchButton";
import SearchArchiveDrawer from "@/_archive/components/SearchArchiveDrawer";

import InnerLayout from "@/@shared/elements/InnerLayout";
import Layout from "@/@shared/elements/Layout";
import Nav from "@/@shared/elements/Nav";

interface Props {
  nickname: string;
}

const Archive = ({ nickname }: Props) => {
  return (
    <>
      <DatePickerModal />
      <SearchArchiveDrawer />

      <Layout bgColor="bg-main-900" className="flex items-end">
        <ArchiveHeader nickname={nickname} />

        <InnerLayout className="h-archive-inner-container">
          <InnerLayout.Header>
            <DateSearchButton />
          </InnerLayout.Header>

          <ArchiveContainer />
        </InnerLayout>
      </Layout>

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
