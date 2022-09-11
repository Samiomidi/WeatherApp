import React, { useState } from "react";
import Chart from "../../Chart/chart";
import GantChart from "../../Chart/gantChart";
import { HiOutlineSelector } from "react-icons/hi";
import { BsDroplet } from "react-icons/bs";
import classes from "./forecastResult.module.css";
import { iconLink } from "../../general/Links";
import Tab from "../../customHooks/Tabs/tabs";
function forecastResult(props) {
  const { forecastResult } = props;
  console.log("forecastResult.js");
  let resultPerDay = [];
  let resultPer3HourPerDay = [];
  let uniqueDaysDateArr = [];
  const selectDayHandler = () => {
    const daysDateArr = forecastResult.flatMap((day) => [day.day]);
    uniqueDaysDateArr = [...new Set(daysDateArr)];
    uniqueDaysDateArr.forEach((uniqueDay) => {
      resultPer3HourPerDay.push(
        forecastResult.filter((day) => day.day === uniqueDay)
      );
    });

    resultPer3HourPerDay.forEach((day) => {
      resultPerDay.push({
        id: [day.reduce((acc, cur) => acc + cur.id, 0) / day.length, "id"],
        Temperature: {
          average: +(
            day.reduce((acc, cur) => acc + cur.temp, 0) / day.length
          ).toFixed(0),
          min: +Math.min(...day.map((data) => data.temp)).toFixed(0),
          max: +Math.max(...day.map((data) => data.temp)).toFixed(0),
          unit: "degree",
        },
        "Real Feels like": {
          average: +(
            day.reduce((acc, cur) => acc + cur.feelsLike, 0) / day.length
          ).toFixed(0),
          min: +Math.min(...day.map((data) => data.feelsLike)).toFixed(0),
          max: +Math.max(...day.map((data) => data.feelsLike)).toFixed(0),
          unit: "degree",
        },
        Humidity: {
          min: +Math.min(...day.map((data) => data.humidity)).toFixed(0),
          max: +Math.max(...day.map((data) => data.humidity)).toFixed(0),
          unit: "percent",
        },
        "Wind Speed": {
          min: +Math.min(...day.map((data) => data.windSpeed)).toFixed(0),
          max: +Math.max(...day.map((data) => data.windSpeed)).toFixed(0),
          unit: "speed",
        },

        "Wind Gust": {
          min: +Math.min(...day.map((data) => data.windGust)).toFixed(0),
          max: +Math.max(...day.map((data) => data.windGust)).toFixed(0),
          unit: "speed",
        },

        Precipitation: {
          min: +(
            (day.reduce((acc, cur) => acc + cur.pop, 0) / day.length) *
            100
          ).toFixed(0),
          max: +(Math.max(...day.map((data) => data.pop)) * 100).toFixed(0),
          unit: "percent",
        },

        day: new Date(day.map((day) => day.dt)[0] * 1000 - 1000),
      });
    });
  };
  selectDayHandler();

  const dateArr = resultPerDay.map((days) => {
    const dates = days.day.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      weekday: "long",
    });
    return dates;
  });

  const [chartName, setChartName] = useState("Temperature");
  const [day, setDay] = useState(dateArr[0]);
  const comulativeDropdownChangeHandler = (selected) => {
    setChartName(selected.target.value);
  };
  const perDayDropdownChangeHandler = (selected) => {
    setDay(selected.target.value);
  };

  const chartDataPoints = [];

  resultPerDay.forEach((day, index) => {
    const lables = +day.day.toLocaleDateString("en-US", { day: "2-digit" });
    const weekDay = day.day.toLocaleDateString("en-US", {
      weekday: "short",
    });
    chartDataPoints.push({
      weekday: weekDay,
      id: Math.random() * 10000000000,
      lable: lables + "",
      max: resultPerDay[index][chartName]?.max,
      min: resultPerDay[index][chartName]?.min,
      unit: resultPerDay[index][chartName]?.unit,
    });
  });
  const setUnit = (data) => {
    switch (data.unit) {
      case "percent":
        return "%";
      case "speed":
        return "Km/h";
      case "degree":
        return "C°";
      default:
        return "C°";
    }
  };
  const Tab1 = () => {
    return (
      <div className={classes["tab-content"]}>
        <div className={`${classes.dropdown}`}>
          <select
            className={`${classes.select}`}
            value={chartName}
            onChange={comulativeDropdownChangeHandler}
          >
            {Object.keys(resultPerDay[0])
              .map((item) => {
                return (
                  <option value={item} key={item} className={classes.option}>
                    {item}
                  </option>
                );
              })
              .slice(1, -1)}
          </select>
          <HiOutlineSelector className={classes["dropdown-icon"]} />
        </div>
        <Chart
          dataPoints={chartDataPoints}
          chartName={chartName}
          unit={setUnit(chartDataPoints[1])}
        />
      </div>
    );
  };
  const Tab2 = () => {
    return (
      <div className={classes["tab-content"]}>
        <div className={`${classes.dropdown}`}>
          <select
            className={`${classes.select}`}
            value={day}
            onChange={perDayDropdownChangeHandler}
          >
            {resultPerDay.map((data) => {
              const day = data.day.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                weekday: "long",
              });
              return (
                <option value={day} key={day} className={classes.option}>
                  {day}
                </option>
              );
            })}
          </select>
          <HiOutlineSelector className={classes["dropdown-icon"]} />
        </div>
        {resultPerDay
          .filter(
            (data) =>
              day ===
              data.day.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                weekday: "long",
              })
          )
          .map((data) => {
            const min = Object.entries(data);
            const day = data.day.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              weekday: "long",
            });
            return (
              <div key={data.id} className={`card ${classes["card"]}`}>
                <div>
                  <h6>{day}</h6>
                  <h1>{`${data.Temperature.average}°`}</h1>
                  <div className={classes.flex}>
                    <BsDroplet className={classes["drop-icon"]} />
                    <h6>{`Precipitation: ${
                      data["Precipitation"].max === 1
                        ? data["Precipitation"].max - 0.01
                        : data["Precipitation"].max
                    }% `}</h6>
                  </div>
                </div>
                <ul style={{ width: "100%" }}>
                  <li key={data[0]}>
                    {min
                      .map((data) => {
                        return (
                          <div className={classes.gant} key={data[0]}>
                            <GantChart
                              max={data[1].max}
                              min={data[1].min}
                              maxValue={30}
                              minValue={10}
                            />
                            <div className={classes["gant-lable"]}>{`${
                              data[0]
                            } (${setUnit(data[1])}): `}</div>
                          </div>
                        );
                      })
                      .slice(1, -1)}
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    );
  };
  const Tab3 = () => {
    return (
      <div className={classes["tab-content"]}>
        <div className={`${classes.dropdown}`}>
          <select
            className={`${classes.select}`}
            value={day}
            onChange={perDayDropdownChangeHandler}
          >
            {resultPerDay.map((data) => {
              const day = data.day.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                weekday: "long",
              });
              return (
                <option value={day} key={day} className={classes.option}>
                  {day}
                </option>
              );
            })}
          </select>
          <HiOutlineSelector className={classes["dropdown-icon"]} />
        </div>
        <div>
          {resultPer3HourPerDay[dateArr.indexOf(day)].map((hour) => {
            return (
              <div key={hour.id} className={`card ${classes["card"]}`}>
                <div>
                  <div className={classes.tag}>
                    {`${new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
                      hour: "numeric",
                    })}`}
                  </div>
                  <div>
                    <img
                      src={iconLink(hour.weatherIcon)}
                      alt={hour.weatherDescription}
                      className={classes["condition-icon"]}
                    ></img>
                    <div className={classes.flex}>
                      <h1>{`${hour.temp}°`}</h1>
                      <h5>{` (${hour.weatherDescription})`}</h5>
                    </div>
                  </div>

                  <div className={classes.flex}>
                    <BsDroplet className={classes["drop-icon"]} />
                    <h6>{`Precipitation: ${
                      hour.pop === 1 ? hour.pop - 0.01 : hour.pop
                    }% `}</h6>
                  </div>
                </div>
                <ul style={{ width: "100%" }} className={classes.list}>
                  <li>
                    <span>Real Feel Like:</span>
                    <span>{`${hour.feelsLike}°`}</span>
                  </li>
                  <li>
                    <span>Humidity:</span>
                    <span>{`${hour.humidity}%`}</span>
                  </li>
                  <li>
                    <span>Min Temp:</span>
                    <span>{`${hour.tempMin}°`}</span>
                  </li>
                  <li>
                    <span>Max Temp:</span>
                    <span>{`${hour.tempMax}°`}</span>
                  </li>
                  <li>
                    <span>Pressure:</span>
                    <span>{`${hour.pressure} hPa`}</span>
                  </li>
                  <li>
                    <span>Wind Gust:</span>
                    <span>{`${hour.windGust} Km/h`}</span>
                  </li>
                  <li>
                    <span>Wind Speed:</span>
                    <span>{`${hour.windSpeed} Km/h`}</span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <Tab
      tabs={[{ Weekly: Tab1() }, { Daily: Tab2() }, { Hourly: Tab3() }]}
      activeDefault={null}
      className={`${props.className}`}
    />
  );
}

export default forecastResult;
