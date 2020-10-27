import React, { useState } from "react";

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [navSelection, setNavSelection] = useState("home");
  const [eventItems, setEventItems] = useState([]);
  const [eventId, setEventId] = useState(null);
  const [topStyle, setTopStyle] = useState("145px");

  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        navSelection,
        setNavSelection,
        eventItems,
        setEventItems,
        eventId,
        setEventId,
        topStyle,
        setTopStyle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
