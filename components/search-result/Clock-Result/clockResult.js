import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
import { iconLink } from "../../general/Links";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import classes from "./clockResult.module.css";
import LittleIconMainCondition from "./Clock/littleIconMainCondition";
import Clock from "./Clock/Clock";
import { DummyBackground } from "../../general/Dummy-Background";
import Canvas from "../../ui/Canvases/Canvas";
import { useEffect, useState, useContext } from "react";
import CoordContext from "../../../store/coord-context";
const ClockResult = (props) => {
  const { finalResult } = props;
  const ctx = useContext(CoordContext);
  const [targetCondition, setTargetCondition] = useState(null);
  const [filterCondition] = DummyBackground.filter(
    (cond) => cond.code === finalResult.conditionIcon
  );

  const themeChangeHandler = () => {
    const dayOrNight =
      targetCondition?.code?.[targetCondition.code.length - 1] + "";
    if (dayOrNight === "n") {
      ctx.onSetTheme("night");
    } else {
      ctx.onSetTheme("day");
    }
  };

  useEffect(() => {
    themeChangeHandler();
    setTargetCondition(filterCondition);
  }, [finalResult.timeZone, filterCondition, targetCondition]);
  return (
    <div
      className={`${classes.clock} ${finalResult.className}
        ${ctx.theme === "night" ? classes.night : classes.day}
      `}
    >
      {targetCondition && (
        <Canvas
          width={1000}
          height={1000}
          speed={targetCondition.conditionProps.speed}
          flakescount={targetCondition.conditionProps.flakescount}
          condition={targetCondition.name}
          theme={ctx.theme}
          style={{
            backgroundColor: ctx.theme === "night" ? "#000000" : "#ffffff",
            backgroundImage:
              ctx.theme === "night"
                ? "linear-gradient(315deg, #000000 0%, #111 90%"
                : "linear-gradient(305deg, #ffffff 12%, #ccc 75%",
          }}

          // speed={10}
          // flakescount={3}
          // condition={"few clouds"}
        />
      )}

      <Clock
        timeZone={finalResult.timeZone}
        sunrise={finalResult.sunrise}
        sunset={finalResult.sunset}
      />

      <div className={`${classes["top-container"]}`}>
        <span className={classes["condition-icon"]}>
          <img
            src={iconLink(finalResult.conditionIcon)}
            alt={finalResult.conditionDesc}
          ></img>
        </span>
        <div className={classes.temp_value}>
          {finalResult.temp}&deg;
          <span className={classes.deg_sub}>C</span>
        </div>
        <span
          className={classes.condition}
        >{` ${finalResult.condition} (${finalResult.conditionDesc})`}</span>
        <div className={classes.city_name}>
          <span
            className={`${classes.title} lable_area`}
          >{`${finalResult.locationName}`}</span>
          <span className={`${classes.country_code} hover_detail`}>
            {finalResult.countryCode}
          </span>
        </div>
      </div>

      <div className={`${classes["mid-container"]}`}>
        <LittleIconMainCondition
          value={finalResult.humidity}
          title={`Humidity`}
          icon={<WiHumidity />}
          unit={`%`}
        />
        <LittleIconMainCondition
          value={`${finalResult.windSpeed}`}
          title={`Wind`}
          icon={<BsWind />}
          unit={"Km/h"}
        />
        <LittleIconMainCondition
          value={finalResult.tempMin}
          title={`Min Temp`}
          icon={<FaTemperatureLow />}
          unit={"°C"}
        />
        <LittleIconMainCondition
          value={finalResult.tempMax}
          title={`Max Temp`}
          icon={<FaTemperatureHigh />}
          unit={"°C"}
        />
      </div>
    </div>
  );
};
export default ClockResult;
