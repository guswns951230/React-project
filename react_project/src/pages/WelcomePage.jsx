import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "../css/welcomePage.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="slick-slide welcomeImg"
              src="/img/welcomepage4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="slick-slide welcomeImg"
              src="/img/welcomepage2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="slick-slide welcomeImg"
              src="/img/welcomepage5.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="slick-slide welcomeImg"
              src="/img/welcomepage3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="slick-slide welcomeImg"
              src="/img/welcomepage1.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>

      <div className="textContainer">
        <h1>marcufali</h1>
        <p>
          소개내용입니다
          <br />
          소개문구입니다 블라블라블라블라
        </p>
      </div>

      <button
        onClick={() => {
          navigate("/home");
        }}
        className="enterBtn"
      >
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;&nbsp;&nbsp;View More
      </button>
    </>
  );
};

function SampleNextArrow() {
  return <FontAwesomeIcon icon={faChevronRight} style={{ display: "none" }} />;
}

function SamplePrevArrow() {
  return <FontAwesomeIcon icon={faChevronLeft} style={{ display: "none" }} />;
}

export default WelcomePage;
