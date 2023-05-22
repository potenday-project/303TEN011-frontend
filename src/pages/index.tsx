import Layout from "@/@shared/elements/Layout";
import Logo from "@/@shared/elements/Logo";
import useLanding from "@/@shared/hooks/useLanding";

const Landing = () => {
  useLanding();

  return (
    <Layout className="flex items-center justify-center">
      <Logo />
    </Layout>
  );
};

export default Landing;
