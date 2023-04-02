import "@/styles/height.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { pretendard } from "@/util/fonts";
import Head from "next/head";

// if (typeof window === "undefined") {
//   (async () => {
//     const { server } = await import("@/mocks/server");
//     server.listen();
//   })();
// } else {
//   (async () => {
//     const { worker } = await import("@/mocks/browser");
//     worker.start();
//   })();
// }

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>하루 한 줄, 오늘의 한줄을 남겨보세요.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width ,user-scalable=no" />
        <meta property="og:title" content="하루 한 줄" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://one-line-a-day-kappa.vercel.app/" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <main className={`${pretendard.variable} font-pretendard`}>
          <Component {...pageProps} />
        </main>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}
