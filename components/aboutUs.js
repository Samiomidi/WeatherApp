import React from "react";
import classes from "./aboutUs.module.css";
function AboutUs() {
  return (
    <div className={classes.container}>
      <article className={classes.article}>
        <h1>What is EASY WEATHER</h1>
        <p className="card">
          This is just a demo application and has been prepared for educational
          purposes. NextJS framework and ReactJS has been used to design this
          application. The data required by the application is provided by the
          <a href="https://openweathermap.org" target="blank">
            {" "}
            Open Weather{" "}
          </a>
          free API.
        </p>
      </article>
    </div>
  );
}

export default AboutUs;
