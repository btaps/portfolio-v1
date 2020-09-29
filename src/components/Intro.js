import React, { useEffect } from "react";
import "./Intro.css";

import Logo from "./ui/svg/Logo";
import Navbar from "./ui/Navbar";

import anime from "animejs";

const Intro = () => {
  useEffect(() => {
    anime({
      targets: "path",
      translateX: 30,
      delay: 3000,
      duration: 1500,
      easing: "easeOutQuad",
    });

    anime({
      targets: "h2",
      opacity: 1,
      duration: 7000,
      delay: 3000,
    });
  }, []);

  return (
    <header className="header-container">
      <div className="flex center column intro-container">
        <Logo />
        <svg viewBox="0 0 200 10" className="intro-svg-container">
          <path
            className="isc__path"
            stroke="#5b9bbc"
            strokeWidth="2"
            d="M0 5 h140"
            style={{ transform: "translateX(-150px)" }}
          />
        </svg>
        <h2 className="hc__h2">Software Engineer</h2>
      </div>
      <Navbar />
    </header>
  );
};

export default Intro;
