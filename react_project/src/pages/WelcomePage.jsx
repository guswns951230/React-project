import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
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
              src="/img/welcomepage1.jpg"
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
              src="/img/welcomepage4.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>

      <Button
        // variant="outline-dark"
        onClick={() => {
          navigate("/home");
        }}
        className="enterBtn"
      >
        start
      </Button>
    </>
  );
};

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={className}
      onClick={onClick}
      style={{ color: "#0d6efd", display: "none" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={className}
      onClick={onClick}
      style={{ color: "#0d6efd", display: "none" }}
    />
  );
}

export default WelcomePage;
