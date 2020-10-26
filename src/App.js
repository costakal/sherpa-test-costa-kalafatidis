import React, { useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Hero from "./Hero";
import Nav from "./Nav";
import Main from "./Main";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [navSelection, setNavSelection] = useState("home");

  console.log(navSelection);

  return (
    <Wrapper>
      <GlobalStyles />
      <Header
        toggle={toggle}
        setToggle={setToggle}
        navSelection={navSelection}
        setNavSelection={setNavSelection}
      />
      <Hero toggle={toggle} />
      <Nav navSelection={navSelection} />
      <Main
        toggle={toggle}
        setToggle={setToggle}
        setNavSelection={setNavSelection}
      />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: rgb(245, 245, 245);
`;
