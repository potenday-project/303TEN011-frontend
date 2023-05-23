import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "@/@shared/elements/Layout";
import Logo from "@/@shared/elements/Logo";
import { kakaoLogin } from "@/@shared/utils/api";

const KakakRedirect = () => {
  const { replace, query } = useRouter();
  const code = query.code;

  useEffect(() => {
    if (!code) return;

    kakaoLogin(String(code)).then(() => replace("/main"));
  }, [code]);

  return (
    <Layout className="flex items-center justify-center bg-landing bg-center bg-no-repeat">
      <Logo className="mb-[60px]" />
    </Layout>
  );
};

export default KakakRedirect;
