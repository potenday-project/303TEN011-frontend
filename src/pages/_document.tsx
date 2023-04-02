import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>하루 한 줄, 오늘의 한줄을 남겨보세요.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width ,user-scalable=no" />
        <meta property="og:title" content="하루 한 줄" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://one-line-a-day-kappa.vercel.app/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
