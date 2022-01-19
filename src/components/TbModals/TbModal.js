import React from "react";
import styled from "styled-components";
import "../../shared/style.css";
import { useDispatch } from "react-redux";
import { actionCreators as cardActions } from "../../redux/modules/card";
import { actionCreators as commentActions } from "../../redux/modules/comment";
import BasicModal from "../../static/images/modals/basic_modal.png";
import { Text } from "../../elements/TbIndex";

const TbModal = (props) => {
  const { id, postid, open, close, detailX } = props;
  const dispatch = useDispatch();

  if (detailX) {
    return (
      <>
        <div className={open ? "openModal modal" : "modal"}>
          {open ? (
            <section>
              <main>
                <ModalboxT>
                  <Text size="18px" color="#FF5454">
                    생드백을 삭제하시겠어요??
                  </Text>
                </ModalboxT>

                <ModalbottomBox>
                  <MBTop
                    onClick={() => {
                      dispatch(cardActions.deleteCardDB(postid));
                      close();
                    }}
                  >
                    삭제할래요
                  </MBTop>
                  <MBBottom onClick={close}>아니요, 돌아갈래요</MBBottom>
                </ModalbottomBox>
              </main>
            </section>
          ) : null}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <main>
              <ModalboxT>
                <Text size="18px" color="#FF5454">
                  댓글을 삭제하시겠어요??
                </Text>
              </ModalboxT>

              <ModalbottomBox>
                <MBTop
                  onClick={() => {
                    dispatch(commentActions.deleteCommentDB(id));
                    close();
                  }}
                >
                  삭제할래요
                </MBTop>
                <MBBottom onClick={close}>아니요, 돌아갈래요</MBBottom>
              </ModalbottomBox>
            </main>
          </section>
        ) : null}
      </div>
    </>
  );
};

const ModalboxT = styled.div`
  width: 219px;
  height: 172px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${BasicModal});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
  padding-bottom: 20px;
`;

const ModalbottomBox = styled.div`
  width: 219px;
  height: 105px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
`;

const MBTop = styled.button`
  width: 100%;
  height: 50%;
  border: none;
  background: none;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-family: "KOTRAHOPE", -apple-system, sans-serif;
  font-size: 18px;
  color: #333;
  &:hover {
    color: #fff;
    background-color: #ff5454;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
`;

const MBBottom = styled(MBTop)`
  border-bottom: none;
`;

export default TbModal;
