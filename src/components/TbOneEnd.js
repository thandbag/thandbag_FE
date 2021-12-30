import React from "react";
import Heads from "./Heads";
import { Grid, Image } from "../elements/TbIndex";
import styled from "styled-components";
import EndContain from "./EndContain";

const TbOneEnd = (props) => {
  return (
    <React.Fragment>
      <EndBox>
        <Heads
          is_anoter
          bg="#FBF7F7"
          stroke="#333"
          color="#333"
          text="글작성자가 보는 경우"
        />
        <Grid
          width="100%"
          height="100vh"
          flex="flex"
          padding="90px 10% 30px 10%"
        >
          <Image punch_thand />
        </Grid>
        <EndContain />
      </EndBox>
    </React.Fragment>
  );
};

const EndBox = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100%;
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

export default TbOneEnd;
