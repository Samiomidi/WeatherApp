import { Fragment } from "react";
import Result from "../../components/search-result/result";
import Head from "next/head";
import {
  getSearchLink,
  getResultLink,
  getForecastLink,
} from "../../components/general/Links";
import {
  CalcTemp,
  CalcMeterPerSecToKmPerHour,
} from "../../components/general/GeneralCalc";

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
        forecastResult={props.forecastResult}
      />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  let searchResult = [];
  let finalResult = {};
  let forecastResult = [];

  const searchedRes = await fetch(
    getSearchLink(params.search[0], process.env.api_key_token)
  );
  const searchedData = await searchedRes.json();
  // const { data } = await axios.get(
  //   getSearchLink(params.search[0], process.env.api_key_token)
  // );

  if (searchedData.length > 0) {
    searchResult = searchedData.flatMap((city) => [
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
    const forecastResultRes = await fetch(
      getForecastLink(
        params.search[1],
        params.search[2],
        process.env.api_key_token
      )
    );
    const { list = [], city = [] } = await forecastResultRes.json();

    forecastResult = list.flatMap((day) => [
      {
        id: day.dt * Math.random() * day.main.temp,
        dt: day.dt,
        temp: CalcTemp(day.main.temp, "k", "c"),
        feelsLike: CalcTemp(day.main.feels_like, "k", "c"),
        tempMin: CalcTemp(day.main.temp_min, "k", "c"),
        tempMax: CalcTemp(day.main.temp_max, "k", "c"),
        pressure: day.main.pressure,
        seaLevel: day.main.sea_level,
        groundLevel: day.main.grnd_level,
        humidity: day.main.humidity,
        weatherId: day.weather[0].id,
        weatherMain: day.weather[0].main,
        weatherDescription: day.weather[0].description,
        weatherIcon: day.weather[0].icon,
        cloudsAll: day.clouds.all,
        windSpeed: CalcMeterPerSecToKmPerHour(day.wind.speed),
        windDeg: CalcTemp(day.wind.deg, "k", "c"),
        windGust: CalcMeterPerSecToKmPerHour(day.wind.gust),
        visiblity: day.visibility,
        pop: day.pop,
        sysPod: day.sys.pod,
        dtTxt: day.dt_txt,
        day: +day.dt_txt.split(" ")[0].split("-")[2],
      },
    ]);

    const finalResultRes = await fetch(
      getResultLink(
        params.search[1],
        params.search[2],
        process.env.api_key_token
      )
    );
    const finalData = await finalResultRes.json();
    // const { data } = await axios.get(
    //   getResultLink(
    //     params.search[1],
    //     params.search[2],
    //     process.env.api_key_token
    //   )
    // );

    finalResult = {
      locationName: finalData.name,
      base: finalData.base,
      humidity: finalData.main.humidity,
      temp: CalcTemp(finalData.main.temp, "k", "c"),
      tempMin: CalcTemp(finalData.main.temp_min, "k", "c"),
      tempMax: CalcTemp(finalData.main.temp_max, "k", "c"),
      tempK: finalData.main.temp,
      tempMinK: finalData.main.temp_min,
      tempMaxK: finalData.main.temp_max,
      windSpeed: CalcMeterPerSecToKmPerHour(finalData.wind.speed),
      windDeg: CalcTemp(finalData.wind.deg, "k", "c"),
      windDegK: finalData.wind.deg,
      windGust: CalcMeterPerSecToKmPerHour(finalData.wind.gust),
      weatherMain: finalData.weather[0].main,
      timeZone: finalData.timezone * 1000,
      lastUpdate: finalData.dt,
      countryCode: finalData.sys.country,
      condition: finalData.weather[0].main,
      conditionId: finalData.weather[0].id,
      conditionIcon: finalData.weather[0].icon,
      conditionDesc: finalData.weather[0].description,
      sunrise: finalData.sys.sunrise * 1000,
      sunset: finalData.sys.sunset * 1000,
    };
  }

  return { props: { searchResult, finalResult, forecastResult } };
}

export default searchResults;
