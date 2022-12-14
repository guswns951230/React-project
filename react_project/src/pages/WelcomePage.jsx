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
  speed: 800,
  autoplaySpeed: 3000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Slider {...settings}>
        <img
          className="slick-slide welcomeImg"
          src="https://guswns951230.github.io/React-project/img/welcomepage4.jpg"
          alt=""
        />

        <img
          className="slick-slide welcomeImg"
          src="https://guswns951230.github.io/React-project/img/welcomepage2.jpg"
          alt=""
        />

        <img
          className="slick-slide welcomeImg"
          src="https://guswns951230.github.io/React-project/img/welcomepage5.jpg"
          alt=""
        />

        <img
          className="slick-slide welcomeImg"
          src="https://guswns951230.github.io/React-project/img/welcomepage3.jpg"
          alt=""
        />

        <img
          className="slick-slide welcomeImg"
          src="https://guswns951230.github.io/React-project/img/welcomepage1.jpg"
          alt=""
        />
      </Slider>

      <div className="textContainer">
        <h1>marcufali</h1>
        <br />
        <p>
          『 당신이 가진 자연스러운 아름다움 』
          <br />
          Premium hair solution <strong>marcufali</strong>
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
