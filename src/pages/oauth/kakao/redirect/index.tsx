import { useRouter } from "next/router";
import { useEffect } from "react";

import Container from "@/components/common/Container";
import PageTitle from "@/components/common/PageTitle";

import { kakaoLogin } from "@/apis/api";

const KakakRedirect = () => {
  const { replace, query } = useRouter();
  const code = query.code;

  useEffect(() => {
    if (!code) return;

    kakaoLogin(String(code)).then(() => replace("/main"));
  }, [code]);

  return (
    <Container className="flex items-center justify-center">
      <PageTitle title="하루 한줄" fontSize="text-headline1" />
    </Container>
  );
};

export default KakakRedirect;
