import React from "react";

import styled from "styled-components";
import { ReactComponent as Comment } from "../static/icons/comment.svg";

import TbText from "../elements/TbText";

const TbCardAll = (props) => {
  return (
    <CardWrap>
      <CardTop>
        <TbText bold>#카테고리</TbText>
      </CardTop>
      <CardMiddle>
        <CardContent>
          <CardContentTop>
            <TbText bold size="20px">
              제목입니다
            </TbText>
          </CardContentTop>
          <CardContentBottom>
            <TbText size="15px">
              내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
            </TbText>
          </CardContentBottom>
        </CardContent>
      </CardMiddle>
      <CardBottom>
        <CardBottomNameArea>
          <TbText margin="0px 15px 0px 0px;">서윤님</TbText>
        </CardBottomNameArea>
        <CardBottomLvArea>
          <CardMbti>
            <TbText color="white">mbti</TbText>
          </CardMbti>
          <CardLv>
            <TbText color="white">LV 2</TbText>
          </CardLv>
        </CardBottomLvArea>
        <CardBottomCommentArea>
          <Comment width="20" height="20"></Comment>
          <TbText margin="0px 0px 0px 5px">999</TbText>
        </CardBottomCommentArea>
        <CardBottomTimeArea>
          <TbText>12분전</TbText>
        </CardBottomTimeArea>
      </CardBottom>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  width: 85%;
  height: 230px;
  background-color: #eeeeee;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 5px 11px -1px rgba(0, 0, 0, 0.62);
  margin: 20px auto 40px auto;
`;

const CardTop = styled.div`
  width: 100%;
  height: 20%;
  background-color: #eeeeee;
  padding: 15px 0px 0px 20px;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 60%;
  background-color: #fff;
  border-bottom: 2px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContent = styled.div`
  width: 90%;
  height: 80%;
  background-color: #fff;
`;

const CardContentTop = styled.div`
  width: 100%;
  height: 30%;
  background-color: #fff;
  text-align: middle;
`;

const CardContentBottom = styled.div`
  width: 100%;
  height: 70%;
  background-color: #fff;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardBottom = styled.div`
  width: 100%;
  height: 20%;
  background-color: #fff;
  padding: 10px 15px 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardBottomNameArea = styled.div`
  height: 100%;
  background-color: #fff;
  padding: 3px 0px 0px 0px;
  overflow: hidden;
`;

const CardBottomLvArea = styled.div`
  width: 25%;
  height: 100%;
  background-color: #fff;
  padding: 3px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardBottomCommentArea = styled.div`
  width: 25%;
  height: 100%;
  background-color: #fff;
  padding: 5px 0px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardBottomTimeArea = styled.div`
  width: 25%;
  height: 100%;
  background-color: #fff;
  padding: 5px 0px 0px 30px;
`;

const CardMbti = styled.div`
  width: 40px;
  height: 18px;
  background-color: #ff5454;
  text-align: center;
  border-radius: 25px;
  margin: 0px 3px 0px 0px;
`;

const CardLv = styled.div`
  width: 40px;
  height: 18px;
  background-color: #333333;
  text-align: center;
  border-radius: 25px;
`;

export default TbCardAll;
