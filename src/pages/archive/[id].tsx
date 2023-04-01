import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";

import BasicButton from "@/components/common/BasicButton";
import BasicCard from "@/components/common/BasicCard";
import BasicCardBookInfo from "@/components/common/BasicCardBookInfo";
import BasicCardContent from "@/components/common/BasicCardContent";
import Container from "@/components/common/Container";
import InnerContainer from "@/components/common/InnerContainer";
import InnerContainerHeader from "@/components/common/InnerContainerHeader";
import useDeleteDetail from "@/hooks/archive/useDeleteDetail";

import useGetDetail from "@/hooks/archive/useGetDetail";
import { IconQuote } from "@/static/icons";
import { useWriteActions } from "@/store/useWriteStore";
import { useRouter } from "next/router";

const Detail = () => {
  const { push } = useRouter();
  const { editData } = useWriteActions();

  const { data } = useGetDetail();
  const { mutate } = useDeleteDetail();

  const handleClickEdit = () => {
    if (data) {
      editData(data);
      push("/write");
    }
  };

  const handleClickDelete = () => {
    mutate();
  };

  return (
    <Container bgColor="bg-main-900" className="flex items-end">
      <InnerContainer className="h-inner-container">
        <InnerContainerHeader title="나의 한줄" />

        <div className="h-detail-inner-container flex flex-col items-stretch justify-between gap-3 px-6 pb-6">
          {data && (
            <BasicCard
              backgroundColor={data.backgroundColor}
              imageSize={data.imageSize}
              fontColor={data.fontColor}
            >
              <IconQuote className="w-[3.2vw]" />
              <BasicCardContent
                fontColor={data.fontColor}
                fontStyle={data.fontStyle}
                content={data.content}
              />
              <BasicCardBookInfo
                fontColor={data.fontColor}
                bookTitle={data.title}
                bookAuthors={data.author}
              />
            </BasicCard>
          )}

          <div className="flex w-full gap-3">
            <BasicButton text="수정하기" className="text-black" onClick={handleClickEdit} />
            <BasicButton text="삭제하기" className="text-[#FF5171]" onClick={handleClickDelete} />
          </div>
        </div>
      </InnerContainer>
    </Container>
  );
};

export default Detail;

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
