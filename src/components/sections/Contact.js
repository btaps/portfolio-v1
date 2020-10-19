import React from "react";
import { useSelector } from "react-redux";
import "./Contact.css";

const Contact = () => {
  const email = useSelector((state) => state.portfolio.email);

  return (
    <React.Fragment>
      <div id="contact"></div>
      <section className="contact">
        <div className="section-container">
          <h3>Get In Touch</h3>
          <div className="sc__line"></div>
          <div className="sc-main flex column center">
            <div className="contact-text line-height">
              One of my goals is to bring diversity into the tech field. If you
              are looking for someone to help you build a website or join your
              team, shoot me an email and lets chat. Would love to learn more
              about it.
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
