import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import Event from "./Event";
import EventDetails from "./EventDetails";

import { AppContext } from "./AppContext";

const Main = () => {
  const { navSelection, eventItems } = useContext(AppContext);

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    fetch(`https://tt-sherpa-backend.herokuapp.com/events`)
      .then((res) => res.json())
      .then((data) => setEventList(data));
  }, []);

  return (
    <Wrapper>
      <div>
        {eventList.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </div>
      <EventsDeatilsWrapper
        style={navSelection === "home" ? { opacity: "0" } : { display: "1" }}
      >
        <h2>Featured Meetings</h2>
        <EventDetails eventItems={eventItems} />
      </EventsDeatilsWrapper>
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
  transition: all 1.5s;
  h2 {
    margin-left: 10px;
    font-size: 26px;
    font-weight: bold;
    padding: 0px 0px 10px 0px;
  }
`;
