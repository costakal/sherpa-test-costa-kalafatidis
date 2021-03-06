import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "./AppContext";

import hero from "./assets/bg.jpg";

const Hero = () => {
  const { toggle } = useContext(AppContext);

  return (
    <>
      <HeroImg alt="hero" src={hero} toggle={toggle} />
    </>
  );
};

export default Hero;

const HeroImg = styled.img`
  width: 100vw;
  max-height: ${(props) => (props.toggle ? "250px" : "0px")};
  object-fit: cover;
  transition: all 0.6s;
`;
