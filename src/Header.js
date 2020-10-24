import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>Marketplace</h1>
      <LoginButton>
        <p>Profile Login</p>
      </LoginButton>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  color: black;
  background: gainsboro;
  font-size: 48px;
  font-weight: bold;
`;

const LoginButton = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  margin: 25px;
  background: rgb(128, 128, 128, 0.7);
  width: 120px;
  height: 120px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    font-size: 20px;
    line-height: 1.2em;
  }
`;
