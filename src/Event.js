import React from "react";
import styled from "styled-components";
import EventDetails from "./EventDetails";

const Event = ({ event, setNavSelection, toggle, setToggle }) => {
  return (
    <Wrapper>
      <EventsWrapper
        onClick={() => {
          setNavSelection("events");
          setToggle(!toggle);
        }}
      >
        <div>
          <img
            alt={event.id}
            src={`https://tt-sherpa-backend.herokuapp.com${event.logo}`}
          />
          <h2>{event.title}</h2>
          <p>{event.detail}</p>
        </div>
      </EventsWrapper>
      <EventsDeatilsWrapper style={{ display: "none" }}>
        <h2>Featured Events</h2>
        <EventDetails id={event.id} />
      </EventsDeatilsWrapper>
    </Wrapper>
  );
};

export default Event;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: rgb(200, 200, 200, 0.7);
  border-radius: 50px;
  cursor: pointer;

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

const EventsDeatilsWrapper = styled.div``;
