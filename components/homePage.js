import React, { useState, useEffect } from "react";
import classes from "./homePage.module.css";
import SearchBar from "./search-result/searchBar";
import Tab from "./customHooks/Tabs/tabs";

function HomePage(props) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);
  const btnInstallHandler = (e) => {
    if (deferredPrompt) {
      e.target.style.opacity = "0";
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
    return;
  };
  const installCard = (
    <div className={classes["install-card"]}>
      <button
        className={`${classes["add-button"]}`}
        onClick={btnInstallHandler}
      >
        Add to home screen
      </button>
    </div>
  );

  const tab1 = (
    <article className={classes.article}>
      <p className="card">
        Search any places around the world in your native languages
      </p>
    </article>
  );

  const tab2 = (
    <article className={classes.article}>
      <p className="card">
        This application use a free API and have built for educational perposes.
      </p>
    </article>
  );

  const tab3 = (
    <article className={classes.article}>
      <p className="card">
        Results for Current conditions, Daily and 3-Hourly forecast for next 5
        days
      </p>
    </article>
  );

  return (
    <div className={classes.main}>
      <div
        className={classes["hero-section"]}
        style={{
          backgroundImage: `url(/bg-${props.imageNum}.jpg)`,
        }}
      >
        <div className={classes.searchbar}>
          <SearchBar placeholder={"Search locations"} />
        </div>
        {deferredPrompt && installCard}
      </div>

      <div className={classes.content}>
        <Tab
          tabs={[
            { "Usage Areas": tab1 },
            { "About Application": tab2 },
            { Specifications: tab3 },
          ]}
          activeDefault={null}
        />
      </div>
    </div>
  );
}

export default HomePage;
