import React, { useState, useEffect, useContext } from "react";
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
    setSelectedEvent,
    setDetailsLeft,
    selectedEvent,
  } = useContext(AppContext);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (event.id !== selectedEvent.id) {
      setIsSelected(false);
    }
  }, [selectedEvent]);

  return (
    <Wrapper
      onClick={() => {
        setEventId(event.id);
        setTopStyle("250px");
        setSelectedEvent(event);
        setDetailsLeft("220px");
        setIsSelected(!isSelected);
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
        navSelection === "events" && !isSelected
          ? { opacity: "0" }
          : { opactiy: "1" }
      }
      isSelected={isSelected}
    >
      <div>
        <img
          alt={event.id}
          src={`https://tt-sherpa-backend.herokuapp.com${event.logo}`}
        />
        <h2>{event.title}</h2>
        <p
          style={
            navSelection === "events" && isSelected ? { display: "none" } : {}
          }
        >
          {event.detail}
        </p>
      </div>
    </Wrapper>
  );
};

export default Event;

const Wrapper = styled.div`
  position: relative;
  /* position: ${(props) => (props.isSelected ? "fixed" : "initial")}; */
  top: ${(props) => (props.isSelected ? "60px" : "initial")};
  left: ${(props) => (props.isSelected ? "10px" : "intital")};
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: rgb(200, 200, 200, 0.7);
  border-radius: 50px;
  cursor: pointer;
  transition: all 1s ease-in-out;
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
      border-radius: ${(props) => (props.isSelected ? "25px" : "0px")};
    }
    h2 {
      font-weight: bold;
      line-height: 1.5em;
      border-radius: ${(props) => (props.isSelected ? "25px" : "0px")};
    }
    p {
      font-style: italic;
      line-height: 1.5em;
    }
  }
`;
