import React from "react";
import ProfilePic from "../../images/profile-pic.jpg";
import LinkedIn from "../ui/svg/LinkedIn";
import GitHub from "../ui/svg/GitHub";
import Facebook from "../ui/svg/Facebook";

import "./About.scss";

const About = ({blur}) => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <React.Fragment>
      <div id="about"></div>
      <section className="about">
        <div
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}
        >
          <div className={blur ? "section-container blur" : "section-container"}>
            <h3>About Me</h3>
            <div className="sc__line"></div>
            <div className="sc-main flex">
              <div className="sc__img-container flex center">
                <img src={ProfilePic} className="sc--img" alt="Profile pic" />
              </div>
              <div className="flex column">
                <div className="flex column sc__info-container">
                  <div className="sc__header">Hello!</div>
                  <div className=" line-height sc__info">
                    I'm Bruno, a Software Engineer with a focus in the frontend of the stack. I love working on tough projects and seeing my work live on the internet! My goal is to build high quality websites, features, apps, or anything in between! </div>
                  <ul className="sc__links flex">
                    <li className="sc__link">
                      <a
                        href="https://github.com/btaps/"
                        a
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub />
                      </a>
                    </li>
                    <li className="sc__link">
                      <a
                        href="https://www.linkedin.com/in/bruno-tapia-sierra/"
                        a
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedIn />
                      </a>
                    </li>
                    <li className="sc__link">
                      <a
                        href="https://www.facebook.com/bruno.t.sierra/"
                        a
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex column sc__info-container">
                  <div className="sc__header">Life Outside of Coding</div>
                  <div className="line-height sc__info">
                    On a personal level, I have lived in the Bay Area for most of my life, but I was actually born in Peru and lived there until I was 7. I also just became a dad last year and that has definitely taught me to have patience, be humble, and enjoy life.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
