import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = ({ navSelection }) => {
  const [menuOptions, setMenuOptions] = useState([]);

  useEffect(() => {
    fetch(`https://tt-sherpa-backend.herokuapp.com/menu/${navSelection}`)
      .then((res) => res.json())
      .then((data) => setMenuOptions(data));
  }, [navSelection]);

  return (
    <Wrapper>
      {menuOptions.map((option, index) => (
        <NavButton key={option + index}>{option}</NavButton>
      ))}
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 145px;
  left: 10px;
  padding: 20px 0px;
  background: gainsboro;
  border-radius: 20px;
  z-index: 100;
`;
const NavButton = styled.button`
  margin: 10px 20px;
  padding: 10px 20px;
  background: white;
  border: none;
  font-size: 18px;
  border-radius: 20px;
`;
