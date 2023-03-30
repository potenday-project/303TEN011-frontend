import Container from "@/components/common/Container";
import InnerContainer from "@/components/common/InnerContainer";
import Nav from "@/components/common/Nav";
import PageTitle from "@/components/common/PageTitle";
import WriteButton from "@/components/main/WriteButton";
import { IconDrawer } from "@/static/icons";

const Main = () => {
  return (
    <>
      <Container bgColor="bg-main-900" className="pt-[240px]">
        <header className="fixed top-0 flex h-[50px] w-full items-center justify-between bg-main-900 px-6">
          <PageTitle
            title="하루 한줄"
            fontSize="text-lg"
            fontColor="text-white"
            lineColor="bg-[#616161]"
            lineWeight="h-[10px]"
          />

          <IconDrawer />
        </header>

        <InnerContainer className="h-mainInner mt-[50px] px-6 pt-7 pb-[60px]">
          <WriteButton />

          <PageTitle title="오늘의 한줄" className="mt-9" />
        </InnerContainer>
      </Container>

      <Nav />
    </>
  );
};

export default Main;
