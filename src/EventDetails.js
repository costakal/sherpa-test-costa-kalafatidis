import React, { useState, useEffect } from "react";
import styled from "styled-components";

import EventItem from "./EventItem";

const EventDetails = ({ id }) => {
  const [eventItems, setEventItems] = useState([]);

  useEffect(() => {
    fetch(`https://tt-sherpa-backend.herokuapp.com/events/${id}/meetings`)
      .then((res) => res.json())
      .then((data) => setEventItems(data));
  });

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
