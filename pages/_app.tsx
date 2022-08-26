import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalContext from "../context/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  );
}

export default MyApp;
