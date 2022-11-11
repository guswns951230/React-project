import "../css/designer.css";

const Designer = () => {
  return (
    <div className="designer-container">
      <h1>Designer</h1>
      <div className="designer-form director-form">
        <img
          className="designer-img director"
          src="/img/profileimg.png"
          alt="designer jung image"
        />
        <div className="designer-text">
          <h3>Jung</h3>
          <p>Hair art director / designer</p>

          <p>
            마르꾸파리 센텀점 점장 <strong>Jung</strong> 입니다.
            <br />
            {/* 전문적인 1:1 맞춤형 디자인과 정성스러운 시술로 고객님께 가장
            아름다운 스타일을 찾아 드리겠습니다. */}
            점장 소개 text입니다.
            <br />
            <br />
            <strong>✓ 남성컷, 레이어드컷, 열펌 전문 Designer</strong>
          </p>
        </div>
      </div>

      <div className="designer-form manager-form">
        <div className="designer-text">
          <h3>Min</h3>
          <p>manager / designer</p>

          <p>
            마르꾸파리 센텀점 매니저 <strong>Min</strong> 입니다.
            <br />
            매니저 소개 text입니다.
            <br />
            <br />
            <strong>✓ 남성컷, 드라이 전문 Designer</strong>
            <br />
            <strong>✓ 현금 결제 Event 진행 중</strong>
          </p>
        </div>

        <img
          className="designer-img manager"
          src="/img/profileimg.png"
          alt="designer jung image"
        />
      </div>
    </div>
  );
};

export default Designer;
