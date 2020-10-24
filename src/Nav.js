import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = () => {
  const [navSelection, setNavSelection] = useState("home");
  const [menuOptions, setMenuOptions] = useState([]);

  useEffect(() => {
    fetch(`https://tt-sherpa-backend.herokuapp.com/menu/${navSelection}`)
      .then((res) => res.json())
      .then((data) => setMenuOptions(data));
  }, []);

  return (
    <Wrapper>
      {menuOptions.map((option) => (
        <NavButton>{option}</NavButton>
      ))}
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 200px;

  background: gainsboro;
`;
const NavButton = styled.button``;
