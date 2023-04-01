import { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

import Container from "@/components/common/Container";
import PageTitle from "@/components/common/PageTitle";

const Home = () => {
  const token = getCookie("token");
  const { push } = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        push("/main");
      } else {
        push("/login");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="flex items-center justify-center">
      <PageTitle title="하루 한줄" fontSize="text-headline1" />
    </Container>
  );
};

export default Home;
