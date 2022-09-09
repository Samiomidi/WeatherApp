import React from "react";
import classes from "./chartBar.module.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  let barFillPosition = "0%";
  if (props.max - props.min > 0) {
    barFillHeight =
      Math.round(
        ((props.max - props.min) / (props.maxValue - props.minValue)) * 100
      ) + "%";
  } else barFillHeight = 5 + "%";

  if (props.max - props.min >= 0) {
    barFillPosition =
      (Math.round(props.min - props.minValue) /
        (props.maxValue - props.minValue)) *
        100 +
      "%";
  }

  return (
    <div className={classes["chart-bar"]}>
      <div
        className={classes.fill}
        style={{
          height: barFillHeight,
          bottom: barFillPosition,
        }}
      >
        <div
          className={`${classes["chart-max-value"]} ${classes["chart-value"]}`}
        >
          {props.max}
        </div>
        {props.max - props.min != 0 && (
          <div
            className={`${classes["chart-min-value"]} ${classes["chart-value"]}`}
          >
            {props.min}
          </div>
        )}
      </div>
      <div className={classes.weekday}>{props.weekday}</div>
      <div className={classes.label}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
