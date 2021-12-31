import React, { useState } from "react";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import { Grid, Text, Input, Button } from "../elements/TbIndex";
import { ReactComponent as Comment } from "../static/icons/comment.svg";
import { ReactComponent as CheckBox } from "../static/icons/checkBox.svg";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { setAccessToken } from "../shared/Api";

const Comments = (props) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const { is_Comment, is_mbtiFilter } = props;

  const sendBtnHandler = () => {
    console.log(comment);
    const accessToken = sessionStorage.getItem("token");
    setAccessToken(accessToken);
    dispatch(commentActions.sendCommentDB(comment, 0));
  };

  // mbti 필터
  if (is_mbtiFilter) {
    return (
      <React.Fragment>
        <Grid width="100%" flex="flex" borderB bg="#fff" padding="0 20px">
          <Grid width="60%" padding="16px 0" flex="flex" justify="flex-start">
            <Comment width="20" height="20" />
            <Text margin="0 0 0 5px">999</Text>
          </Grid>
          <Grid width="40%" padding="16px 0" flex="flex" justify="flex-end">
            <Button
              margin="0 10px 0 0"
              text="같은 MBTI만 보기"
              bg="transparent"
              width="auto"
            />
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
          borderB="1px solid #efefef"
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
              <Text
                margin="1px 0 0 0"
                color="#F7C8C8"
                family="NotoSansCJK"
                size="0.5rem"
              >
                999
              </Text>
            </Grid>
            <Grid width="87%" height="auto">
              <Text size="1.1rem" LHeight="1.3rem" family="NotoSansCJK">
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
            _onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
            type="text"
            size="1.2rem"
            color="#F7C8C8"
            placeholder="댓글을 남겨주세요"
            radius="12px"
            border="1px solid #fbf7f7"
            width="100%"
            height="43px"
            bg="#fbf7f7"
            padding="10px 10px"
          />
        </Grid>
        <Grid width="20%" height="100%" flex="flex">
          <Button
            _onClick={sendBtnHandler}
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
  max-width: 375px;
  height: 93px;
  border-top: 1px solid #efefef;
  background-color: #fff;
  padding: 20px 20px 30px 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Comments;
