import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
