import React from "react";
import "./Experience.css";

const Projects = () => {
  return (
    <React.Fragment>
      <div id="experience"></div>
      <section className="experience">
        <div className="section-container">
          <h3>Experience</h3>
          <div className="sc__line"></div>
          <div className="sc-main experience-div flex row wrap">
            <div className="job-container flex column">
              <div className="jc__job-title">
                Software Engineer Fellow{" "}
                <a
                  className="jc__job-link jc--underline-1"
                  href="https://www.moringafellowship.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Moringa Fellowship
                </a>{" "}
                <a
                  className="jc__job-link jc--underline-2"
                  href="https://meetcafecito.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Cafecito
                </a>
              </div>
              <div className="jc__date">July 2020 - September 2020</div>
              <div className="jc__job-bullets">
                <ul>
                  <li className="line-height">
                    Maintained and improved frontend React code by working with
                    the design team to create a new UI.
                  </li>
                  <li className="line-height">
                    Was the sole engineer in charge of all frontend changes for
                    this project.
                  </li>
                  <li className="line-height">
                    Followed contributing guidelines such as BEM CSS, making
                    proper API calls, and using ESLint to write codeon top of
                    Cafecito’s legacy code.
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-container flex column">
              <div className="jc__job-title">
                Frontend Developer Intern{" "}
                <a
                  className="jc__job-link jc--underline-3"
                  href="https://www.esdleague.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Esports Development League
                </a>{" "}
              </div>
              <div className="jc__date">May 2020 - August 2020</div>
              <div className="jc__job-bullets">
                <ul>
                  <li className="line-height">
                    Worked closely with the CEO and CTO to create a UI giving
                    admins the ability to rearrange teams by drag and drop using
                    Sortable.js.
                  </li>
                  <li className="line-height">
                    Manipulated large amounts of data coming in JSON format.
                  </li>
                  <li className="line-height">
                    Built the UI using React frontend.
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-container flex column">
              <div className="jc__job-title">
                Software Engineer{" "}
                <a
                  className="jc__job-link"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @2720miles
                </a>
              </div>
              <div className="jc__date">December 2019 - March 2020</div>
              <div className="jc__job-bullets">
                <ul>
                  <li className="line-height">
                    Single handedly worked with the company to build a full
                    stack eCommerce web app using React, JavaScript, Node,
                    Express, PostgreSQL, and AWS S3.
                  </li>
                  <li className="line-height">
                    Hosted the application in a Virtual Machine on a
                    DigitalOcean droplet.
                  </li>
                  <li className="line-height">
                    Used Paypal API’s to securely allow a payment process from
                    customer to client.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
