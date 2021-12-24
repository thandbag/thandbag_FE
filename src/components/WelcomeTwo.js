import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

// images
import test_a from "../static/images/test_a.gif";
import test_b from "../static/images/test_b.jpg";
import test_c from "../static/images/test_c.jpg";
import test_d from "../static/images/test_d.png";

// swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/SwiperStyles.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

function WelcomeTwo() {
  return (
    <React.Fragment>
      <SlideBox>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          className="mySwiper"
        >
          <SwiperSlide>
            <ImgBox1 />
            <TextBox>
              오늘 하루 힘들었던 일이 있었다면<br />
              나에게 이야기해 줄래? <br />
              내가 들어주고 비슷한 성향의<br />
              친구도 소개 시켜줄게!!
            </TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox2 />
            <TextBox>
              오늘 하루 힘들었던 일이 있었다면<br />
              나에게 이야기해 줄래? <br />
              내가 들어주고 비슷한 성향의<br />
              친구도 소개 시켜줄게!!
            </TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox3 />
            <TextBox>
              오늘 하루 힘들었던 일이 있었다면<br />
              나에게 이야기해 줄래? <br />
              내가 들어주고 비슷한 성향의<br />
              친구도 소개 시켜줄게!!
            </TextBox>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox4 />
            <TextBox>
              오늘 하루 힘들었던 일이 있었다면<br />
              나에게 이야기해 줄래? <br />
              내가 들어주고 비슷한 성향의<br />
              친구도 소개 시켜줄게!!
            </TextBox>
          </SwiperSlide>
        </Swiper>
      </SlideBox>
      <ButtonBox>
        <Button
          onClick={() => {
            history.push("/login");
          }}
        >
          시작하기
        </Button>
      </ButtonBox>
    </React.Fragment>
  );
}

const SlideBox = styled.div`
  width: 100%;
  height: 84%;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  z-index: 9999;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  color: #fff;
  background-color: #FF5454;
  border: none;
  font-size: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;

const ImgBox1 = styled.div`
  width: 100%;
  height: 65%;
  background-image: url(${test_c});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ImgBox2 = styled(ImgBox1)`
  background-image: url(${test_d});
`;

const ImgBox3 = styled(ImgBox1)`
  background-image: url(${test_b});
`;

const ImgBox4 = styled(ImgBox1)`
  background-image: url(${test_a});
`;


const TextBox = styled.div`
  width: 100%;
  height: 35%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: 30px;
  padding: 0 20px 40px 0;
  font-weight: bold;
`;

export default WelcomeTwo;