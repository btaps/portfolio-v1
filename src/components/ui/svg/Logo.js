import React, { useEffect } from "react";
import "./Logo.css";

import anime from "animejs";

const LogoSVG = () => {
  useEffect(() => {
    const animation = anime.timeline({
      easing: "easeOutQuad",
    });

    animation
      .add({
        targets: [
          ".svg-attributes polygon",
          "feTurbulence",
          "feDisplacementMap",
        ],
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500,
      })
      .add({
        targets: ["polygon", "feTurbulence", "feDisplacementMap"],
        points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 92",
        baseFrequency: 0,
        scale: 1,
        duration: 1000,
      })
      .add({
        targets: "#hexagon #B",
        opacity: 1,
        duration: 1000,
      });
  }, []);

  return (
    <div class="svg-attributes flex center">
      <svg
        id="hexagon"
        width="200"
        height="200"
        viewBox="0 0 140 140"
        border="solid white"
      >
        <filter id="displacementFilter">
          <feTurbulence
            className="feTurbulence"
            baseFrequency=".05"
            type="turbulence"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            scale="15"
            in2="turbulence"
            in="SourceGraphic"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <g
          id="B"
          fill="#fff"
          font-size="30"
          font-weight="800"
          letter-spacing="4.16666603"
        >
          <text>
            <tspan x="12" y="76">
              Bruno
            </tspan>
          </text>
        </g>
        <polygon
          className="svg-container__polygon"
          fill="none"
          //stroke="#5b9bbc"
          //stroke="#3b656e"
          stroke="#7ea3bd"
          stroke-width="1"
          points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100"
        />
      </svg>
    </div>
  );
};

export default LogoSVG;
