import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/TbIndex";

const Comments = (props) => {
  const { is_Comment, is_mbtiFilter } = props;

  // mbti 필터
  if(is_mbtiFilter) {
    return (
      <React.Fragment>
        <FilterMbit>
          <Text size="0.8rem" bold="600">같은 MBTI</Text>
          <Grid width="10px" height="10px" bg="green" radius="100px" margin="0 0 0 10px"/>
        </FilterMbit>
      </React.Fragment>
    )
  }

  // 댓글 리스트
  if (is_Comment) {
    return (
      <React.Fragment>
        <Grid
          width="100%"
          height="60px"
          margin="0 0 10px 0"
          flex="flex"
          bg="#efefef"
          padding="5px"
        >
          {/* 댓글 단 유저 프로필 */}
          <Grid width="10%" height="100%" flex="flex">
            <Image />
          </Grid>
          {/* 댓글 단 내용 */}
          <Grid width="60%" height="100%" flex="flex">
            댓글내용
          </Grid>
          {/* 댓글 좋아요 */}
          <Grid width="15%" height="100%" flex="flex">
            좋아요
          </Grid>
          {/* 댓글 채팅 */}
          <Grid width="15%" height="100%" flex="flex">
            채팅
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    // default 댓글 입력 창
    <React.Fragment>
      <CommentsInputBox>
        <Grid width="15%" height="100%" flex="flex">
          <Image />
        </Grid>
        <Grid width="63%" height="100%" flex="flex">
          <Input type="text" width="100%" height="60%" padding="5px 4px" />
        </Grid>
        <Grid width="22%" height="100%" flex="flex">
          <Button width="70%" height="60%" bg="#555" color="#fff"/>
        </Grid>
      </CommentsInputBox>
    </React.Fragment>
  );
};

const FilterMbit = styled.div`
  width: 100px;
  height: 33px;
  background-color: #efefef;
  border-top-right-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentsInputBox = styled.div`
  width: 100%;
  max-width: 420px;
  background: #ccc;
  height: 60px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
      margin-left: 11%;
  }
`;

export default Comments;
