import React from "react";
import { history } from "../redux/configureStore";
import Heads from "../components/Heads";
import SwipeCategory from "../components/SwipeCategory";
import { Grid, Button } from "../elements/TbIndex";
import styled from "styled-components";
import TbListModal from "../components/TbListModal";
import TbCardAll from "../components/TbCardAll";
import { ReactComponent as Write } from "../static/icons/write.svg";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card";

const TbList = (props) => {
  return (
    <Container>
      <Heads
        is_anoter
        text="전체 생드백 리스트"
        stroke="white"
        bg="#333333"
        color="white"
        cursor="pointer"
      />
      <Grid width="100%" height="auto" margin="70px 0 0 0">
        <SwipeCategory />
      </Grid>
      <Grid
        width="100%"
        height="42px"
        bg="#fff"
        borderB
        flex="flex"
        justify="flex-end"
      >
        <Grid flex="flex" width="auto" height="100%" bg="blue">
          <Button
            width="100%"
            height="100%"
            text="전체"
            bg="#fff"
            color="#333"
          />
        </Grid>
        <Grid flex="flex" width="5%" height="100%" bg="#fff">
          <Line />
        </Grid>
        <Grid flex="flex" width="auto" height="100%" padding="0 20px 0 0">
          <TbListModal />
        </Grid>
      </Grid>
      <CardList>
        <TbCardAll></TbCardAll>
      </CardList>
      <Grid
        width="60px"
        height="60px"
        radius="100%"
        bg="#fff"
        shadow="0px 4px 12px rgb(0, 0, 0, 0.3)"
        position="absolute"
        right="20px"
        bottom="60px"
        flex="flex"
        cursor="pointer"
        zIndex="7"
        _onClick={() => {
          history.push("/TbWrite");
        }}
      >
        <Write width="27" height="27" />
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fbf7f7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div`
  width: 2px;
  height: 16px;
  background: #eee;
`;

const CardList = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  overflow-y: scroll;
`;

export default TbList;
