import React, { useEffect } from "react";
import "./About.css";
import ProfilePic from "../../images/profile-pic.jpg";
import LinkedIn from "../ui/svg/LinkedIn.svg";
import Github from "../ui/svg/Github.svg";
import Facebook from "../ui/svg/Facebook.svg";
import Spotify from "../ui/svg/Spotify.svg";

import anime from "animejs";

const About = () => {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    //setNavPosition(header.offsetHeight - 52);
    window.onscroll = () => {
      //if (navPosition !== header.offsetHeight - 52) {
      ////setNavPosition(header.offsetHeight - 52);
      //}
      //console.log(header.offsetHeight - 52);
      ////console.log(navPosition);
      console.log(window.pageYOffset);
      //if (window.pageYOffset > navPosition) {
      //nav.classList.add("sticky");
      //nav.classList.remove("hidden");
      //} else {
      //nav.classList.add("hidden");
      //nav.classList.remove("sticky");
      //}
    };
  }, []);
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div id="about"></div>
      <section className="about">
        <div className="section-container">
          <h3>About Me</h3>
          <div className="sc__line"></div>
          <div className="sc-info-main flex">
            <div className="sc__img-container">
              <img src={ProfilePic} className="sc--img" alt="Profile pic" />
            </div>
            <div className="flex column">
              <div className="flex column sc__info-container">
                <div className="sc__header">Who is this guy?</div>
                <div className="sc__info">
                  Hi! I'm Bruno. One of the carziest things I've ever done was
                  make a career change which led me here. In early 2019, I
                  decided to change careers from being in the emergency medical
                  field to becoming a engineer. That's when I decided to join a
                  coding bootcamp in San Francisco. Since my bootcamp, I have
                  gained great real world experience through two internships.
                  During my time with the Moringa Fellowship as well as Esports
                  Development League, I was able to take charge and be
                  responsible for the frontend. Although most of my experience
                  in my internships has been in the frontend, I’m super
                  comfortable jumping anywhere in the stack if needed.
                </div>
                <ul className="sc__links">
                  <li className="sc__link">
                    <a
                      href="https://www.facebook.com/bruno.t.sierra/"
                      a
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Facebook} alt="Facebook" />
                    </a>
                  </li>
                  <li className="sc__link">
                    <a
                      href="https://github.com/btaps"
                      a
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Github} alt="Github" />
                    </a>
                  </li>
                  <li className="sc__link">
                    <a
                      href="https://www.linkedin.com/in/bruno-tapia-sierra/"
                      a
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                  </li>
                  <li className="sc__link">
                    <a
                      href="https://open.spotify.com/user/12131537984?si=lCMoz4MwSqy04HeBQhTIHA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Spotify} alt="Spotify" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex column sc__info-container">
                <div className="sc__header">What else is new?</div>
                <div className="sc__info">
                  Well, when I'm not being a nerd infront of my computer, I tend
                  to spend most of my free time being a dad to my baby of six
                  months. Even though daddy duties are full time work, I try to
                  sneak in some time for playing a bit of League of Legends.
                  Mostly when the baby is sleeping or we have a baby sitter.
                  Ever since the pandemic hit, my wife and I have started to
                  binge watch a lot of shows to pass the time. Some of my
                  favorites are "Hell's Kitchen", "The Simpsons", and "The King
                  of Queens". Ohh and Sundays are for football, go{" "}
                  <span class="Nin">Nin</span>
                  <span class="ers!">ers!</span>
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
