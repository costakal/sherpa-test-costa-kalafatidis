import React from "react";
import styled from "styled-components";

const EventItem = ({ item }) => {
  return (
    <Wrapper>
      <p>{item.description}</p>
      <p>
        Start Time: <span>{item.start}</span>
      </p>
      <p>
        End Time: <span>{item.end}</span>
      </p>
    </Wrapper>
  );
};

export default EventItem;

const Wrapper = styled.div`
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 50px;
  width: 200px;
  height: 200px;
  p {
    font-weight: bold;
    span {
      font-weight: 400;
      font-style: italic;
    }
  }
`;
