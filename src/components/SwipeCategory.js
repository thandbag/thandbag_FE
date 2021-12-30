import React, { useRef, useState } from "react";
import { Grid, Button } from "../elements/TbIndex";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwipeCategory.css";

export default function App() {
  return (
    <>
      <Grid width="100%" height="55px" bg="#333">
        <Swiper
          slidesPerView={5}
          centeredSlides={false}
          spaceBetween={6}
          grabCursor={true}
          className="mySwiper2"
        >
          <SwiperSlide className="swiper-slide2">
            <Button
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="전체"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 10px"
              text="사회생활"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="공부"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="진로고민"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="인간관계"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="가정문제"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="연애"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="기타"
            />
          </SwiperSlide>
        </Swiper>
      </Grid>
    </>
  );
}
