import { Fragment } from "react";
import Result from "../../components/search-result/result";
import Head from "next/head";
import { getSearchLink, getResultLink } from "../../components/general/Links";
import {
  CalcTemp,
  CalcMeterPerSecToKmPerHour,
} from "../../components/general/GeneralCalc";
import axios from "axios";
const searchResults = (props) => {
  const headDescCity = props.finalResult.locationName
    ? props.finalResult.locationName
    : props.searchResult[0].city;

  return (
    <Fragment>
      <Head>
        <title>{`Easy Weather - ${headDescCity} `}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`Find the weather conditions for every city around the world like ${headDescCity}.How is weather in ${headDescCity} now.`}
        />
      </Head>
      <Result
        searchResult={props.searchResult}
        finalResult={props.finalResult}
      />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  let searchResult = [];
  let finalResult = {};

  const searchedRes = await fetch(
    getSearchLink(params.search[0], process.env.api_key_token)
  );
  const searchedData = await searchedRes.json();
  // const { data } = await axios.get(
  //   getSearchLink(params.search[0], process.env.api_key_token)
  // );

  if (searchedData.length > 0) {
    searchResult = await searchedData.flatMap((city) => [
      {
        city: city.name,
        country: city.country,
        lat: city.lat,
        lon: city.lon,
        id: city.lat * city.lon * Math.random(),
        key: city.lat * city.lon,
      },
    ]);
  }

  if (searchResult.length === 0 && params.search[0] !== "userlocation") {
    return {
      notFound: true,
      redirect: { destination: "/404" },
    };
  }

  if (params.search.length > 1) {
    const finalResultRes = await fetch(
      getResultLink(
        params.search[1],
        params.search[2],
        process.env.api_key_token
      )
    );
    const data = await finalResultRes.json();
    // const { data } = await axios.get(
    //   getResultLink(
    //     params.search[1],
    //     params.search[2],
    //     process.env.api_key_token
    //   )
    // );

    finalResult = {
      locationName: data.name,
      base: data.base,
      humidity: data.main.humidity,
      temp: CalcTemp(data.main.temp, "k", "c"),
      tempMin: CalcTemp(data.main.temp_min, "k", "c"),
      tempMax: CalcTemp(data.main.temp_max, "k", "c"),
      windSpeed: CalcMeterPerSecToKmPerHour(data.wind.speed),
      windDeg: CalcTemp(data.wind.deg),
      weatherMain: data.weather[0].main,
      timeZone: data.timezone * 1000,
      lastUpdate: data.dt,
      countryCode: data.sys.country,
      condition: data.weather[0].main,
      conditionId: data.weather[0].id,
      conditionIcon: data.weather[0].icon,
      conditionDesc: data.weather[0].description,
      sunrise: data.sys.sunrise * 1000,
      sunset: data.sys.sunset * 1000,
    };
  }

  return { props: { searchResult, finalResult } };
}

export default searchResults;
