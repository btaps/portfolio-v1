import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setExp1 } from "../../setup/store/popup";
import Cafecito1 from "../../images/Cafecito-1.png";
import Cafecito2 from "../../images/Cafecito-2.png";
import Cafecito3 from "../../images/Cafecito-3.png";
import Cafecito4 from "../../images/Cafecito-4.png";
import Cafecito5 from "../../images/Cafecito-5.png";
import Cafecito6 from "../../images/Cafecito-6.png";

import ESDL1 from "../../images/ESDL-1.png";
import ESDL2 from "../../images/ESDL-2.png";
import ESDL3 from "../../images/ESDL-3.png";
import ESDL4 from "../../images/ESDL-4.png";

import eCommerce1 from "../../images/2720-1.png";
import eCommerce2 from "../../images/2720-2.png";
import eCommerce3 from "../../images/2720-3.png";
import eCommerce4 from "../../images/2720-4.png";
import eCommerce5 from "../../images/2720-6.png";
//import eCommerce6 from "../../images/2720-6.png";
import "./Experience.scss";

const images1 = [
  Cafecito1,
  Cafecito2,
  Cafecito3,
  Cafecito4,
  Cafecito5,
  Cafecito6,
];

const images2 = [ESDL1, ESDL2, ESDL3, ESDL4];

const images3 = [eCommerce1, eCommerce2, eCommerce3, eCommerce4, eCommerce5];

function returnImage(imageArr, idx) {
  return (
    <img className="exp__img1" src={imageArr[idx]} alt="Cafecito experience" />
  );
}

