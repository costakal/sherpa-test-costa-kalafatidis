import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Event from "./Event";

const Main = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    fetch(`https://tt-sherpa-backend.herokuapp.com/events`)
      .then((res) => res.json())
      .then((data) => setEventList(data));
  }, []);

  return (
    <Wrapper>
      {eventList.map((event) => {
        return <Event event={event} />;
      })}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
`;
