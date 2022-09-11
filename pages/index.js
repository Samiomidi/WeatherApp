import { Fragment } from "react";
import Head from "next/head";
import HomePage from "../components/homePage";
const Home = (props) => {
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
      <HomePage imageNum={props.imageNum} />
    </Fragment>
  );
};

export async function getServerSideProps() {
  const imageNum = Math.floor(Math.random() * 6 + 1);
  return { props: { imageNum } };
}
export default Home;
