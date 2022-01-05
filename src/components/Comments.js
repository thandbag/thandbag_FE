import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Text, Input, Button } from "../elements/TbIndex";
import { ReactComponent as Comment } from "../static/icons/comment.svg";
import { ReactComponent as CheckBox } from "../static/icons/checkBox.svg";
import { ReactComponent as Delete } from "../static/icons/delete.svg";
import { actionCreators as commentActions } from "../redux/modules/comment";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import LikeButton from "./LikeButton";
import TbModal from "./TbModal";
import { setAccessToken } from "../shared/Api";

const Comments = (props) => {
  const { count, is_Comment, is_mbtiFilter, cList } = props;
  const dispatch = useDispatch();
  const { postid } = useParams();
  console.log(cList);

  const commentInfo = useSelector((state) => state.comment);
  console.log(commentInfo);

  // 댓글 입력 //
  const [comment, setComment] = useState("");

  // 댓글 게시 추가 기능
  const sendComment = () => {
    dispatch(commentActions.sendCommentDB(postid, comment));
  };
  console.log(sendComment);


  // 댓글 삭제 모달 (팝업)
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  window.addEventListener("keyup", (e) => {
    if (setModalOpen(false) && e.key === "Escape") {
      setModalOpen(true);
    }
  });

  // mbti 필터
  if (is_mbtiFilter) {
    return (
      <React.Fragment>
        <Grid width="100%" flex="flex" borderB bg="#fff" padding="0 20px">
          <Grid width="60%" padding="16px 0" flex="flex" justify="flex-start">
            <Comment width="20" height="20" />
            <Text margin="0 0 0 5px">{count}</Text>
          </Grid>
          <Grid width="40%" padding="16px 0" flex="flex" justify="flex-end">
            <Button
              margin="0 10px 0 0"
              text="같은 MBTI만 보기"
              bg="transparent"
              width="auto"
            />
            <CheckBox width="20" height="20" fill="#FBF7F7" />
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
          is_align="flex-start"
          justify="flex-start"
          direction="column"
          bg="#fff"
          borderB="1px solid #efefef"
        >
          <Grid width="100%" height="auto" flex="flex">
            <Grid width="85%" height="auto" padding="5px 0">
              <UserProfile comment size="1rem" Isize="38" />
            </Grid>
            <Grid width="15%" height="auto" flex="flex">
              <Delete width="17" onClick={openModal} />
            </Grid>
          </Grid>
          <Grid width="100%" height="56px" flex="flex" justify="flex-start">
            <Grid
              width="10%"
              height="100%"
              flex="flex"
              justify="center"
              direction="column"
              padding="0 0 0 2px"
              margin="0 8px 0 0"
            >
              <LikeButton key={props.key} />
              <Text
                color="#F7C8C8"
                family="NotoSansCJK"
                size="0.8rem"
                bold="bold"
              >
                22
              </Text>
            </Grid>
            <Grid
              width="87%"
              height="100%"
              maXheight="56px"
              overFlowY="scroll"
              flex="flex"
              justify="flex-start"
              is_align="center"
            >
              <Text size="13px" family="NotoSansCJK">
                {cList.comment}
              </Text>
            </Grid>
          </Grid>
        </Grid>
        <TbModal open={modalOpen} close={closeModal} />
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
            color="#333"
            placeholder="댓글을 남겨주세요"
            radius="12px"
            border="1px solid #fbf7f7"
            width="100%"
            height="43px"
            bg="#fbf7f7"
            padding="10px 20px"
            value={comment}
            _onChange={(e) => {
              setComment(e.target.value);
            }}
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
            _onClick={sendComment}
          />
        </Grid>
      </CommentsInputBox>
    </React.Fragment>
  );
};

const CommentsInputBox = styled.div`
  width: 100%;
  max-width: 420px;
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
