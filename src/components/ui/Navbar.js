import React, { useEffect, useState } from "react";
import anime from "animejs";
import LogoSVG from "../ui/svg/Name";

import "./Navbar.css";

const Navbar = ({ hide }) => {
  const [navPosition, setNavPosition] = useState(675);

  useEffect(() => {
    const nav = document.querySelector("nav");
    const navLogo = document.querySelector("#logo");
    const header = document.querySelector("header");
    setNavPosition(header.offsetHeight - 52);
    window.onscroll = () => {
      if (navPosition !== header.offsetHeight - 52) {
        setNavPosition(header.offsetHeight - 52);
      }
      //console.log(header.offsetHeight - 52);
      ////console.log(navPosition);
      //console.log(window.pageYOffset);
      if (window.pageYOffset > navPosition) {
        nav.classList.add("sticky");
        nav.classList.remove("hidden");
        navLogo.classList.remove("hidden");
      } else {
        nav.classList.add("hidden");
        nav.classList.remove("sticky");
        navLogo.classList.add("hidden");
      }
    };
  }, [navPosition]);

  return (
    <React.Fragment>
      <nav
        className={hide ? "flex center navbar hidden" : "flex center navbar"}
      >
        <div className="nav-logo hidden" id="logo">
          <a href="/">
            <LogoSVG />
          </a>
        </div>
        <ol>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#experience">Experience</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/resume.pdf">Resume</a>
          </li>
        </ol>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
