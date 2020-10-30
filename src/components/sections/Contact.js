import React from "react";
import { useSelector } from "react-redux";
import "./Contact.scss";

const Contact = ({ blur }) => {
  const email = useSelector((state) => state.portfolio.email);

  return (
    <React.Fragment>
      <div id="contact"></div>
      <section className="contact">
        <div className={blur ? "section-container blur" : "section-container"}>
          <h3>Get In Touch</h3>
          <div className="sc__line"></div>
          <div className="sc-main flex column center">
            <div className="contact-text line-height">
              If you are looking for someone to help you build a website or join
              your team, shoot me an email and lets chat.
            </div>
            <a
              className="contact-email-link"
              href="mailto:btapiasierra@outlook.com"
            >
              <div className="contact-email">{`${email}`}</div>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
