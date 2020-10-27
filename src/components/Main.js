import React from "react";
import { useSelector } from "react-redux";

import Intro from "./sections/Intro";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

import SocialIcons from "./ui/svg/SocialIcons";

import "./Main.css";

const Main = () => {
  const exp1 = useSelector((state) => state.popup.exp1);
  const exp2 = useSelector((state) => state.popup.exp2);
  const exp3 = useSelector((state) => state.popup.exp3);

  return (
    <React.Fragment>
      <Intro />
      <About blur={exp1 || exp2 || exp3 ? true : false} />
      <Skills blur={exp1 || exp2 || exp3 ? true : false} />
      <Experience blur={exp1 || exp2 || exp3 ? true : false} />
      <Contact blur={exp1 || exp2 || exp3 ? true : false} />
      <SocialIcons />
    </React.Fragment>
  );
};

export default Main;
