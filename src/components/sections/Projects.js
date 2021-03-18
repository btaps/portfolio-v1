import React, {useEffect} from "react";
import "./Projects.scss";

import GitHub from "../ui/svg/GitHub";
import ExternalLink from "../ui/svg/ExternalLink";

/*
 * NOTE: Need to add href links to the Netflix Project. Coming soon...
 */
const Projects = ({blur}) => {
  return (
    <React.Fragment>
      <div id="projects"></div>
      <section className="projects">
        <div className={blur ? "section-container blur" : "section-container"}>
          <h3>Projects</h3>
          <div className="sc__line"></div>
          <div className="sc-main projects__grid-div">
            <div className="projects__project-div">
              <div className="flex column space-between project-inner">
                <header>
                  <div className="project-top flex">
                    <div className="project-links">
                      <a
                        href="https://github.com/btaps/Simpsons-App"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub />
                      </a>
                      <a
                        href="http://www.simpsons-character-app.xyz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title">Simpsons Character App</h3>
                  <div className="project-description">
                    <p>
                      Being a Simpsons fan, I decided to create my own website
                      showcasing some of my favorite characters. I decided to
                      use this project to practice my GraphQL skills instead of
                      using RESTfull API's. The website is hosted on a
                      DigitalOcean server using Nginx.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className="flex project-tech-stack">
                    <li>React/Redux</li>
                    <li>Node</li>
                    <li>Sequelize</li>
                    <li>GraphQL</li>
                    <li>MySQL</li>
                  </ul>
                </footer>
              </div>
            </div>
            <div className="projects__project-div">
              <div className="flex column space-between project-inner">
                <header>
                  <div className="project-top flex">
                    <div className="project-links">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title">Netflix Clone App</h3>
                  <div className="project-description">
                    <p>
                      Having an interest in the frontend, I decided to make a
                      clone of the Netflix dashboard website. This app was made
                      using a movie API to populate all the movie fields, show
                      trailers, get movie description, and get movie poster.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className="flex project-tech-stack">
                    <li>React/Redux</li>
                    <li>Movie API</li>
                  </ul>
                </footer>
              </div>
            </div>
            <div className="projects__project-div">
              <div className="flex column space-between project-inner">
                <header>
                  <div className="project-top flex">
                    <div className="project-links">
                      <a
                        href="https://github.com/btaps/portfolio-v1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub />
                      </a>
                      <a
                        href="https://brunotapiasierra.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title">Portfolio Website</h3>
                  <div className="project-description">
                    <p>
                      Used my skills in React and Redux to create my portfolio.
                      I decided to give it an outer space look to it, influenced
                      from my love of the Star Wars movies. Used namecheap.com
                      to purchase a domain and got it hosted on Netlify.
                    </p>
                  </div>
                </header>
                <footer>
                  <ul className="flex project-tech-stack">
                    <li>React/Redux</li>
                    <li>Netlify</li>
                  </ul>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
