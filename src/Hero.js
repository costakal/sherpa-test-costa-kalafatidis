import React from "react";
import styled from "styled-components";

import hero from "./assets/bg.jpg";

const Hero = () => {
  return (
    <>
      <HeroImg alt="hero" src={hero} />
    </>
  );
};

export default Hero;

const HeroImg = styled.img`
  width: 100vw;
  height: 250px;
  object-fit: cover;
`;
