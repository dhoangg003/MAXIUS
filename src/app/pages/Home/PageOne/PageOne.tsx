"use client";
import "./pageOne.scss";

const banner = "https://tse2.mm.bing.net/th?id=OIP.gfaXwXwZXqXBU2TiXwHX8QHaEr&pid=Api&P=0&h=220"
const PageOne = () => {
  const BannerImage = () => (
    <div className="banner">
      <img className="Back" src={banner} alt="banner" />
    </div>
  );

  return (
    <div className="page-one">
      <div className="page-one-content">
        <div className="inner-content">
          <BannerImage />
          <div className="first_">
            <div className="md-text">
              <br />
              MAX I & US
            </div>

            {/* Nội dung tiếng Hàn */}
            {/* <div className="text-decs ko">
              <span className="text-one ko">
                <span className="ko">맥시우스는 자체 개발한 시스템반도체를</span>
                <span className="ko">적용하여 고성능 서버를 제조</span>
                <span className="ko">판매하는 회사로 IDC와 IPFS IDC 구축</span>
                <span className="ko">사업과 개발 및 운영 컨설팅 사업을</span>
                <span className="ko">진행하고 있습니다.</span>
              </span>
            </div> */}

            {/* Nội dung tiếng Anh */}
            <div className="text-decs en">
              <span className="text-one en">
                <span className="en">Maxius is the only self-developed </span>
                <span className="en">semiconductor company that </span>
                <span className="en">focuses on developing High-Performance </span>
                <span className="en">Servers. We provide specialized </span>
                <span className="en">solutions tailored towards different </span>
                <span className="en">sectors of the IT industry and strive </span>
                <span className="en">to break into the global market as a </span>
                <span className="en">leader in server technology.</span>
              </span>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
