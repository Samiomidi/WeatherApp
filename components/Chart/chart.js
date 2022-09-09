import React from "react";
import ChartBar from "./chartBar";
import classes from "./chart.module.css";

const Chart = (props) => {
  const { dataPoints } = props;

  const dataPointValues = dataPoints.flatMap((dataPoint) => [
    dataPoint.max,
    dataPoint.min,
  ]);
  const totalMaximum = Math.max(...dataPointValues);
  const totalMinumum = Math.min(...dataPointValues);

  return (
    <div className={classes.container}>
      <div>{props.weekday}</div>
      <div className={classes.label}>{props.label}</div>
      <div className={classes.chart}>
        {dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.id}
            max={dataPoint.max}
            min={dataPoint.min}
            maxValue={totalMaximum}
            minValue={totalMinumum}
            label={dataPoint.lable}
            weekday={dataPoint.weekday}
          />
        ))}
      </div>

      <div className={classes["chart-name"]}>
        {props.chartName} <span>{`(${props.unit})`}</span>
      </div>
    </div>
  );
};

export default Chart;
