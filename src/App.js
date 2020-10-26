import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Hero from "./Hero";
import Nav from "./Nav";
import Main from "./Main";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Hero />
      <Nav />
      <Main />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  background: rgb(245, 245, 245);
`;
