import React from "react";
import styled from "styled-components";
import Heads from "../components/Heads";
import ThandDetail from "../components/ThandDetail";
import Comments from "../components/Comments";
import { Grid, Button, Text } from "../elements/TbIndex";

const TbOneDetail = (props) => {
  return (
    <React.Fragment>
      <Grid width="100%" height="auto">
        {/* 헤드 */}
        <Heads is_anoter text="상세 페이지" />
        {/* 게시글 내용 */}
        <Grid width="100%" height="auto" margin="70px 0 0 0" padding="10px 0">
          <ThandDetail />
        </Grid>
      </Grid>

      {/* mbti / 버튼 */}
      <Grid width="100%" height="auto" flex="flex">
        <Grid
          width="30%"
          height="auto"
          flex="flex"
          justify="flex-end"
          is_align="flex-start"
          direction="column"
        >
          {/* mbti 필터 */}
          <Text margin="10px 0 10px 10px">댓글 999</Text>
          <Comments is_mbtiFilter />
        </Grid>
        <Grid width="70%" height="45px" flex="flex">
          <Button
            width="45%"
            height="42px"
            size="0.8rem"
            color="#555"
            text="생드백 터뜨리기"
            margin="0 20px 0 0"
          />
          <Button
            width="45%"
            height="42px"
            size="0.8rem"
            color="#555"
            text="생드백 때리러가기"
          />
        </Grid>
      </Grid>

      {/*입력한 댓글*/}
      <CommentsBox>
        <Comments is_Comment />
        <Comments is_Comment />
        <Comments is_Comment />
        <Comments is_Comment />
        <Comments is_Comment />
        <Comments is_Comment />
      </CommentsBox>

      {/*댓글 입력 창*/}
      <Comments />
    </React.Fragment>
  );
};

const CommentsBox = styled.div`
  width: 100%;
  height: auto;
  max-height: 180px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  margin-bottom: 130px;
`;

export default TbOneDetail;
