import React, { useRef, useState } from "react";
import { Grid, Button } from "../elements/TbIndex";
import { useDispatch } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "../shared/style.css";

export default function App() {
  const dispatch = useDispatch();
  const [category, setCategorys] = React.useState('');
  const clickFilter = (e) => {
    setCategorys(e.target.innerText)
    dispatch(cardActions.searchCard(e.target.innerText))
  }
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
            <Button category
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="전체"
              _onClick={clickFilter}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button category
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 10px"
              text="사회생활"
              _onClick={clickFilter}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button category
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="공부"
              _onClick={clickFilter}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button category
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="진로고민"
              _onClick={clickFilter}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button category
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="대인관계"
              _onClick={clickFilter}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button category
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="가정문제"
              _onClick={clickFilter}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button category
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="연애"
              _onClick={clickFilter}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <Button category
              width="auto"
              height="36px"
              bg="#fff"
              radius="30px"
              padding="0 15px"
              text="기타"
              _onClick={clickFilter}
            />
          </SwiperSlide>
        </Swiper>
      </Grid>
    </>
  );
}
