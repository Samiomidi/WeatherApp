import { Fragment } from "react";
import classes from "./searchedResult.module.css";
import Button from "../../ui/Button";

const SearchedResult = (props) => {
  const { searchResult } = props;

  return (
    <Fragment>
      <ul className={props.className}>
        {searchResult &&
          searchResult.map((data) => {
            const exploreLink = `/result/${data.city}/${data.lat}/${data.lon}`;
            return (
              <li className="card" key={data.id}>
                <p className={classes.name}>{`${data.city}`}</p>
                <p className={classes.country}>{`Country: ${data.country}`}</p>
                {data.state && (
                  <p className={classes.state}>{`State: ${data.state}`}</p>
                )}
                <Button link={exploreLink}>Get Weather</Button>
              </li>
            );
          })}
      </ul>
    </Fragment>
  );
};

export default SearchedResult;
