import React, { useEffect } from "react";

import anime from "animejs";

const NameSVG = () => {
  useEffect(() => {
    //anime({
    //targets: "path",
    //strokeDashoffset: [anime.setDashoffset, 0],
    //easing: "easeInOutSine",
    //duration: 1500,
    //delay: function (el, i) {
    //return i * 100;
    //},
    //});
  }, []);
  return (
    <div id="lineDrawing" className="svg-container">
      <div className="svg-div">
        <svg width="100" height="100" viewBox="0 0 330 100">
          <g
            fill="#7ea3bd"
            fill-rule="evenodd"
            stroke-width="1"
            stroke="#7ea3bd"
          >
            <path d="M60 30 q10 20, 20 50 l5 -5 q-10 -20, -20 -50 q-2 3, -4 3.5z" />
            <path d="M80 80 q-30 -45, -65 -55 q3 -5, 5 -8 c90 10, 90 20, 70 30 c30 5, 30 10, -10 40 q-2 -3, -7 -3 c42 -30, 30 -30, 8 -33 q2 -3, 1 -5 c20 -5, 15 -20, -54 -22 q45 20, 57 50" />
            <path d="M105 30 q10 20, 20 50 l5 -5 q-10 -20, -20 -55 q2 5, -5 10" />
            <path d="M95 20 q20 20, 50 30 v7 q-10 -3, -15 0 q10 15, 30 20 q-5 3, -7 7 q-20 -10, -33 -30 q5 -5, 16 -2 q-20 -5, -40 -22z" />
            <path d="M135 30 q0 -30, 20 20 t10 -20 q5 -7, 5 -14 q10 25, 6 65 l-8 -1 v-3 c-4 6, -8 6, -33 -47z" />
            <path d="M180 30 q10 20, 20 50 l5 -5 q-10 -20, -20 -55 q2 5, -5 10" />
            <path d="M175 25 q20 30, 50 50 q4 -5, 7 -8 q-10 -28, -2 -60 q-5 6, -12 9 q-5 20, 2 45 q-35 -25,-40 -45z" />
            <path d="M240 20 q-1 5, -6 9 q30 17, 25 35 a1 3, 0, 0 1, -10 -55 q-5 10, -14 12 q-10 40, 15 60 q5 -10, 15 -8 q15 -20, -25 -55z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default NameSVG;
