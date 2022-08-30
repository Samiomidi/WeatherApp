import React from "react";

const CoordContext = React.createContext({
  theme: "",
  onSetTheme: () => {},
});
export default CoordContext;
