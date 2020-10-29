import React, { useEffect } from "react";
import "./Projects.scss";

const Projects = ({ blur }) => {
  return (
    <React.Fragment>
      <div id="contact"></div>
      <section className="contact">
        <div className={blur ? "section-container blur" : "section-container"}>
          <h3>Some Projects</h3>
          <div className="sc__line"></div>
          <div className="sc-main flex column center">
            <div className="contact-text line-height">
              Here goes all the projects
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
