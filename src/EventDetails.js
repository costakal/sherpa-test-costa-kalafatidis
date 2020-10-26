import React from "react";
import styled from "styled-components";

import EventItem from "./EventItem";

const EventDetails = ({ eventItems }) => {
  return (
    <Wrapper>
      {eventItems.map((item, index) => {
        return <EventItem key={`${item.event_id}-${index}`} item={item} />;
      })}
    </Wrapper>
  );
};

export default EventDetails;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
