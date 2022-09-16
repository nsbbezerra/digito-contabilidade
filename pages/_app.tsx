import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalContext from "../context/index";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <GlobalContext>
        <Component {...pageProps} />
      </GlobalContext>
    </ApolloProvider>
  );
}

export default MyApp;
