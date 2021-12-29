import React from "react";
import Heads from "./Heads";
import EndContain from "./EndContain";
import styled from "styled-components";
import { Grid, Image } from "../elements/TbIndex";

const TbTwoEnd = (props) => {
  return (
    <React.Fragment>
      <EndBox>
        <Heads
          is_anoter
          bg="#FBF7F7"
          stroke="#333"
          color="#333"
          text="전체공개 - 작성자를 제외 한 다른 유저의 경우"
        />
        <Grid width="100%" height="100vh" flex="flex" padding="90px 10% 30px 10%">
          <Image punch_thand />
        </Grid>
        <EndContain is_Two />
      </EndBox>
    </React.Fragment>
  );
};

const EndBox = styled.div`
  width: 100%;
  max-width: 420px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 auto;
  box-sizing: border-box;
  background-color: #fbf7f7;
  position: relative;
  z-index: 0;

  @media screen and (min-width: 1024px) {
    position: relative;
    left: 0%;
    top: 0%;
    overflow: auto;
  }
`;

export default TbTwoEnd;
