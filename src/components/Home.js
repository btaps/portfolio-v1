import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="navbar">
          <ol>
            <li>
              <Link href="/#About">About</Link>
            </li>
            <li>
              <Link href="/">Experince</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Resume</Link>
            </li>
          </ol>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Home;
