import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/layout/layout";
import CoordContextProvider from "../store/CoordContextProvider";
import "../styles/globals.css";
import Loading from "../components/ui/Loading";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
  });
  return (
    <CoordContextProvider>
      <Layout>
        <Head>
          <title>{`Easy Weather | ${router.pathname.split("/")[1]} `}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Find the current weather data for every place you need!"
          />
        </Head>
        <NextNProgress height={3} color="#fff" />
        {isLoading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </CoordContextProvider>
  );
}

export default MyApp;
