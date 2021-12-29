import React from "react";

import styled from "styled-components";

import TbText from "../elements/TbText";
import TbCard from "../components/TbCard";

const TbList = (props) => {
  return (
    <Container>
      <Header>
        <TbText bold>전체 생드백 리스트</TbText>
      </Header>
      <Category>
        <select className="CategoryDropdown">
          <option value="0">카테고리 선택</option>
          <option value="1">사회생활</option>
          <option value="2">공부</option>
          <option value="3">진로고민</option>
          <option value="4">대인관계</option>
          <option value="5">가정문제</option>
          <option value="6">연애</option>
          <option value="7">기타</option>
        </select>
      </Category>
      <FilterArea>
        <TbText bold>필요한 영역인지 잘 모르겠음</TbText>
      </FilterArea>
      <CardArea>
        <TbCard />
        <TbCard />
        <TbCard />
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
  background-color: #fbf7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Category = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #fbf7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterArea = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #fbf7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardArea = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #fbf7f7;
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
