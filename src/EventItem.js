import React from "react";
import styled from "styled-components";

const EventItem = ({ item }) => {
  return (
    <Wrapper>
      <p>{item.description}</p>
      <p>{item.start}</p>
      <p>{item.end}</p>
    </Wrapper>
  );
};

export default EventItem;

const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  border-radius: 50px;
  width: 250px;
  height: 250px;
`;
