import { useRef } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

import useGetDetail from "@/_archive/queries/useGetDetail";
import useDeleteDetail from "@/_archive/queries/useDeleteDetail";

import BasicButton from "@/@shared/elements/BasicButton";
import FullCard from "@/@shared/elements/FullCard";
import InnerLayout from "@/@shared/elements/InnerLayout";
import Layout from "@/@shared/elements/Layout";
import PageTitle from "@/@shared/elements/PageTitle";
import TextButton from "@/@shared/elements/TextButton";
import { timeFormat } from "@/@shared/utils/time";
import { IconDownload } from "@/static/icons";
import { useWriteActions } from "@/store/useWriteStore";

const Detail = () => {
  const { push, back, reload } = useRouter();
  const handleClickClose = () => {
    back();
  };

  const { data: detailData } = useGetDetail();
  const { editData } = useWriteActions();
  const handleClickEdit = () => {
    if (detailData) {
      editData(detailData);
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
    if (card && detailData) {
      toPng(card, {
        canvasWidth: 1080,
        canvasHeight: detailData.imageSize === "aspect-square" ? 1080 : 1920,
      })
        .then((image) => {
          saveAs(image, "card.png");
        })
        .then(() => reload());
    }
  };

  return (
    <Layout bgColor="bg-main-900" className="flex items-end">
      <InnerLayout className="h-inner-container pb-6">
        <InnerLayout.Header>
          <PageTitle title="나의 한줄" />
          <TextButton onClick={handleClickClose} />
        </InnerLayout.Header>

        <div className="flex min-h-[calc(100dvh-148px)] flex-col justify-between gap-3">
          {detailData && (
            <div>
              <FullCard {...detailData} ref={cardRef} />
              <span className="flex w-full justify-end pt-1 pr-1 text-body2 font-medium text-[#b0b0b0]">
                {timeFormat(detailData.createdDt)}
              </span>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <button
              onClick={handleClickDownload}
              className="flex h-6 w-fit items-center justify-start gap-2 font-bold"
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
      </InnerLayout>
    </Layout>
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
