import Container from "@/components/common/Container";
import InnerContainer from "@/components/common/InnerContainer";
import PageTitle from "@/components/common/PageTitle";
import TextButton from "@/components/common/TextButton";
import { useRouter } from "next/router";

const Detail = () => {
  const { back } = useRouter();

  const handleClickClose = () => {
    back();
  };

  return (
    <Container bgColor="bg-main-900" className="flex items-end">
      <InnerContainer className="h-inner mt-[50px]">
        <header className="flex h-[70px] items-center justify-between px-6">
          <PageTitle title="나의 한줄" />
          <TextButton text="닫기" onClick={handleClickClose} />
        </header>

        <div className="bg-red-200 px-6">dd</div>
      </InnerContainer>
    </Container>
  );
};

export default Detail;
