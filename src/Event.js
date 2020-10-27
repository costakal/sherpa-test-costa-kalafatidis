import React, { useState, useContext } from "react";
import styled from "styled-components";

import { AppContext } from "./AppContext";

const Event = ({ event }) => {
  const {
    navSelection,
    setNavSelection,
    toggle,
    setToggle,
    setEventItems,
    setEventId,
    setTopStyle,
  } = useContext(AppContext);

  return (
    <Wrapper
      onClick={() => {
        setEventId(event.id);
        setTopStyle("250px");
        fetch(
          `https://tt-sherpa-backend.herokuapp.com/events/${event.id}/meetings`
        )
          .then((res) => res.json())
          .then((data) => {
            setEventItems(data);
          });
        if (navSelection !== "events") {
          setNavSelection("events");
          setToggle(!toggle);
        }
      }}
      style={
        navSelection === "events"
          ? {
              opacity: "0",
            }
          : { opactiy: "1" }
      }
    >
      <div>
        <img
          alt={event.id}
          src={`https://tt-sherpa-backend.herokuapp.com${event.logo}`}
        />
        <h2>{event.title}</h2>
        <p>{event.detail}</p>
      </div>
    </Wrapper>
  );
};

export default Event;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: rgb(200, 200, 200, 0.7);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.5s;
  div {
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 50px;
    img {
      width: 100px;
      padding: 15px 0px;
    }
    h2 {
      font-weight: bold;
      line-height: 1.5em;
    }
    p {
      font-style: italic;
      line-height: 1.5em;
    }
  }
`;
