import React from "react";
import GlobalStyle from "./GlobalStyle";
import "./App.css";

// css

// header
import Header from "./components/Header/header";

// body
import Body from "./components/Body/body";

// footer
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
