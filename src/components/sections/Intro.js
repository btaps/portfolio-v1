import React, { useEffect } from "react";

import Logo from "../ui/svg/Logo";
import Navbar from "../ui/Navbar";

import anime from "animejs";
import "./Intro.scss";

const Intro = () => {
  useEffect(() => {
    anime({
      targets: ".isc__path",
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
    <React.Fragment>
      <Navbar hide={true} />
      <header className="header-container">
        <div className="stars1"></div>
        <div className="stars2"></div>

        <div className="flex center column intro-container">
          <Logo />
          <svg viewBox="0 0 200 10" className="intro-svg-container">
            <path
              className="isc__path"
              stroke="#7ea3bd"
              strokeWidth="1"
              d="M0 5 h140"
              style={{ transform: "translateX(-150px)" }}
            />
          </svg>
          <div className="flex">
            <div className="ic__h2-software">
              <h2 className="hc__h2">Software</h2>
            </div>{" "}
            <div className="ic__h2-engineer">
              <h2 className="hc__h2">Engineer</h2>
            </div>
          </div>
        </div>
        <Navbar fade={true} />
      </header>
    </React.Fragment>
  );
};

export default Intro;
