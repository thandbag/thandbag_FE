import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";
import TbModal from "./TbModals/TbModal";

const ThandDetail = (props) => {
  const { one, share, contents, postid } = props;
  const is_me = sessionStorage.getItem("userId");
  const deleteUserId = contents.userId;

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

  if (share) {
    return (
      // 글작성
      <React.Fragment>
        <DetailBox>
          <Grid width="100%" flex="flex" bg="#333">
            <Grid
              width="100%"
              height="auto"
              miNheight="50px"
              flex="flex"
              justify="flex-start"
              padding="12px 20px 16px 20px"
            >
              <Text bold="400" color="#fff" size="1.75rem" LHeight="2rem" Wbreack="break-all">
                {contents.title}
              </Text>
            </Grid>
            {is_me == deleteUserId ? (
              <Grid
                width="auto"
                height="auto"
                padding="2px 0 0 0"
                flex="flex"
                justify="center"
                is_align="flex-start"
                position="absolute"
                top="20px"
                right="20px"
                zIndex="999"
              >
                <Grid
                  width="52px"
                  height="30px"
                  border="1px solid #fff"
                  radius="8px"
                  flex="flex"
                  cursor="pointer"
                  _onClick={openModal}
                >
                  <Text color="#fff" size="17px">
                    삭제
                  </Text>
                </Grid>
              </Grid>
            ) : (
              <></>
            )}
          </Grid>

          <TextBox>
            <div dangerouslySetInnerHTML={{ __html: contents.content }}></div>
          </TextBox>

          <TbModal
            detailX
            postid={postid ? postid : <></>}
            open={modalOpen}
            close={closeModal}
          />
        </DetailBox>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <DetailBox>
        <Grid width="100%" flex="flex" bg="#333">
          <Grid
            width="80%"
            height="auto"
            miNheight="50px"
            flex="flex"
            justify="flex-start"
            padding="12px 20px 16px 20px"
          >
            <Text bold="400" color="#fff" size="1.75rem" Wbreack="break-all">
              {contents.title}
            </Text>
          </Grid>
          <Grid
            width="20%"
            height="50px"
            padding="2px 0 0 0"
            flex="flex"
            justify="center"
            is_align="flex-start"
            position="absolute"
            top="20px"
            right="0"
            zIndex="999"
          >
            <Grid
              width="52px"
              height="30px"
              border="1px solid #fff"
              radius="8px"
              flex="flex"
              cursor="pointer"
              _onClick={openModal}
            >
              <Text color="#fff" size="17px">
                삭제
              </Text>
            </Grid>
          </Grid>
        </Grid>

        <TextBox>
          <div dangerouslySetInnerHTML={{ __html: one.content }}></div>
        </TextBox>

        <TbModal 
          detailX 
          postid={postid ? postid : <></>}
          open={modalOpen} 
          close={closeModal} 
        />
      </DetailBox>
    </React.Fragment>
  );
};

const TextBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 280px;
  overflow-y: scroll;
  background-color: #fff;
  padding: 20px;
  font-family: 'NotoSansCJK';
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: -0.4px;
  word-break: break-all;
`;

const DetailBox = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
`;

export default ThandDetail;
