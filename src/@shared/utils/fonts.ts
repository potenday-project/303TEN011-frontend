import localFont from "next/font/local";

export const bebas = localFont({
  src: "../../../public/fonts/BebasNeue.woff",
  variable: "--font-bebas",
});

export const scdream = localFont({
  src: "../../../public/fonts/SCDream.woff",
  variable: "--font-scdream",
});

export const bookk = localFont({
  src: "../../../public/fonts/Bookk.woff",
  variable: "--font-bookk",
});

export const jsongmyung = localFont({
  src: "../../../public/fonts/JSongMyung.woff",
  variable: "--font-jsongmyung",
});

export const pretendard = localFont({
  src: [
    {
      path: "../../../public/fonts/Pretendard-Regular.woff",
      weight: "400",
    },
    {
      path: "../../../public/fonts/Pretendard-Medium.woff",
      weight: "500",
    },
    {
      path: "../../../public/fonts/Pretendard-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../../../public/fonts/Pretendard-Bold.woff",
      weight: "700",
    },
    {
      path: "../../../public/fonts/Pretendard-ExtraBold.woff",
      weight: "800",
    },
  ],
  variable: "--font-pretendard",
});
