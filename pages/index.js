import { Fragment, useContext } from "react";
import Head from "next/head";
import CoordContext from "../store/coord-context";

const HomePage = () => {
  const ctx = useContext(CoordContext);

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
      {ctx.error && (
        <div className="card">
          <h1>{ctx.errorMessage}</h1>
        </div>
      )}
    </Fragment>
  );
};

export default HomePage;
