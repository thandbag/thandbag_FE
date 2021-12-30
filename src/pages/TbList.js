import React, { useState } from "react";

import styled from "styled-components";

import TbText from "../elements/TbText";
import TbSelect from "../elements/TbSelect";
import SwipeCategory from "../components/SwipeCategory";
import TbCardAll from "../components/TbCardAll";
import Heads from "../components/Heads";

const TbList = (props) => {
  let [modal, modalChange] = useState(false);

  return (
    <Container>
      <Header>
        <Heads
          is_anoter
          text="생드백 만들기"
          stroke="white"
          bg="#333333"
          color="white"
        ></Heads>
      </Header>
      <SwipeCategory />
      <FilterArea>
        <FilterTextArea>
          <TbText bold margin="0px 10px 0px 0px" cursor="pointer">
            전체
          </TbText>
          <TbText
            bold
            cursor="pointer"
            _onClick={() => {
              modalChange(!modal);
            }}
          >
            필터
          </TbText>
        </FilterTextArea>
      </FilterArea>
      {modal === true ? (
        <TbSelect tblist margin="0px 0px 0px 300px"></TbSelect>
      ) : null}
      <CardArea>
        <TbCardAll />
        <TbCardAll />
        <TbCardAll />
        <TbCardAll />
        <TbCardAll />
        <TbCardAll />
      </CardArea>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fbf7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fbf7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterArea = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #fff;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const FilterTextArea = styled.div`
  width: 40%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardArea = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #fbf7f7;
  overflow: scroll;
`;

const SelectArea = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fff;
`;

export default TbList;
