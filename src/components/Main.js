import React from "react";
import { useSelector } from "react-redux";

import Intro from "./sections/Intro";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
//import Projects from "./sections/Projects";
import Credits from "./sections/Credits";

import SocialIcons from "./ui/svg/SocialIcons";
import ClickableEmail from "./ui/ClickableEmail";

import "./Main.scss";

/*
 * NOTE: need to add so projects are included:
 *          <Projects blur={blur ? true : false} />
 */
const Main = () => {
  const blur = useSelector((state) => state.popup.blur);
  return (
    <React.Fragment>
      <Intro />
      <About blur={blur ? true : false} />
      <Skills blur={blur ? true : false} />
      <Experience blur={blur ? true : false} />
      <Contact blur={blur ? true : false} />
      <Credits />
      <SocialIcons />
      <ClickableEmail />
    </React.Fragment>
  );
};

export default Main;
