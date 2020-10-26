import React from "react";
import styled from "styled-components";

const Header = ({ toggle, setToggle, navSelection, setNavSelection }) => {
  return (
    <Wrapper toggle={toggle}>
      <h1
        onClick={() => {
          if (navSelection === "events") {
            setNavSelection("home");
            setToggle(!toggle);
          }
        }}
      >
        Marketplace
      </h1>
      <LoginButton
        onClick={() => {
          setToggle(!toggle);
        }}
      >
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
  height: ${(props) => (props.toggle ? "125px" : "50px")};
  color: black;
  background: gainsboro;
  font-size: ${(props) => (props.toggle ? "48px" : "20px")};
  font-weight: bold;
  transition: all 1s;
  h1 {
    cursor: pointer;
  }
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
