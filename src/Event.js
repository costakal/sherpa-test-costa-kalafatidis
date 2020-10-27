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
    setSelectedDetails,
  } = useContext(AppContext);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (event.id !== selectedEvent.id) {
      setIsSelected(false);
    }
    // eslint-disable-next-line
  }, [selectedEvent]);

  return (
    <Wrapper
      onClick={() => {
        setEventId(event.id);
        setTopStyle("245px");
        setSelectedEvent(event);
        setDetailsLeft("180px");
        setIsSelected(!isSelected);
        setSelectedDetails(event.detail);
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
      <div isSelected={isSelected}>
        <img
          isSelected={isSelected}
          alt={event.id}
          src={`https://tt-sherpa-backend.herokuapp.com${event.logo}`}
        />
        <h2>{event.title}</h2>
        <p
          isSelected={isSelected}
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
  position: ${(props) => (props.isSelected ? "fixed" : "inherit")};
  top: ${(props) => (props.isSelected ? "60px" : "340px")};
  left: ${(props) => (props.isSelected ? "10px" : "200px")};
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.isSelected ? "15px" : "25px")};
  width: ${(props) => (props.isSelected ? "150px" : "210px")};
  height: ${(props) => (props.isSelected ? "150px" : "200")};
  background: rgb(200, 200, 200, 0.7);
  border-radius: 50px;
  cursor: pointer;
  transition: all 1s ease-in;
  pointer-events: ${(props) => (props.isSelected ? "none" : "auto")};

  div {
    padding: ${(props) => (props.isSelected ? "10px" : "25px")};
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => (props.isSelected ? "none" : "white")};
    border-radius: ${(props) => (props.isSelected ? "25px" : "50px")};
    transition: all 0.8s linear;

    img {
      width: ${(props) => (props.isSelected ? "120px" : "120px")};
      padding: ${(props) => (props.isSelected ? "10px 0px" : "15px 0px")};
      border-radius: ${(props) => (props.isSelected ? "25px" : "0px")};
      transition: all 0.8s linear;
    }
    h2 {
      font-weight: bold;
      line-height: 1.5em;
      border-radius: ${(props) => (props.isSelected ? "25px" : "0px")};
      padding: 10px;
      background: white;
      font-size: ${(props) => (props.isSelected ? "13px" : "16px")};
      transition: all 0.8s linear;
    }
    p {
      font-style: italic;
      line-height: 1.5em;
      transition: all 0.8s linear;
    }
  }
`;
