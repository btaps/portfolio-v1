import React from "react";
import "./App.css";

import Routes from "./Routes";
import Intro from "../components/Intro";

function App() {
  //setTimeout(() => {
  //document.getElementsByClassName("svg-container")[0].style.display = "none";
  //}, 2800);

  return (
    <React.Fragment>
      <Intro />
    </React.Fragment>
  );
}

export default App;
