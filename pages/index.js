import { Fragment } from "react";
import Head from "next/head";

import HomePage from "../components/homePage";
const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Easy Weather</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Find the current weather data for every place you need!"
        />
      </Head>
      <HomePage />
    </Fragment>
  );
};

export default Home;
