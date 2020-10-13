import React, { useEffect, useState } from "react";

import Logo from "../ui/svg/Logo";
import Navbar from "../ui/Navbar";

import Lima from "../../images/lima-peru.jpg";
import SF from "../../images/san-francisco.jpg";

import anime from "animejs";
import "./Intro.scss";

const images = [{ Lima }, { SF }];
function _returnSlideShow(images) {
  return images.map((image) => {
    return (
      <div className="intro-img-container">
        <img className="iic--img" src={image} alt={`${image}`} />
      </div>
    );
  });
}

const Intro = () => {
  //const [index, setIndex] = useState(0);

  useEffect(() => {
    anime({
      targets: "path",
      translateX: 30,
      delay: 3000,
      duration: 1500,
      easing: "easeOutQuad",
    });

    anime({
      targets: "h2",
      opacity: 1,
      duration: 7000,
      delay: 3000,
    });

    //let index = 0;
    setInterval(() => {
      //const images = document.getElementsByClassName("iic--img");
      //const firstImage = document.querySelector(".iic--img");
      //const beforeImage = document.querySelector(".show");
      //console.log(beforeImage);
      //console.log();
      //if (beforeImage) {
      //document.querySelector(".show").classList.remove("show");
      ////beforeImage.classList.remove("show");
      ////console.log(firstImage);
      //const nextImage = firstImage.nextElementSibling;
      //console.log(nextImage);
      //if (nextImage) {
      //nextImage.classList.add("show");
      //} else {
      //firstImage.classList.add("show");
      //}
      //} else {
      //firstImage.classList.add("show");
      //}
      //const currentImage = images[index];
      //const nextImage = images[index + 1];
      //index += 1;
      //currentImage.style.opacity = 0;
      //nextImage.style.opacity = 0.2;
      //const newChild = document.createElement("div");
      //newChild.classList.add("intro-img-container");
      //newChild.appendChild(currentImage);
      //images.appendChild(currentImage);
      //console.log(newChild);
    }, 3000);
  }, []);

  return (
    <React.Fragment>
      <Navbar hide={true} />
      <header className="header-container">
        <div className="stars"></div>

        <div className="flex center column intro-container">
          <Logo />
          <svg viewBox="0 0 200 10" className="intro-svg-container">
            <path
              className="isc__path"
              //stroke="#5b9bbc"
              //stroke="#3b656e"
              stroke="#84dee3"
              strokeWidth="1.5"
              d="M0 5 h140"
              style={{ transform: "translateX(-150px)" }}
            />
          </svg>
          <h2 className="hc__h2">Software Engineer</h2>
        </div>
        <Navbar />
      </header>
    </React.Fragment>
  );
};

export default Intro;

//<header className="header-container">
//<div className="flex center column intro-container">
//<Logo />
//<svg viewBox="0 0 200 10" className="intro-svg-container">
//<path
//className="isc__path"
////stroke="#5b9bbc"
////stroke="#3b656e"
//stroke="#84dee3"
//strokeWidth="1.5"
//d="M0 5 h140"
//style={{ transform: "translateX(-150px)" }}
///>
//</svg>
//<h2 className="hc__h2">Software Engineer</h2>
//</div>
//<Navbar />
//</header>

//<div className="slideshow">
//<div className="intro-img-container">
//<img className="iic--img show" src={Lima} alt="Lima, Peru" />
//</div>
//<div className="intro-img-container ">
//<img className="iic--img show" src={SF} alt="San Francisco, CA" />
//</div>
//</div>
