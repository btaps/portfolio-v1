import React, { useEffect, useState } from "react";
import anime from "animejs";

import "./Navbar.css";

const Navbar = ({ hide }) => {
  const [navPosition, setNavPosition] = useState(675);
  const [isAnimating, setAnimating] = useState(false);

  useEffect(() => {
    const nav = document.querySelector("nav");
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
      } else {
        nav.classList.add("hidden");
        nav.classList.remove("sticky");
      }
    };
  }, [navPosition]);

  return (
    <nav className={hide ? "flex center navbar hidden" : "flex center navbar"}>
      <ol>
        <li>
          <a href="/#about">About Me</a>
        </li>
        <li>
          <a href="/#experience">Experience</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
        <li>
          <a href="/resume.pdf">Resume</a>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
