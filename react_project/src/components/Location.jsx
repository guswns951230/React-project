import { useEffect } from "react";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "../css/location.css";

const Location = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(35.178642, 129.1271746);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    let marker = new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <div className="location-container">
      <p className="location-title">
        <FontAwesomeIcon icon={faLocationDot} />
        &nbsp;오시는 길
      </p>
      <p>
        ✓ 동해선 센텀역에서 <strong>5분</strong> 거리에 있습니다.
      </p>
      <div className="map-container">
        <div id="map" ref={mapElement}></div>
        <div className="center-info-box">
          <p className="center-info-label">marcufali</p>
          <span className="center-info-value">
            부산광역시 해운대구 OOO로 00번길 12
          </span>
          <p className="center-info-label">전화번호</p>
          <span className="center-info-value">051-987-6543</span>
          <p className="center-info-label">운영 시간</p>
          <p className="center-info-value">
            • 월 ~ 금 (10:00 ~ 19:00)
            <br />
            • 토 ~ 일 (10:00 ~ 18:00)
            <br />• 매주 <strong>화요일</strong>은 정기 휴무입니다.
          </p>
          <p classname="center-info-value">
            * 마르꾸파리 센텀점은 예약 고객을 우선하여 시술하오니 방문전 꼭
            매장으로 문의바랍니다.
            <br />* 펌, 염색의 경우 고객님의 모발 컨디션과 길이에 따라
            시술시간이 지연될 수 있음을 양해부탁드립니다.
          </p>
        </div>

        {/* <div classname="center-info-box">
          <div classname="center-info">
            <p classname="center-info-label">마르꾸파리 센텀점</p>
            <p classname="center-info-value">
              부산광역시 해운대구 해운대로 219번길 21
            </p>
          </div>
          <div classname="center-info">
            <p classname="center-info-label">전화번호</p>
            <p classname="center-info-value">051-784-8799</p>
          </div>
          <div classname="center-info">
            <p classname="center-info-label">운영 시간</p>
            <div classname="center-info-value">
              <p classname="center-info-value-main">
                • 월 ~ 금 (10:00 ~ 19:00)
                <br />
                • 토 ~ 일 (10:00 ~ 18:00)
                <br />• 매주 <strong>화요일</strong>은 정기 휴무입니다.
              </p>
              <p classname="center-info-value-sub">
                * 마르꾸파리 센텀점은 예약 고객을 우선하여 시술하오니
                <br /> 방문전 꼭 매장으로 문의바랍니다.
                <br />* 펌, 염색의 경우 고객님의 모발 컨디션과 길이에 따라
                <br />
                시술시간이 지연될 수 있음을 양해부탁드립니다.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Location;
