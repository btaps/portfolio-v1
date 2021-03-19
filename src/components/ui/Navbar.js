import React, {useEffect, useState} from "react";

import "./Navbar.scss";

const Navbar = ({hide, fade}) => {
  const [navPosition, setNavPosition] = useState(675);

  useEffect(() => {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    const navOpacity = document.getElementById("nav-opacity");
    let prevScrollpos = window.pageYOffset;
    setNavPosition(header.offsetHeight - 52);

    window.onscroll = () => {
      if (navPosition !== header.offsetHeight - 52) {
        setNavPosition(header.offsetHeight - 52);
      }

      if (window.pageYOffset > navPosition) {
        nav.classList.add("sticky");
        nav.classList.remove("hidden");
      } else {
        nav.classList.add("hidden");
        nav.classList.remove("sticky");
        navOpacity.style.opacity = "1";
      }
      if (window.pageYOffset > navPosition + 50) {
        navOpacity.style.transition = "none";
        navOpacity.style.opacity = "0";
      }
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
      } else {
        nav.style.top = "-3.5rem";
      }
      prevScrollpos = currentScrollPos;
    };
  }, [navPosition]);

  return (
    <React.Fragment>
      <nav
        className={hide ? "flex center navbar hidden" : "flex center navbar"}
        id={fade ? "nav-opacity" : null}
      >
        <ol className="flex">
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
    </React.Fragment>
  );
};

export default Navbar;
