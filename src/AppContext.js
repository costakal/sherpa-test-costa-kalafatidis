import React, { useState } from "react";

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [navSelection, setNavSelection] = useState("home");
  const [eventList, setEventList] = useState([]);
  const [eventItems, setEventItems] = useState([]);
  const [eventId, setEventId] = useState(null);
  const [topStyle, setTopStyle] = useState("145px");
  const [detailsLeft, setDetailsLeft] = useState("-220px");
  const [selectedEvent, setSelectedEvent] = useState({});

  return (
    <AppContext.Provider
      value={{
        toggle,
        setToggle,
        navSelection,
        setNavSelection,
        eventList,
        setEventList,
        eventItems,
        setEventItems,
        eventId,
        setEventId,
        topStyle,
        setTopStyle,
        detailsLeft,
        setDetailsLeft,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
