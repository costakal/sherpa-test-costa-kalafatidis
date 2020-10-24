import React from "react";

import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Hero from "./Hero";
import Nav from "./Nav";
import Main from "./Main";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Nav />
      <Main />
    </>
  );
};

export default App;
