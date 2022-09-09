import React, { useState } from "react";
import classes from "./useTab.module.css";
function Tab(props) {
  const { tabs } = props;
  const tabArr = tabs.map((tab, index) => {
    return { name: index, title: Object.keys(tab)[0], activeTab: 0 };
  });

  const [toggleFilter, setToggleFilter] = useState(tabArr);
  const [active, setActive] = useState("0");

  const openFilterHandler = (event) => {
    const active = event.target.dataset.set;
    setActive(active);
    const newToggle = [...toggleFilter];
    newToggle.forEach((tab) => {
      if (tab.activeTab === active) {
        tab.activeTab = 0;
      } else tab.activeTab = active;
    });
    setToggleFilter(newToggle);
  };

  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={classes.options}>
        {toggleFilter.map((btn) => {
          return (
            <button
              key={btn.name}
              className={`${classes.btn} ${
                btn.activeTab == btn.name ? classes.active : ""
              }`}
              onClick={openFilterHandler}
              data-set={btn.name}
            >
              {`${btn.activeTab == btn.name ? "Close" : ""} ${btn.title}`}
            </button>
          );
        })}
      </div>
      {tabs[active][tabs.map((tab) => Object.keys(tab)[0])[active]]}
    </div>
  );
}

export default Tab;
