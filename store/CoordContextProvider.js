import React, { useState } from "react";
import CoordContext from "./coord-context";

const CoordContextProvider = (props) => {
  const [theme, setTheme] = useState("night");

  const coordContext = {
    theme: theme,
    onSetTheme: (data) => {
      setTheme(data);
    },
  };

  return (
    <CoordContext.Provider value={coordContext}>
      {props.children}
    </CoordContext.Provider>
  );
};
export default CoordContextProvider;
