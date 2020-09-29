import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex center navbar">
      <ol>
        <li>
          <a href="/#About">About</a>
        </li>
        <li>
          <a href="/">Experince</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Resume</a>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
