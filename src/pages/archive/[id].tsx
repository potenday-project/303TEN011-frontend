import { useRef } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

import BasicButton from "@/components/common/BasicButton";
import BasicCard from "@/components/common/BasicCard";
import BasicCardBookInfo from "@/components/common/BasicCardBookInfo";
import BasicCardContent from "@/components/common/BasicCardContent";
import Container from "@/components/common/Container";
import InnerContainer from "@/components/common/InnerContainer";
import InnerContainerHeader from "@/components/common/InnerContainerHeader";
import useDeleteDetail from "@/hooks/archive/useDeleteDetail";

import useGetDetail from "@/hooks/archive/useGetDetail";
import { IconDownload, IconQuote } from "@/static/icons";
import { useWriteActions } from "@/store/useWriteStore";

const Detail = () => {
  const { push } = useRouter();

  const { data } = useGetDetail();
  const { editData } = useWriteActions();
  const handleClickEdit = () => {
    if (data) {
      editData(data);
      push("/write");
    }
  };

  const { mutate } = useDeleteDetail();
  const handleClickDelete = () => {
    mutate();
  };

  const cardRef = useRef<HTMLDivElement>(null);
  const handleClickDownload = () => {
    const card = cardRef.current;
    if (card && data) {
      toPng(card, {
        canvasWidth: 540,
        canvasHeight: data.imageSize === "aspect-square" ? 540 : 960,
      }).then((image) => {
        saveAs(image, "card.png");
      });
    }
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
              ref={cardRef}
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

          <div className="flex flex-col gap-2">
            <button
              onClick={handleClickDownload}
              className="flex h-6 items-center justify-start gap-2 font-bold"
            >
              <IconDownload />
              <span>이미지 다운로드</span>
            </button>

            <div className="flex w-full gap-3">
              <BasicButton text="수정하기" className="text-black" onClick={handleClickEdit} />
              <BasicButton text="삭제하기" className="text-[#FF5171]" onClick={handleClickDelete} />
            </div>
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
