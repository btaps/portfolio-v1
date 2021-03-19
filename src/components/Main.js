import React from "react";
import {useSelector} from "react-redux";

import Intro from "./sections/Intro";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Credits from "./sections/Credits";

import SocialIcons from "./ui/svg/SocialIcons";
import ClickableEmail from "./ui/ClickableEmail";

import "./Main.scss";

const Main = () => {
  const hide = useSelector((state) => state.popup.blur);

  return (
    <React.Fragment>
      <Intro />
      <About blur={hide ? true : false} />
      <Skills blur={hide ? true : false} />
      <Experience blur={hide ? true : false} />
      <Projects blur={hide ? true : false} />
      <Contact blur={hide ? true : false} />
      <Credits />
      <SocialIcons />
      <ClickableEmail />
    </React.Fragment>
  );
};

export default Main;
