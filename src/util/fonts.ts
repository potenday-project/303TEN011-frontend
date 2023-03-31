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
      path: "../static/fonts/Pretendard-Regular.woff",
      weight: "400",
    },
    {
      path: "../static/fonts/Pretendard-Medium.woff",
      weight: "500",
    },
    {
      path: "../static/fonts/Pretendard-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../static/fonts/Pretendard-Bold.woff",
      weight: "700",
    },
    {
      path: "../static/fonts/Pretendard-ExtraBold.woff",
      weight: "800",
    },
  ],
  variable: "--font-pretendard",
});
