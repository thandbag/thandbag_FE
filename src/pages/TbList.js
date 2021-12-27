import React from "react";

import styled from "styled-components";

import TbText from "../elements/TbText";

const TbList = (props) => {
  return (
    <Container>
      <Header>
        <TbText bold>전체 생드백 리스트</TbText>
      </Header>
      <Category>
        <TbText bold>카테고리 영역</TbText>
      </Category>
      <FilterArea>
        <TbText bold>필요한 영역인지 잘 모르겠음</TbText>
      </FilterArea>
      <CardArea>
        <TbText bold>카드 컴포넌트 맵돌리기?</TbText>
      </CardArea>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: darkred;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Category = styled.div`
  width: 100%;
  height: 5vh;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterArea = styled.div`
  width: 100%;
  height: 5vh;
  background-color: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardArea = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fff;
`;

export default TbList;
