import { Fragment } from "react";
import ClockResult from "./Clock-Result/clockResult";
import SearchedResult from "./SearchedResult/searchedResult";
import ForecastResult from "./ForecastResult/forecastResult";
import classes from "./result.module.css";

const Result = (props) => {
  return (
    <Fragment>
      <div
        className={
          !props.finalResult.locationName ? classes.cardV : classes.cardH
        }
      >
        {!props.finalResult.locationName && (
          <SearchedResult
            searchResult={props.searchResult}
            className={
              !props.finalResult.locationName
                ? classes.vertical
                : classes.horizontal
            }
          />
        )}
        {props.finalResult.locationName && (
          <ForecastResult
            className={classes.sidebar}
            forecastResult={props.forecastResult}
            countryData={props.countryData}
          />
        )}
        {props.finalResult.locationName && (
          <ClockResult finalResult={props.finalResult} />
        )}
      </div>
    </Fragment>
  );
};
export default Result;
