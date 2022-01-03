import React from "react";
import styled from "styled-components";
import { ReactComponent as Bomb } from "../static/images/bomb.svg";
import { ReactComponent as Comment } from "../static/icons/comment.svg";
import { Grid } from "../elements/TbIndex";
import TbText from "../elements/TbText";

const TbCardAll = ({
  category,
  title,
  content,
  nickname,
  mbti,
  level,
  commentCount,
  createdAt,
}) => {

  return (
    <ListBox>
      <CardWrap>
        <CardTop>
          <TbText bold>{category}</TbText>
        </CardTop>
        <Grid
          width="66px"
          height="63px"
          position="absolute"
          top="5px"
          right="10px"
        >
          <Bomb />
        </Grid>
        <CardMiddle>
          <CardContent>
            <CardContentTop>
              <TbText bold size="20px">
                {title}
              </TbText>
            </CardContentTop>
            <CardContentBottom>
              <div dangerouslySetInnerHTML={{ __html : content}}></div>
            </CardContentBottom>
          </CardContent>
        </CardMiddle>
        <CardBottom>
          <CardBottomNameArea>
            <TbText margin="0px 15px 0px 0px;">{nickname}님</TbText>
          </CardBottomNameArea>
          <CardBottomLvArea>
            <CardMbti>
              <TbText color="white" size="13px">
                {mbti}
              </TbText>
            </CardMbti>
            <CardLv>
              <TbText color="white" size="13px">
                LV {level}
              </TbText>
            </CardLv>
          </CardBottomLvArea>
          <CardBottomCommentArea>
            <Comment width="20" height="20"></Comment>
            <TbText margin="0px 0px 0px 5px">{commentCount}</TbText>
          </CardBottomCommentArea>
          <CardBottomTimeArea>
            <TbText color="#F7C8C8" bold="600" size="12px" family="NotoSansCJK">
              {createdAt}
            </TbText>
          </CardBottomTimeArea>
        </CardBottom>
      </CardWrap>
    </ListBox>
  );
};

const ListBox = styled.div`
  width: 100%;
  height: auto;
`;

const CardWrap = styled.div`
  width: 85%;
  height: 230px;
  background-color: #eeeeee;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  margin-bottom: 40px;
  position: relative;
`;

const CardTop = styled.div`
  width: 100%;
  height: 20%;
  background-color: #eeeeee;
  padding: 15px 0px 0px 20px;
  position: absolute;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 46px;
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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBottomLvArea = styled.div`
  width: 25%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardBottomCommentArea = styled.div`
  width: 25%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardBottomTimeArea = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  margin-left: 10px;
`;

const CardMbti = styled.div`
  width: 40px;
  height: 18px;
  line-height: 18px;
  background-color: #ff5454;
  text-align: center;
  border-radius: 25px;
  margin: 0px 3px 0px 0px;
`;

const CardLv = styled.div`
  width: 40px;
  height: 18px;
  line-height: 18px;
  background-color: #333333;
  text-align: center;
  border-radius: 25px;
`;

export default TbCardAll;
