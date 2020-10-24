import React from "react";
import styled from "styled-components";

const Event = ({ event }) => {
  return (
    <Wrapper>
      <img
        alt={event.id}
        src={`https://tt-sherpa-backend.herokuapp.com${event.logo}`}
      />
      <h2>{event.title}</h2>
      <p>{event.detail}</p>
    </Wrapper>
  );
};

export default Event;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  img {
    width: 100px;
  }
`;
