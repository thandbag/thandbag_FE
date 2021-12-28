import React from "react";

import styled from "styled-components";

import TbText from "../elements/TbText";
import TbImage from "../elements/TbImage";

const TbCard = (props) => {
  return (
    <Container>
      <LeftArea>
        <LeftTop>
          <TbImage size="60" />
        </LeftTop>
        <LeftBottom>
          <TbText size="10" margin="0px 0px 10px 0px">
            카테고리
          </TbText>
          <TbText size="10">날짜</TbText>
        </LeftBottom>
      </LeftArea>
      <RightArea>
        <RightTop>
          <TbText bold>
            제목 영역입니다.제목 영역입니다.제목 영역입니다.제목 영역입니다.제목
            영역입니다.제목 영역입니다.제목 영역입니다.제목 영역입니다.제목
            영역입니다.제목 영역입니다.
          </TbText>
        </RightTop>
        <RightBottom>
          <TbText size="10">
            컨텐츠영역임 컨텐츠 영역임 컨텐츠 영역임 컨텐츠 영역임 컨텐츠 영역임
            컨텐츠 영역임 컨텐츠 영역임 컨텐츠 영역임 컨텐츠 영역임 컨텐츠
            영역임 컨텐츠 영역임 컨텐츠 영역임 컨텐츠 영역임 컨텐츠 영역임
            컨텐츠 영역임 컨텐츠 영역임 컨텐츠 영역임 컨텐츠 영역임 컨텐츠
            영역임 컨텐츠 영역임
          </TbText>
        </RightBottom>
      </RightArea>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 30%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #eee;
  border-radius: 20px;
  padding: 10px;
`;

const LeftArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 100%;
  background-color: white;
`;

const LeftTop = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
  padding: 3px 0px;
`;

const LeftBottom = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
  text-align: left;
  padding: 20px 0px;
`;

const RightArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: 100%;
  background-color: white;
`;

const RightTop = styled.div`
  width: 100%;
  height: 25%;
  background-color: white;
  text-align: left;
  padding: 10px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RightBottom = styled.div`
  width: 100%;
  height: 75%;
  background-color: white;
  text-align: left;
  padding: 10px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default TbCard;
