import React from "react";
import styled from "styled-components";

import { Grid } from "../elements/TbIndex";
import Heads from "../components/Heads";
import TbListModal from "../components/TbModals/TbListModal";
import TbCardAll from "../components/TbCardAll";
import SwipeCategory from "../components/SwipeCategory";
import TbLoading from "./TbLoading";
import TbNavgation from "../components/TbNavigation";
import { ReactComponent as Write } from "../static/icons/write.svg";

import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { useSpring, animated } from "react-spring";

const TbList = (props) => {
  const is_loaded = useSelector((state) => state.card.is_loaded);
  const [scrollY, setScrollY] = React.useState(0)
  const [barstate, setBarstate] = React.useState(false)

  const fadeIn = useSpring({
    config: {
      duration: 300,
    },
    width: "100%",
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleScroll = (e) => {
    setScrollY(e.target.scrollTop)
    if(barstate === false && e.target.scrollTop > scrollY){
      setBarstate(true)
    } else if (barstate === true && e.target.scrollTop < scrollY){
      setBarstate(false)
    }
  };


  return (
    <animated.div style={fadeIn}>
    <Container>
      <Heads
        list
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
        <Grid flex="flex" width="auto" height="100%" padding="0 20px 0 0">
          <TbListModal />
        </Grid>
      </Grid>
      <CardList onScroll={handleScroll}>
        <TbCardAll></TbCardAll>
      </CardList>
      <WriteBox
        style={{bottom: barstate ? "50px":"80px"}}
        onClick={() => {
          history.push("/TbWrite");
        }}
      >
        <Write className="write_icon" width="27" height="27" />
      </WriteBox>
      {!is_loaded && <TbLoading />}

    </Container>
    {barstate ? <></> : <TbNavgation/>}
    </animated.div>
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

const CardList = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 0 0 70px 0;
`;

const WriteBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgb(0, 0, 0, 0.3);
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 7;

  &:hover {
    background-color: #ff5454;
    transition: 0.3s;
  }
  &:not(:hover) {
    background-color: #fff;
    transition: 0.3s;
  }

  &:hover > .write_icon {
    fill: #fff !important;
    transition: 0.3s;
  }

  &:not(:hover) > .write_icon {
    fill: #555;
    transition: 0.3s;
  }
`;

export default TbList;