const Experience = ({ blur }) => {
  const dispatch = useDispatch();
  const exp1 = useSelector((state) => state.popup.exp1);
  const [expOne, setExpOne] = useState(false);
  const [slideShow, setSlideShow] = useState(new Array(0));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(slideShow);
    //console.log(exp1);
    //if (exp1) {
    //const body = document.querySelector("#root");
    //console.log(body);
    ////body.style.filter = "blur(4px)"
    //}
    //console.log(blur);
  }, [exp1, blur]);

  return (
    <React.Fragment>
      <div id="experience"></div>
      <section className="experience">
        <div className={blur ? "section-container blur" : "section-container"}>
          <h3>Experience</h3>
          <div className="sc__line"></div>
          <div className="sc-main experience-div flex row wrap">
            <div className="job-container flex column">
              <div className="jc__job-title">
                Software Engineer Fellow{" "}
                <a
                  className="jc__job-link jc--underline-1"
                  href="https://www.moringafellowship.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Moringa Fellowship
                </a>{" "}
                <a
                  className="jc__job-link jc--underline-2"
                  href="https://meetcafecito.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Cafecito
                </a>
              </div>
              <div className="jc__date">July 2020 - September 2020</div>
              <div className="jc__job-bullets">
                <ul>
                  <li className="jc__job-duties line-height">
                    Maintained and improved frontend React code by working with
                    the design team to create a new UI.
                  </li>
                  <li className="jc__job-duties line-height">
                    Was the sole engineer in charge of all frontend changes for
                    this project.
                  </li>
                  <li className="jc__job-duties line-height">
                    Followed contributing guidelines such as BEM CSS, making
                    proper API calls, and using ESLint to write codeon top of
                    Cafecito’s legacy code.
                  </li>
                </ul>
              </div>
              <div className="jc__svg-div">
                <svg
                  onClick={() => {
                    setExpOne(true);
                    dispatch(setExp1(true));
                    setSlideShow(images1);
                  }}
                  stroke="#fff"
                  viewBox="0 0 50 50"
                  width="25px"
                  height="25px"
                >
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M5.001,45h36.488c1.453,0,2.698-1.042,2.953-2.473L49,17c0-1.104-0.896-2-2-2H10c-1.104,0-2,0.896-2,2L3.032,42.648C2.813,43.874,3.755,45,5.001,45z"
                  />
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M44,12v-1c0-1.105-0.895-2-2-2H18c-1.469,0-2.484-4-4-4H5C3.895,5,3,5.895,3,7v36"
                  />
                </svg>
              </div>
            </div>
            <div className="job-container flex column">
              <div className="jc__job-title">
                Frontend Developer Intern{" "}
                <a
                  className="jc__job-link jc--underline-3"
                  href="https://www.esdleague.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Esports Development League
                </a>{" "}
              </div>
              <div className="jc__date">May 2020 - August 2020</div>
              <div className="jc__job-bullets">
                <ul>
                  <li className="jc__job-duties line-height">
                    Worked closely with the CEO and CTO to create a UI giving
                    admins the ability to rearrange teams by drag and drop using
                    Sortable.js.
                  </li>
                  <li className="jc__job-duties line-height">
                    Manipulated large amounts of data coming in JSON format.
                  </li>
                  <li className="jc__job-duties line-height">
                    Built the UI using React frontend.
                  </li>
                </ul>
              </div>
              <div className="jc__svg-div">
                <svg
                  onClick={() => {
                    setExpOne(true);
                    dispatch(setExp1(true));
                    setSlideShow(images2);
                  }}
                  stroke="#fff"
                  viewBox="0 0 50 50"
                  width="25px"
                  height="25px"
                >
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M5.001,45h36.488c1.453,0,2.698-1.042,2.953-2.473L49,17c0-1.104-0.896-2-2-2H10c-1.104,0-2,0.896-2,2L3.032,42.648C2.813,43.874,3.755,45,5.001,45z"
                  />
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M44,12v-1c0-1.105-0.895-2-2-2H18c-1.469,0-2.484-4-4-4H5C3.895,5,3,5.895,3,7v36"
                  />
                </svg>
              </div>
            </div>
            <div className="job-container flex column">
              <div className="jc__job-title">
                Software Engineer{" "}
                <a
                  className="jc__job-link"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @2720miles
                </a>
              </div>
              <div className="jc__date">December 2019 - March 2020</div>
              <div className="jc__job-bullets">
                <ul>
                  <li className="jc__job-duties line-height">
                    Single handedly worked with the company to build a full
                    stack eCommerce web app using React, JavaScript, Node,
                    Express, PostgreSQL, and AWS S3.
                  </li>
                  <li className="jc__job-duties line-height">
                    Hosted the application in a Virtual Machine on a
                    DigitalOcean droplet.
                  </li>
                  <li className="jc__job-duties line-height">
                    Used Paypal API’s to securely allow a payment process from
                    customer to client.
                  </li>
                </ul>
              </div>
              <div className="jc__svg-div">
                <svg
                  onClick={() => {
                    setExpOne(true);
                    dispatch(setExp1(true));
                    setSlideShow(images3);
                  }}
                  stroke="#fff"
                  viewBox="0 0 50 50"
                  width="25px"
                  height="25px"
                >
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M5.001,45h36.488c1.453,0,2.698-1.042,2.953-2.473L49,17c0-1.104-0.896-2-2-2H10c-1.104,0-2,0.896-2,2L3.032,42.648C2.813,43.874,3.755,45,5.001,45z"
                  />
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M44,12v-1c0-1.105-0.895-2-2-2H18c-1.469,0-2.484-4-4-4H5C3.895,5,3,5.895,3,7v36"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        //onClick={() => {
        //setExpOne(false);
        //dispatch(setExp1(false));
        //}}
        className={expOne ? "pop-up-div pop-up-div--show" : "pop-up-div"}
      >
        <div className="left-arrow arrow">
          <svg
            onClick={() => {
              if (index === 0) {
                setIndex(slideShow.length - 1);
              } else {
                setIndex(index - 1);
              }
            }}
            fill="#fff"
            width="60px"
            height="60px"
            viewBox="-18 -18 572.00902 572"
          >
            <path d="m279.628906 143.855469c-4.851562-4.855469-12.722656-4.855469-17.582031 0-4.855469 4.851562-4.855469 12.726562 0 17.582031l94.164063 94.164062h-250.191407c-6.886719 0-12.472656 5.585938-12.472656 12.472657 0 6.890625 5.585937 12.472656 12.472656 12.472656h250.066407l-94.164063 94.164063c-2.335937 2.328124-3.648437 5.496093-3.648437 8.792968 0 3.300782 1.3125 6.460938 3.648437 8.792969 2.335937 2.355469 5.535156 3.660156 8.855469 3.617187 3.308594-.015624 6.484375-1.3125 8.851562-3.617187l115.367188-115.363281c2.347656-2.351563 3.65625-5.542969 3.621094-8.859375-.023438-3.308594-1.320313-6.472657-3.621094-8.851563zm0 0" />
            <path d="m268.15625-.0742188c-108.457031-.0195312-206.242188 65.3085938-247.746094 165.5117188-41.496094 100.207031-18.542968 215.542969 58.171875 292.210938 104.703125 104.703124 274.453125 104.703124 379.152344 0 104.699219-104.695313 104.699219-274.445313 0-379.148438-50.167969-50.453125-118.429687-78.746094-189.578125-78.5742188zm0 511.3554688c-134.074219 0-243.203125-109.132812-243.203125-243.207031s109.128906-243.203125 243.203125-243.203125 243.207031 109.128906 243.207031 243.203125-109.132812 243.207031-243.207031 243.207031zm0 0" />
          </svg>
        </div>
        <div className="exp">
          <svg
            className="close"
            onClick={() => {
              setExpOne(false);
              dispatch(setExp1(false));
              setIndex(0);
            }}
            viewBox="0 0 128 128"
            width="40px"
            height="40px"
            fill="#7ea3bd"
          >
            <path
              fill="#fff"
              d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"
              transform="rotate(-45.001 64 64.001)"
            />
            <path d="M64,117c-14.2,0-27.5-5.5-37.5-15.5c-20.7-20.7-20.7-54.3,0-75C36.5,16.5,49.8,11,64,11c14.2,0,27.5,5.5,37.5,15.5c10,10,15.5,23.3,15.5,37.5s-5.5,27.5-15.5,37.5C91.5,111.5,78.2,117,64,117z M64,17c-12.6,0-24.4,4.9-33.2,13.8c-18.3,18.3-18.3,48.1,0,66.5C39.6,106.1,51.4,111,64,111c12.6,0,24.4-4.9,33.2-13.8S111,76.6,111,64s-4.9-24.4-13.8-33.2S76.6,17,64,17z" />
            <path d="M53.4,77.6c-0.8,0-1.5-0.3-2.1-0.9c-1.2-1.2-1.2-3.1,0-4.2l21.2-21.2c1.2-1.2,3.1-1.2,4.2,0c1.2,1.2,1.2,3.1,0,4.2L55.5,76.7C54.9,77.3,54.2,77.6,53.4,77.6z" />
            <path d="M74.6,77.6c-0.8,0-1.5-0.3-2.1-0.9L51.3,55.5c-1.2-1.2-1.2-3.1,0-4.2c1.2-1.2,3.1-1.2,4.2,0l21.2,21.2c1.2,1.2,1.2,3.1,0,4.2C76.1,77.3,75.4,77.6,74.6,77.6z" />
          </svg>
          {returnImage(slideShow, index)}
        </div>
        <div className="arrow">
          <svg
            onClick={() => {
              if (index === slideShow.length - 1) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
            fill="#fff"
            width="60px"
            height="60px"
            viewBox="-18 -18 572.00902 572"
          >
            <path d="m279.628906 143.855469c-4.851562-4.855469-12.722656-4.855469-17.582031 0-4.855469 4.851562-4.855469 12.726562 0 17.582031l94.164063 94.164062h-250.191407c-6.886719 0-12.472656 5.585938-12.472656 12.472657 0 6.890625 5.585937 12.472656 12.472656 12.472656h250.066407l-94.164063 94.164063c-2.335937 2.328124-3.648437 5.496093-3.648437 8.792968 0 3.300782 1.3125 6.460938 3.648437 8.792969 2.335937 2.355469 5.535156 3.660156 8.855469 3.617187 3.308594-.015624 6.484375-1.3125 8.851562-3.617187l115.367188-115.363281c2.347656-2.351563 3.65625-5.542969 3.621094-8.859375-.023438-3.308594-1.320313-6.472657-3.621094-8.851563zm0 0" />
            <path d="m268.15625-.0742188c-108.457031-.0195312-206.242188 65.3085938-247.746094 165.5117188-41.496094 100.207031-18.542968 215.542969 58.171875 292.210938 104.703125 104.703124 274.453125 104.703124 379.152344 0 104.699219-104.695313 104.699219-274.445313 0-379.148438-50.167969-50.453125-118.429687-78.746094-189.578125-78.5742188zm0 511.3554688c-134.074219 0-243.203125-109.132812-243.203125-243.207031s109.128906-243.203125 243.203125-243.203125 243.207031 109.128906 243.207031 243.203125-109.132812 243.207031-243.207031 243.207031zm0 0" />
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
