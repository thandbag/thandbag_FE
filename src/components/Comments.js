import React from "react";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import { Grid, Text, Input, Button } from "../elements/TbIndex";
import { ReactComponent as Comment } from "../static/icons/comment.svg";
import { ReactComponent as CheckBox } from "../static/icons/checkBox.svg";

const Comments = (props) => {
  const { is_Comment, is_mbtiFilter } = props;

  // mbti 필터
  if (is_mbtiFilter) {
    return (
      <React.Fragment>
        <Grid width="100%" flex="flex" borderB padding="0 20px">
          <Grid width="60%" padding="16px 0" flex="flex" justify="flex-start">
            <Comment width="20" height="20" />
            <Text margin="0 0 0 5px">999</Text>
          </Grid>
          <Grid width="40%" padding="16px 0" flex="flex" justify="flex-end">
            <Button margin="0 10px 0 0" text="같은 MBTI만 보기" bg="transparent" width="auto" />
              <CheckBox width="20" height="20" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  // 댓글 리스트
  if (is_Comment) {
    return (
      <React.Fragment>
        <Grid
          width="100%"
          height="auto"
          flex="flex"
          padding="16px 20px"
          justify="flex-start"
          direction="column"
          bg="#fff"
          margin="0 0 20px 0"
        >
          <Grid width="100%" height="auto" padding="5px 0">
            <UserProfile size="1rem" Isize="38" />
          </Grid>
          <Grid width="100%" height="auto" flex="flex" justify="flex-start">
            <Grid
              width="13%"
              height="auto"
              flex="flex"
              justify="center"
              direction="column"
              margin="0 5px 0 0"
            >
              <Comment width="28" height="28" />
              <Text margin="1px 0 0 0" size="0.9rem">
                999
              </Text>
            </Grid>
            <Grid width="87%" height="auto">
              <Text size="1.1rem" LHeight="1.3rem" family="NotosansCjk">
                댓글 영역입니다.
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    // default 댓글 입력 창
    <React.Fragment>
      <CommentsInputBox>
        <Grid width="80%" height="100%" flex="flex" margin="0 16px 0 0">
          <Input
            type="text"
            size="1.2rem"
            color="#F7C8C8"
            placeholder="댓글을 남겨주세요"
            radius="12px"
            border="1px solid #fbf7f7"
            width="100%"
            height="60%"
            bg="#fbf7f7"
            padding="10.5px 10px"
          />
        </Grid>
        <Grid width="20%" height="100%" flex="flex">
          <Button
            width="68px"
            height="45px"
            bg="#333"
            radius="12px"
            color="#fff"
            text="완료"
            size="1.2rem"
          />
        </Grid>
      </CommentsInputBox>
    </React.Fragment>
  );
};

const CommentsInputBox = styled.div`
  width: 100%;
  max-width: 420px;
  height: auto;
  background-color: #fff;
  padding: 20px 20px;
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
