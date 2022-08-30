import { GiSunrise } from "react-icons/gi";
import classes from "./ClockSunTime.module.css";
const ClockSunriseTime = (props) => {

  return (
    <div
      style={{ transform: `rotate(${props.degree}deg)` }}
      className={`${props.className} ${classes.sun_hand}`}
    >
      <div>
        <GiSunrise
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
        {props.sunrise}
      </div>
    </div>
  );
};

export default ClockSunriseTime;
