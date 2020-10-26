import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Event from "./Event";

const Main = ({ setNavSelection, toggle, setToggle }) => {
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
          return (
            <Event
              key={event.id}
              event={event}
              setNavSelection={setNavSelection}
              toggle={toggle}
              setToggle={setToggle}
            />
          );
        })}
      </div>
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
