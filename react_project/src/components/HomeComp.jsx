import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "../css/homeComp.css";

const HomeComp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-section1">
        <img
          className="home-section1-img"
          src="/img/homepage1.jpg"
          alt="home-image-1"
        />
        <h1>『 그 대 만 을 &nbsp;위 한 』</h1>
        <p>
          프리미엄 헤어 <strong>『마르꾸파리』</strong>는 1인 예약제를 시행하여
          <br />
          고객 한 분만을 위한 1:1 헤어 솔루션을 진행합니다.
          <br />
          <br />
          편안한 분위기와 만족스러운 서비스를 제공하기 위해
          <br />
          항상 최선을 다하겠습니다.
        </p>
      </div>

      <div className="home-section2">
        <p>
          <span className="home-section2-title">『 PROFESSIONAL 』</span>
          <br />
          <span className="home-section2-text">디자이너 홍보 문구</span>
        </p>
        <img
          className="home-section2-img"
          src="/img/homepage2.jpg"
          alt="home-image-2"
        />
      </div>

      <div className="home-section-event">
        <img
          className="home-section-event-img"
          src="/img/homepage3.jpg"
          alt="home-image-3"
        />
        <div className="home-section-event-box">
          <p className="home-section-event-title">『 EVENT 』</p>
          <p className="home-section-event-text">
            진행중인 Event를 확인하고 혜택을 누리세요!
          </p>
          <button
            onClick={() => {
              navigate("/event");
            }}
            className="eventBtn"
          >
            <FontAwesomeIcon icon={faPlus} />
            &nbsp;&nbsp;&nbsp;View Event
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeComp;
