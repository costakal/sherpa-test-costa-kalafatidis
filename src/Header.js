import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "./AppContext";

const Header = () => {
  const {
    toggle,
    setToggle,
    navSelection,
    setNavSelection,
    setEventItems,
    setTopStyle,
    setDetailsLeft,
    setSelectedEvent,
  } = useContext(AppContext);

  return (
    <Wrapper toggle={toggle}>
      <h1
        onClick={() => {
          if (navSelection === "events") {
            setSelectedEvent({});
            setNavSelection("home");
            setToggle(!toggle);
            setEventItems([]);
            setTopStyle("145px");
            setDetailsLeft("-220px");
          }
        }}
      >
        Marketplace
      </h1>
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
  height: ${(props) => (props.toggle ? "125px" : "50px")};
  color: black;
  background: gainsboro;
  font-size: ${(props) => (props.toggle ? "48px" : "20px")};
  font-weight: bold;
  transition: all 1s ease-in-out;
  h1 {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      color: grey;
    }
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
