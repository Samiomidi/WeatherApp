import React from "react";
import classes from "./gantChart.module.css";

function GantChart(props) {
  let barFillWidth = "";
  let barFillPosition = "0%";
  if (props.max - props.min === 0) {
    barFillWidth = 3 + "%";
  }

  return (
    <div className={classes.fill} style={{ width: barFillWidth }}>
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
  );
}

export default GantChart;
