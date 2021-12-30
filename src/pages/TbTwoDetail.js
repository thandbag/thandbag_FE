import React from "react";
import styled from "styled-components";
import Heads from "../components/Heads";
import ThandDetail from "../components/ThandDetail";
import Comments from "../components/Comments";
import UserProfile from "../components/UserProfile";
import ThandStateImg from "../components/ThandStateImg";
import { Grid, Text } from "../elements/TbIndex";

const TbTwoDetail = (props) => {
  return (
    <React.Fragment>
      <DetailsBox>
        {/* 헤드 */}
        <Heads
          is_anoter
          bg="#333"
          stroke="#fff"
          color="#fff"
          text="디테일 페이지 - 전체공개"
        />
        {/* 게시글 내용 */}
        <Grid width="100%" height="auto" margin="70px 0 0 0">
          <ThandDetail />
        </Grid>

        {/* 유저 프로필 // 시간 */}
        <Grid
          width="100%"
          height="auto"
          flex="flex"
          padding="16px 20px"
          justify="space-between"
          bg="#fff"
        >
          <UserProfile size="1.3rem" Isize="50" />
          <Grid width="20%" flex="flex" justify="flex-end" padding="20px 0 0 0">
            <Text size="12px" color="#FF5454" family="NotoSansCJK">
              12분 전
            </Text>
          </Grid>
        </Grid>

        {/*생드백 때리러가기 버튼*/}
        <ThandStateImg />

        {/*댓글 수 // mbti 필터*/}
        <Comments is_mbtiFilter />
        {/*입력한 댓글*/}
        <CommentsBox>
          {/* 맵 돌리자! */}
          <Comments is_Comment />
        </CommentsBox>
      </DetailsBox>
      {/*댓글 입력 창*/}
      <Comments />
    </React.Fragment>
  );
};

const DetailsBox = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  overflow-y: scroll;
  background-color: #fbf7f7;
`;

const CommentsBox = styled.div`
  width: 100%;
  height: auto;
  max-height: 45vh;
  overflow-y: scroll;
  display: flex;
  background-color: #fbf7f7;
  flex-direction: column;
  margin-bottom: 93px;
  padding-bottom: 20px;
`;

export default TbTwoDetail;
