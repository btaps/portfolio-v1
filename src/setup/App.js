import React from "react";
import "./App.css";

import Main from "../components/Main.js";

import Routes from "./Routes";

function App() {
  //setTimeout(() => {
  //document.getElementsByClassName("svg-container")[0].style.display = "none";
  //}, 2800);

  return (
    <Routes>
      <Main />
    </Routes>
  );
}

export default App;
