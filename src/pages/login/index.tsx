import { GetServerSideProps } from "next";
import Image from "next/image";
import { getCookie } from "cookies-next";

import Container from "@/components/common/Container";
import PageTitle from "@/components/common/PageTitle";
import KakaoButton from "@/components/login/KakaoButton";

import LoginImage from "@/static/images/login.svg";
import LoginBackgroundImage from "@/static/images/login_background.svg";

const Login = () => {
  return (
    <>
      <Container className="relative flex flex-col justify-between px-6 py-[30px]">
        <div className="relative z-[2] flex flex-col items-start justify-start gap-[45px]">
          <PageTitle title="하루 한줄" />
          <div className="flex flex-col gap-1 text-headline1 font-medium">
            <div className="flex items-center">
              <PageTitle title="오늘의 한줄" fontSize="text-headline1" />
              <span>을</span>
            </div>
            <span>기록으로 남기는 서비스</span>
          </div>
        </div>

        <div className="relative z-[2] flex flex-col items-center">
          <Image priority src={LoginImage} alt="로그인" width={269} height={199} />
          <div className="mt-10 mb-5 flex flex-col items-center gap-1 text-body2 text-white">
            <span>하루에 읽은 책 중 마음에 드는 문장을 기록해서</span>
            <span>
              <span className="font-semibold">리츄얼을 형성</span>해보세요.
            </span>
          </div>
          <KakaoButton />
        </div>
      </Container>

      <Image
        className="fixed bottom-0 w-full min-w-[320px]"
        priority
        src={LoginBackgroundImage}
        alt="로그인 배경"
        height={358}
      />
    </>
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
