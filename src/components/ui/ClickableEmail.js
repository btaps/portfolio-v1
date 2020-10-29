import React from "react";
import "./ClickableEmail.scss";

const ClickableEmail = () => {
  return (
    <React.Fragment>
      <a
        className="email-me-sticky flex column center"
        href="mailto:btapiasierra@outlook.com"
      >
        <div className="email__text">Email Me</div>
        <div className="email__line"></div>
      </a>
    </React.Fragment>
  );
};

export default ClickableEmail;
