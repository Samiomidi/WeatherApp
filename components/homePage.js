import React from "react";
import classes from "./homePage.module.css";
import SearchBar from "./search-result/searchBar";

function HomePage() {
  const imageNum = Math.floor(Math.random() * 6 + 1);

  return (
    <>
      <div
        className={classes["hero-section"]}
        style={{
          backgroundImage: `url(/bg-${imageNum}.jpg)`,
        }}
      >
        <SearchBar placeholder={"Search locations"} />
      </div>
      <div className={classes.content}>
        <article className={classes.article}>
          <p className="card">
            Search any places around the world in your native languages
          </p>
        </article>
        <article className={classes.article}>
          <p className="card">
            This application use a free API and have built for educational
            perposes.
          </p>
        </article>
        <article className={classes.article}>
          <p className="card">
            Reaults for Current conditions, Daily and 3-Hourly forecast for next
            5 days
          </p>
        </article>
      </div>
    </>
  );
}

export default HomePage;
