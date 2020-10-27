import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import Event from "./Event";
import EventDetails from "./EventDetails";

import { AppContext } from "./AppContext";

const Main = () => {
  const {
    navSelection,
    eventItems,
    eventList,
    setEventList,
    detailsLeft,
    isSelected,
    selectedDetails,
  } = useContext(AppContext);

  useEffect(() => {
    fetch(`https://tt-sherpa-backend.herokuapp.com/events`)
      .then((res) => res.json())
      .then((data) => setEventList(data));
  });

  return (
    <Wrapper>
      <div isSelected={isSelected}>
        {eventList.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </div>
      <EventsDeatilsWrapper
        style={
          navSelection === "home"
            ? { opacity: "0" }
            : { opacity: "1" } || navSelection === "events"
            ? { opacity: "1" }
            : { opacity: "0" }
        }
      >
        <h2>Featured Meetings</h2>
        <EventDetails eventItems={eventItems} />
      </EventsDeatilsWrapper>
      <SelectedEvent style={{ left: `${detailsLeft}` }}>
        {selectedDetails}
      </SelectedEvent>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  position: absolute;
  top: 310px;
  width: 100%;
  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

const EventsDeatilsWrapper = styled.div`
  position: fixed;
  left: 220px;
  top: 15vh;
  display: flex;
  flex-direction: column;
  transition: all 1.5s 0.5s;
  h2 {
    margin-left: 10px;
    font-size: 26px;
    font-weight: bold;
    padding: 0px 0px 10px 0px;
  }
`;

const SelectedEvent = styled.div`
  position: fixed;
  padding: 10px 40px;
  top: 60px;
  left: 0px;
  background: white;
  border-radius: 20px;
  transition: all 1s linear;
`;
