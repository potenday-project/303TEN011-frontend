import "@/styles/globals.css";
import type { AppProps } from "next/app";

if (typeof window === "undefined") {
  (async () => {
    const { server } = await import("@/mocks/server");
    server.listen();
  })();
} else {
  (async () => {
    const { worker } = await import("@/mocks/browser");
    worker.start();
  })();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
