import React from "react";
import styled from "styled-components";

import { ReactComponent as Bomb } from "../static/images/bomb.svg";
import { ReactComponent as Comment } from "../static/icons/comment.svg";
import { ReactComponent as ENFJ } from "../static/icons/mbti icons/Property 1=mbti_ENFJ.svg";
import { ReactComponent as INFP } from "../static/icons/mbti icons/Property 1=mbti_INFP.svg";
import { ReactComponent as ENFP } from "../static/icons/mbti icons/Property 1=mbti_ENFP.svg";
import { ReactComponent as ENTJ } from "../static/icons/mbti icons/Property 1=mbti_ENTJ.svg";
import { ReactComponent as ESFP } from "../static/icons/mbti icons/Property 1=mbti_ESFP.svg";
import { ReactComponent as ESTJ } from "../static/icons/mbti icons/Property 1=mbti_ESTJ.svg";
import { ReactComponent as ESTP } from "../static/icons/mbti icons/Property 1=mbti_ESTP.svg";
import { ReactComponent as ESFJ } from "../static/icons/mbti icons/Property 1=mbti_ESFJ.svg";
import { ReactComponent as ENTP } from "../static/icons/mbti icons/Property 1=mbti_ENTP.svg";
import { ReactComponent as INFJ } from "../static/icons/mbti icons/Property 1=mbti_INFJ.svg";
import { ReactComponent as INTJ } from "../static/icons/mbti icons/Property 1=mbti_INTJ.svg";
import { ReactComponent as INTP } from "../static/icons/mbti icons/Property 1=mbti_INTP.svg";
import { ReactComponent as ISFJ } from "../static/icons/mbti icons/Property 1=mbti_ISFJ.svg";
import { ReactComponent as ISFP } from "../static/icons/mbti icons/Property 1=mbti_ISFP.svg";
import { ReactComponent as ISTJ } from "../static/icons/mbti icons/Property 1=mbti_ISTJ.svg";
import { ReactComponent as ISTP } from "../static/icons/mbti icons/Property 1=mbti_ISTP.svg";
import { ReactComponent as NoMbti } from "../static/icons/mbti icons/Property 1=Variant17.svg";
import { ReactComponent as LevelOne } from "../static/icons/lv icons/LV. 1.svg";
import { ReactComponent as LevelTwo } from "../static/icons/lv icons/LV. 2.svg";
import { ReactComponent as LevelThree } from "../static/icons/lv icons/LV. 3.svg";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card";
import { Grid } from "../elements/TbIndex";
import NoThandBag from "../static/images/no_thandbag.png";
import TbText from "../elements/TbText";

