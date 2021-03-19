import React from "react";
import "./Skills.scss";

const Skills = ({blur}) => {
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
      <div id="skills"></div>
      <section className="skills">
        <div
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}
        >
          <div className={blur ? "section-container blur" : "section-container"}>
            <h3>Technical Skills</h3>
            <div className="sc__line"></div>
            <div className="sc-main flex column">
              <div className="skills__text">
                Here is the stack I have most recently worked with:
            </div>
              <div className="sk__pref-stack flex row">
                <div className="sk-main-skill">React</div>
                <div className="sk-main-skill">Redux</div>
                <div className="sk-main-skill">Python</div>
                <div className="sk-main-skill">Django</div>
                <div className="sk-main-skill">MySQL</div>
              </div>
              <div className="sk__skills-header">
                Frequently Used Languages, Technologies and Software
            </div>
              <div className="sk__rest-skills flex row center">
                <ul className="sk__skill-list">
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
                <ul className="sk__skill-list">
                  <li>GraphQL</li>
                  <li>PostgresQL</li>
                  <li>SQLite</li>
                  <li>macOS</li>
                  <li>Linux</li>
                  <li>ESLint</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skills;
