import React from "react";
import styled from "styled-components";
import LoadingTB from "../static/images/loading_tb.gif";

const TbLoading = () => {
  return (
    <>
      <LoadingBox />
    </>
  )
}

const LoadingBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 99999999;
  background-color: #fff;
  background-image: url(${LoadingTB});
  background-position: center 15vh;
  background-repeat: no-repeat;
  background-size: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TbLoading;