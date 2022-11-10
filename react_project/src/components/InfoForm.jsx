const InfoForm = () => {
  return (
    <div>
      <p>Info form</p>
      <div className="price">
        <div className="">
          ✓ 남성 커트 15,000원
          <br />✓ 여성 커트 18,000원
        </div>
        <br />
        <div className="">
          "염색 및 펌은 고객님의 모발 컨디션과 길이에 따라 가격이 변동됩니다.
          <br />
          아래 방법으로 매장에 문의 해주시기 바랍니다."
        </div>
      </div>

      <p>✓ 시술에 관해 궁금하신 점을 물어보세요.</p>
      <div className="contact">
        <div className="contact_call">
          <div className="">
            {/* <img src="images/call-icon.png" alt="phone call icon" className="call__image"> */}
          </div>
          <div className="">
            <strong>직접 연락</strong>
          </div>
          <div className="">
            <strong>051-784-8799</strong>으로 직접 전화를 주시면 친절히 상담해
            드리겠습니다.
          </div>
        </div>

        <div className="contact_kakao">
          <div className="">
            {/* <img src="images/kakao-icon.png" alt="kakao talk icon" className="kakao-talk__image"> */}
          </div>
          <div className="">
            <strong>카카오톡</strong>
          </div>
          <div className="">
            카카오톡 채널 <strong>마르꾸파리 센텀점</strong>을 추가하고 빠르게
            상담을 받아보세요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
