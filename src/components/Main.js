import React from "react";

import Intro from "./sections/Intro";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";

import Test from "./intro-test";

import "./Main.css";

const Main = () => {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </React.Fragment>
  );
};

export default Main;
