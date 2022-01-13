import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Text, Input, Button } from "../elements/TbIndex";
import { ReactComponent as Comment } from "../static/icons/comment.svg";
import { actionCreators as commentActions } from "../redux/modules/comment";
import styled from "styled-components";
import UserProfile from "./UserProfile";
import LikeButton from "./LikeButton";
import TbModal from "./TbModal";

const Comments = (props) => {
  const { count, is_Comment, is_mbtiFilter, cList } = props;
  const is_me = sessionStorage.getItem("nickname");
  const dispatch = useDispatch();
  const { postid } = useParams();

  // 댓글 입력 //
  const [comment, setComment] = useState("");

  // 댓글 게시 추가 기능
  const sendComment = () => {
    dispatch(commentActions.sendCommentDB(postid, comment));
  };

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

  // 채팅 입력 (엔터)
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendComment();
      setComment("");
    }
  };

  // mbti 필터 기능
  const handleMBTI = (e) => {
    dispatch(commentActions.searchComment(e.target.checked));
  };

  // mbti 필터
  if (is_mbtiFilter) {
    return (
      <React.Fragment>
        <Grid width="100%" flex="flex" borderB bg="#fff" padding="0 20px">
          <Grid width="50%" padding="16px 0" flex="flex" justify="flex-start">
            <Comment width="20" height="20" />
            <Text margin="0 0 0 5px">{count}</Text>
          </Grid>
          <Grid width="50%" padding="16px 0" flex="flex" justify="flex-end">
            <Text margin="0 10px 0 0" width="auto">
              나와 같은 MBTI만 보기
            </Text>
            <input
              onClick={handleMBTI}
              type="checkbox"
              id="check"
              className="checkcss"
            />
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
              <UserProfile
                comment_user={cList}
                comment
                size="1rem"
                Isize="38"
              />
            </Grid>

            {is_me == cList.nickname ? (
              <Grid width="15%" height="auto" flex="flex" justify="flex-end">
                <DeleteText onClick={openModal}>삭제</DeleteText>
              </Grid>
            ) : (
              <Grid width="15%"></Grid>
            )}
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
              <LikeButton
                user_like={cList.currentUserlike}
                commentId={cList.commentId}
                key={props.key}
              />
              <Text
                color="#F7C8C8"
                family="NotoSansCJK"
                size="0.8rem"
                bold="bold"
              >
                {cList.like}
              </Text>
            </Grid>
            <Grid
              width="87%"
              height="100%"
              flex="flex"
              justify="space-between"
              is_align="center"
            >
              <Grid
                width="85%"
                hegight="100%"
                maXheight="56px"
                overFlowY="scroll"
                flex="flex"
                justify="flex-start"
                is_align="flex-start"
              >
                <Text
                  size="13px"
                  family="NotoSansCJK"
                  spacing="-1px"
                  LHeight="17px"
                >
                  {cList.comment}
                </Text>
              </Grid>

              <Grid width="15%" flex="flex" justify="flex-end">
                <Text
                  size="12px"
                  color="#FF5454"
                  family="NotoSansCJK"
                  spacing="-1px"
                >
                  {cList.createdAt}
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <TbModal
          id={cList ? cList.commentId : <></>}
          open={modalOpen}
          close={closeModal}
        />
      </React.Fragment>
    );
  }

  return (
    // default 댓글 입력 창
    <React.Fragment>
      <CommentsInputBox>
        <Grid width="80%" height="100%" flex="flex" margin="0 16px 0 0">
          <Input
            _onKeyDown={handleKeyDown}
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
            _onClick={() => {
              sendComment();
              setComment("");
            }}
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

const DeleteText = styled.div`
  font-family: "NotoSansCJK";
  font-size: 0.8rem;
  font-weight: bold;
  color: #eee;
  cursor: pointer;
  &:hover {
    color: #ff5454;
    transition: 0.3s;
  }
  &:not(:hover) {
    color: #eee;
    transition: 0.3s;
  }
`;

export default Comments;
