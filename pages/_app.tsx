import { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/api";
import "../styles/globals.css";
import Layout from "../components/Layout";
import StateProvider from "../context/StateProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <StateProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
