import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import useSplash from "@/hooks/common/useSplash";

const Home = () => {
  useSplash();

  return (
    <Container className="flex items-center justify-center">
      <Logo />
    </Container>
  );
};

export default Home;
