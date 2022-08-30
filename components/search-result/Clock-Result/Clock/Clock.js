import classes from "./Clock.module.css";
import {
  CalcClockRotation,
  CalcDigitalTime,
  CalcRotation,
  ConvertTimeToArray,
} from "../../../general/GeneralCalc";
import ClockRealTime from "./ClockRealTime";
import ClockSunriseTime from "./ClockSunriseTime";
import ClockSunsetTime from "./ClockSunsetTime";
import { Fragment } from "react";

const Clock = (props) => {
  const sunTimeCalculator = (sunTime, timeZone) => {
    const getTimezoneOffset = new Date().getTimezoneOffset() * 60000;
    const timeDeviation = getTimezoneOffset + timeZone;
    const time = sunTime + timeDeviation;
    return CalcDigitalTime(time);
  };

  const sunriseTimeFinal = sunTimeCalculator(props.sunrise, props.timeZone);
  const sunsetTimeFinal = sunTimeCalculator(props.sunset, props.timeZone);

  const sunriseTimeArr = ConvertTimeToArray(sunriseTimeFinal);
  const sunsetTimeArr = ConvertTimeToArray(sunsetTimeFinal);

  const sunriseDegree = CalcRotation(sunriseTimeArr);
  const sunsetDegree = CalcRotation(sunsetTimeArr);

  return (
    <Fragment>
      {
        <div className={props.className}>
          <ClockRealTime timeZone={props.timeZone} />
          <ClockSunriseTime
            degree={sunriseDegree}
            className={classes.hand}
            rotation={CalcClockRotation(sunriseDegree)}
            sunrise={sunriseTimeFinal}
          />
          <ClockSunsetTime
            degree={sunsetDegree}
            className={classes.hand}
            rotation={CalcClockRotation(sunsetDegree)}
            sunset={sunsetTimeFinal}
          />
        </div>
      }
    </Fragment>
  );
};
export default Clock;
