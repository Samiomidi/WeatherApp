import React from "react";
import classes from "./homePage.module.css";
import SearchBar from "./search-result/searchBar";
import Tab from "./customHooks/Tabs/tabs";

function HomePage(props) {
  const tab1 = () => {
    return (
      <article className={classes.article}>
        <p className="card">
          Search any places around the world in your native languages
        </p>
      </article>
    );
  };
  const tab2 = () => {
    return (
      <article className={classes.article}>
        <p className="card">
          This application use a free API and have built for educational
          perposes.
        </p>
      </article>
    );
  };
  const tab3 = () => {
    return (
      <article className={classes.article}>
        <p className="card">
          Results for Current conditions, Daily and 3-Hourly forecast for next 5
          days
        </p>
      </article>
    );
  };
  return (
    <div className={classes.main}>
      <div
        className={classes["hero-section"]}
        style={{
          backgroundImage: `url(/bg-${props.imageNum}.jpg)`,
        }}
      >
        <SearchBar placeholder={"Search locations"} />
      </div>

      <div className={classes.content}>
        <Tab
          tabs={[
            { "Usage Areas": tab1() },
            { "About Application": tab2() },
            { Specifications: tab3() },
          ]}
          activeDefault={null}
        />
      </div>
    </div>
  );
}

export default HomePage;
