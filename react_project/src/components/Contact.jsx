import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faComments,
  faWonSign,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "../css/contact.css";

const Contact = () => {
  return (
    <div className="info-container">
      <div className="price-container">
        <p className="info-title title-first">
          <FontAwesomeIcon icon={faWonSign} />
          &nbsp;요금 안내
        </p>
        <p className="price-text">
          ✓ 남성 커트 15,000원
          <br />
          ✓ 여성 커트 20,000원
          <br />
          <br />
          "염색 및 펌은 고객님의{" "}
          <strong>모발 컨디션과 길이에 따라 가격이 변동</strong>됩니다.
          <br />
          아래 방법으로 매장에 문의 해주시기 바랍니다."
        </p>
      </div>

      <div className="contact-container">
        <p className="info-title title-second">
          {" "}
          <FontAwesomeIcon icon={faComments} />
          &nbsp;시술에 관해 궁금하신 점을 물어보세요.
        </p>

        <div className="contact-form">
          <div className="contact-box call">
            <div className="icon-box call-box">
              <FontAwesomeIcon className="icon" icon={faPhone} />
            </div>

            <p className="contact-text">
              <strong>직접 연락</strong>
              <br />
              <strong>'매장번호'</strong>으로 직접 전화를 주시면 친절히 상담해
              드리겠습니다.
            </p>
          </div>

          <div className="contact-box kakao">
            <div className="icon-box  kakao-box">
              <FontAwesomeIcon className="icon" icon={faComment} />
            </div>

            <p className="contact-text">
              <strong>Kakao Talk</strong>
              <br />
              카카오톡 채널 <strong>마르꾸파리 센텀점</strong>을 추가하고 빠르게
              상담을 받아보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
