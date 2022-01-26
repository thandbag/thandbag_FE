import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { Button, Grid, Text } from "../elements/TbIndex";
import PwaPrompt from "./PwaPrompt";

// images
import Slide1 from "../static/images/slide_1.png";
import Slide2 from "../static/images/slide_2.png";
import Slide3 from "../static/images/slide_3.png";

// swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../shared/style.css";
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
            delay: 4000,
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
            <Grid position="absolute" flex="flex" bottom="32vh">
              <Text size="1.5rem" LHeight="2rem">
                오늘 하루 받은 스트레스만큼
                <br />
                생드백을 때려 보세요
              </Text>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox2 />
            <Grid position="absolute" flex="flex" bottom="32vh">
              <Text size="1.5rem" LHeight="2rem">
                다양한 사람들과
                <br />
                고민을 나눠보세요
              </Text>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox3 />
            <Grid position="absolute" flex="flex" bottom="28vh">
              <Text size="1.5rem" LHeight="2rem">
                내 고민을 함께 나눈 댓글에 
                <br />
                Like 버튼을 눌러보세요!
                <br />
                채팅으로 감사 인사를 보낼 수 있어요!
              </Text>
            </Grid>
            <ButtonBox>
              <PwaPrompt/>
              <Text
                deco="underline"
                decoP="under"
                cursor="pointer"
                _onClick={() => {
                  history.push("/main");
                }}
              >웹으로보기</Text>
            </ButtonBox>
          </SwiperSlide>
        </Swiper>
      </SlideBox>
    </React.Fragment>
  );
}

const SlideBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgBox1 = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  background-image: url(${Slide1});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
`;

const ImgBox2 = styled(ImgBox1)`
  background-image: url(${Slide2});
`;

const ImgBox3 = styled(ImgBox1)`
  background-image: url(${Slide3});
`;

const ButtonBox = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 13vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export default WelcomeTwo;
