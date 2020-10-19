import React from "react";
import "./SocialIcons.css";

import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import Facebook from "./Facebook";
import GitLab from "./GitLab";

const SocialLogos = () => {
  return (
    <React.Fragment>
      <div className="social-links">
        <ul>
          <li>
            <a
              href="https://github.com/btaps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </li>
          <li>
            <a
              href="https://gitlab.com/btaps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitLab />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bruno-tapia-sierra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/bruno.t.sierra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SocialLogos;