const TbCardMy = (props) => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.card.my_list);

  React.useEffect(() => {
    dispatch(cardActions.getMyCardListDB());
  }, []);

  return (
    <>
      {cardList.length == 0 ? (
        <BgBox />
      ) : (
        cardList.map((c) => {
          return (
            <>
              <ListBox>
                <CardWrap
                onClick={() => {
                  history.push(`/TbTwoDetail/${c.postId}`) 
                  
                }}
                >
                  <CardTop>
                    <TbText bold>{c.category}</TbText>
                  </CardTop>
                  <Grid
                    width="66px"
                    height="63px"
                    position="absolute"
                    top="5px"
                    right="10px"
                  >
                    {c.closed ? <Bomb /> : <></>}
                  </Grid>
                  <CardMiddle>
                    <CardContent>
                      <CardContentTop>{c.title}</CardContentTop>
                      <CardContentBottom>
                        <div
                          className="text_edit_view"
                          dangerouslySetInnerHTML={{ __html: c.content }}
                        />
                      </CardContentBottom>
                    </CardContent>
                  </CardMiddle>
                  <CardBottom>
                    <CardBottomNameArea>
                      <TbText Wspace="nowrap" color="#333">
                        {c.nickname}
                      </TbText>
                    </CardBottomNameArea>
                    <CardBottomLvArea>
                      <CardMbti>
                        {c.mbti === "ENFJ" ? (
                          <ENFJ />
                        ) : c.mbti === "INFP" ? (
                          <INFP />
                        ) : c.mbti === "ENFP" ? (
                          <ENFP />
                        ) : c.mbti === "ENTJ" ? (
                          <ENTJ />
                        ) : c.mbti === "ESFP" ? (
                          <ESFP />
                        ) : c.mbti === "ESTJ" ? (
                          <ESTJ />
                        ) : c.mbti === "ESTP" ? (
                          <ESTP />
                        ) : c.mbti === "INFJ" ? (
                          <INFJ />
                        ) : c.mbti === "INTJ" ? (
                          <INTJ />
                        ) : c.mbti === "INTP" ? (
                          <INTP />
                        ) : c.mbti === "ISFJ" ? (
                          <ISFJ />
                        ) : c.mbti === "ISFP" ? (
                          <ISFP />
                        ) : c.mbti === "ISTJ" ? (
                          <ISTJ />
                        ) : c.mbti === "ISTP" ? (
                          <ISTP />
                        ) : c.mbti === "맞춰보셈" ? (
                          <NoMbti />
                        ) : c.mbti === "ESFJ" ? (
                          <ESFJ />
                        ) : c.mbti === "ENTP" ? (
                          <ENTP />
                        ) : null}
                      </CardMbti>
                      <CardLv>
                        {c.level === 1 ? (
                          <LevelOne />
                        ) : c.level === 2 ? (
                          <LevelTwo />
                        ) : c.level === 3 ? (
                          <LevelThree />
                        ) : null}
                      </CardLv>
                    </CardBottomLvArea>
                    <Grid flex="flex" width="20px" height="100%">
                      <Grid width="1px" height="40%" bg="#eee" />
                    </Grid>
                    <CardBottomCommentArea>
                      <Comment width="20" height="20" />
                      <TbText margin="0px 0px 0px 5px" color="#333">
                        {c.commentCount}
                      </TbText>
                    </CardBottomCommentArea>
                    <CardBottomTimeArea>
                      <TbText
                        color="#FF5454"
                        bold="600"
                        size="12px"
                        family="NotoSansCJK"
                        spacing="-1px"
                      >
                        {c.createdAt}
                      </TbText>
                    </CardBottomTimeArea>
                  </CardBottom>
                </CardWrap>
              </ListBox>
            </>
          );
        })
      )}
    </>
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
  cursor: pointer;
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
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContent = styled.div`
  width: 90%;
  height: 80%;
  overflow: hidden;
  background-color: #fff;
`;

const CardContentTop = styled.div`
  width: 80%;
  height: 30%;
  font-size: 18px;
  background-color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 1%;
`;

const CardContentBottom = styled.div`
  width: 100%;
  height: 70%;
  line-height: 1.4rem;
  letter-spacing: -0.5px;
  font-size: 1rem;
  font-family: "NotoSansCJK" !important;
  background-color: #fff;
  word-break: break-all;

  .text_edit_view {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-top: 2%;
  }
`;

const CardBottom = styled.div`
  width: 100%;
  height: 20%;
  padding: 0 20px;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const CardBottomNameArea = styled.div`
  width: auto;
  height: 100%;
  margin-right: 6px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBottomLvArea = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const CardBottomCommentArea = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CardBottomTimeArea = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 6px;
  white-space: nowrap;
`;

const CardMbti = styled.div`
  width: 40px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border-radius: 25px;
  margin: 0px 15px 0px 0px;
`;

const CardLv = styled.div`
  width: auto;
  height: 18px;
  margin-left: 3px;
  line-height: 18px;
  background-color: #333333;
  text-align: center;
  border-radius: 25px;
`;

const BgBox = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 5%;
  left: 0;
  background-color: #fbf7f7;
  background-image: url(${NoThandBag});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
`;

export default TbCardMy;
