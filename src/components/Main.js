import React from "react";

import Intro from "./sections/Intro";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

import SocialIcons from "./ui/svg/SocialIcons";

import "./Main.css";

const Main = () => {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <SocialIcons />
    </React.Fragment>
  );
};

export default Main;
