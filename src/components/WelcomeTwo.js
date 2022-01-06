import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { Button, Grid, Text } from "../elements/TbIndex";

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
            <Grid position="absolute" flex="flex" bottom="32vh">
              <Text size="1.5rem" LHeight="2rem">
                오늘 하루 받은 스트레스만큼
                <br />
                생드백을 때려 보세요
              </Text>
            </Grid>
            <ButtonBox>
              <Button
                width="150px"
                height="50px"
                radius="12px"
                bg="#333"
                color="#fff"
                size="1.2rem"
                text="SKIP"
                _onClick={() => {
                  history.push("/login");
                }}
              />
            </ButtonBox>
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
            <ButtonBox>
              <Button
                width="150px"
                height="50px"
                radius="12px"
                bg="#333"
                color="#fff"
                size="1.2rem"
                text="SKIP"
                _onClick={() => {
                  history.push("/login");
                }}
              />
            </ButtonBox>
          </SwiperSlide>
          <SwiperSlide>
            <ImgBox3 />
            <Grid position="absolute" flex="flex" bottom="32vh">
              <Text size="1.5rem" LHeight="2rem">
                고민을 함께 나눈 사람에게
                <br />
                감사 인사를 보낼 수 있어요!
              </Text>
            </Grid>
            <ButtonBox>
              <Button
                width="150px"
                height="50px"
                radius="12px"
                bg="#333"
                color="#fff"
                size="1.2rem"
                text="SKIP"
                _onClick={() => {
                  history.push("/login");
                }}
              />
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
  bottom: 21vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export default WelcomeTwo;
