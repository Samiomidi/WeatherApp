import { GiSunset } from "react-icons/gi";
import classes from "./ClockSunTime.module.css";
const ClockSunriseTime = (props) => {
  return (
    <div
      style={{ transform: `rotate(${props.degree}deg)` }}
      className={`${props.className} ${classes.sun_hand}`}
    >
      <div>
        <GiSunset
          className={classes.sun_icon}
          style={{
            transform: `rotate(${props.rotation}deg)`,
          }}
        />
      </div>

      <div
        className={`${classes.timeOutside}`}
        style={{
          transform: `rotate(${props.rotation}deg)`,
        }}
      >
        {props.sunset}
      </div>
    </div>
  );
};

export default ClockSunriseTime;
