import { useEffect, useState } from "react";
import {
  ConvertTimeToArray,
  CalcRotation,
  CalcUTCTime,
  CalcClockRotation,
  CalcDigitalTime,
} from "../../../general/GeneralCalc";

import classes from "./ClockRealTime.module.css";
const ClockRealTime = (props) => {
  const [realTime, setRealTime] = useState();

  const currentTime = function () {
    return CalcDigitalTime(CalcUTCTime() + props.timeZone);
  };

  const updateClock = function () {
    setRealTime(currentTime());
  };
  useEffect(() => {
    const time = setInterval(updateClock, 1000);
    return () => {
      clearInterval(time);
    };
  }, [props.timeZone]);

  const realTimeArr = ConvertTimeToArray(realTime);
  const realTimeDegree = CalcRotation(realTimeArr);
  return (
    <div
      style={{ transform: `rotate(${realTimeDegree}deg)` }}
      className={classes.hand}
    >
      <div
        className={`${classes.time_inside}`}
        style={{
          transform: `rotate(${CalcClockRotation(realTimeDegree)}deg)`,
        }}
      >
        {realTime}
      </div>
    </div>
  );
};
export default ClockRealTime;
