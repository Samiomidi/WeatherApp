import React, { useState } from "react";
import classes from "./tabs.module.css";
function Tab(props) {
  const { tabs } = props;
  console.log(tabs.length);
  const tabArr = tabs.map((tab, index) => {
    return {
      name: index,
      title: Object.keys(tab)[0],
      activeTab: props.activeDefault,
    };
  });

  const [toggleFilter, setToggleFilter] = useState(tabArr);
  const [active, setActive] = useState(props.activeDefault);

  const openFilterHandler = (event) => {
    const active = event.target.dataset.set;

    const newToggle = [...toggleFilter];
    newToggle.forEach((tab) => {
      if (tab.activeTab === active) {
        tab.activeTab = props.activeDefault;
        setActive(props.activeDefault);
      } else {
        tab.activeTab = active;
        setActive(active);
      }
    });
    setToggleFilter(newToggle);
  };

  return (
    <div
      className={`${classes.container} ${props.className}`}
      style={props.style}
    >
      <div className={classes.options}>
        {toggleFilter.map((btn) => {
          return (
            <button
              key={btn.name}
              className={`${classes.btn} ${
                btn.activeTab == btn.name ? classes.active : ""
              }`}
              style={
                btn.activeTab == btn.name
                  ? { width: "100%" }
                  : { width: `${100 / tabs.length}%` }
              }
              onClick={openFilterHandler}
              data-set={btn.name}
            >
              {`${
                btn.activeTab == props.activeDefault
                  ? ""
                  : btn.activeTab == btn.name
                  ? "Close"
                  : ""
              } ${btn.title}`}
            </button>
          );
        })}
      </div>
      {tabs[active] &&
        tabs[active][tabs.map((tab) => Object.keys(tab)[0])[active]]}
    </div>
  );
}

export default Tab;
