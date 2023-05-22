import localFont from "next/font/local";

export const bebas = localFont({
  src: "../static/fonts/BebasNeue.woff",
  variable: "--font-bebas",
});

export const scdream = localFont({
  src: "../static/fonts/SCDream.woff",
  variable: "--font-scdream",
});

export const bookk = localFont({
  src: "../static/fonts/Bookk.woff",
  variable: "--font-bookk",
});

export const jsongmyung = localFont({
  src: "../static/fonts/JSongMyung.woff",
  variable: "--font-jsongmyung",
});

export const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Regular.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff",
      weight: "500",
    },
    {
      path: "../../public/fonts/Pretendard-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.woff",
      weight: "700",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraBold.woff",
      weight: "800",
    },
  ],
  variable: "--font-pretendard",
});
