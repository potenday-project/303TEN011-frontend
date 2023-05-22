const KakaoButton = () => {
  return (
    <a
      href={process.env.NEXT_PUBLIC_KAKAO_AUTH_URL}
      className="flex h-[60px] w-full items-center justify-center rounded-[10px] bg-[#fee500] font-bold"
    >
      카카오로 로그인하기
    </a>
  );
};

export default KakaoButton;
