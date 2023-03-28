import Container from "@/components/common/Container";
import Nav from "@/components/common/Nav";
import PageTitle from "@/components/common/PageTitle";
import { IconSearch } from "@/static/icons";

const Main = () => {
  return (
    <>
      <Container bgColor="bg-main-900">
        <header className="grid grid-cols-[auto_24px] px-6">
          <PageTitle
            title="하루 한줄"
            fontSize="text-lg"
            fontColor="text-white"
            lineColor="bg-[#616161]"
            lineWeight="h-[10px]"
          />

          <IconSearch />
        </header>
      </Container>

      <Nav />
    </>
  );
};

export default Main;
