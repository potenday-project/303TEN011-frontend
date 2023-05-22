import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";

import KakaoButton from "@/_login/elements/KakaoButton";

import Layout from "@/@shared/elements/Layout";
import Logo from "@/@shared/elements/Logo";

const Login = () => {
  return (
    <Layout className="flex flex-col justify-between bg-login bg-bottom bg-no-repeat px-6 py-[30px]">
      <Logo width={87} />

      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-1 text-body2 text-white">
          <span>하루에 읽은 책 중 마음에 드는 문장을 기록해서</span>
          <span>
            <span className="font-semibold">리츄얼</span>을 형성해보세요.
          </span>
        </div>

        <KakaoButton />
      </div>
    </Layout>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getCookie("token", { req, res });

  if (token) {
    return {
      redirect: {
        destination: "/main",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
