import React from "react";
import "./Resume.scss";
import PDF from "../ui/Resume.pdf";

const Resume = () => {
  return (
    <div className="resume-container">
      <embed className="resume" src={PDF} type="application/pdf" />
    </div>
  );
};

export default Resume;
