import React from "react";
import styled from "styled-components";

import TbNavigation from "../components/TbNavigation";
import TbLoading from "./TbLoading";
import Heads from "../components/Heads";
import { Grid, Image, Text } from "../elements/TbIndex";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { useSpring, animated } from "@react-spring/web";
import Swal from "sweetalert2";

import NoChatList from "../static/images/no_chatlist.png";
import { ReactComponent as NoticeIcon } from "../static/icons/notice_icons/notice_icon.svg";



const TbChatList = (props) => {
  const dispatch = useDispatch();
  const chatList = useSelector((state) => state.chat.chatListInfo);
  const is_loaded = useSelector((state) => state.chat.is_loaded);

  React.useEffect(() => {
    dispatch(chatActions.getChatListDB());
  }, []);

  const fadeIn = useSpring({
    config: {
      duration: 300,
    },
    width: "100%",
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <>
      {!is_loaded && <TbLoading />}
      <Heads none bg="#fff" stroke="#fff" color="#333" text="채팅" borderB />
      <animated.div style={fadeIn}>
        <TbChatListBox>
        <Grid
            width="100%"
            height="50px"
            padding="0 20px"
            flex="flex"
            borderB
            borderT
            justify="space-between"
            bg="#FBF7F7"
            cursor="pointer"
            _onClick={() => {
              Swal.fire({
                icon: 'question',
                html: '1. 생드백을 작성해주세요. <br><br> 2. 마음에 드는 댓글에 "좋아요"를 눌러주세요. <br><br> 3. 생드백을 신나게 때린 다음, ‘터뜨리기’ 버튼을 <br> 눌러주세요. <br><br> 4. ‘터뜨리기 완료’ 페이지에서, ‘좋아요‘를 누르신<br> 댓글의 사용자를확인하고, ‘편지’ 모양을<br> 눌러 채팅을 시작해보세요! ',
                
              })
            }}
          >
            <Grid width="10%" height="auto" flex="flex" justify="flex-start">
              <NoticeIcon />
            </Grid>
            <Grid align="center" width="auto%">
              <Text size="1rem" spacing="1px">
                ❓ 채팅을 어떻게 시작하는지 모르시겠다구요?
              </Text>
            </Grid>
            <Grid flex="flex" justify="flex-end" width="10%">
              <Grid
                width="23px"
                height="23px"
                bg="#FF5454"
                flex="flex"
                radius="100%"
              >
                <Text color="#fff" size="11px">
                  N
                </Text>
              </Grid>
            </Grid>
          </Grid>
          {chatList.length == 0 ? (
           <BgBox />
          ) : (
            chatList.map((m, idx) => {
              return (
                <Grid
                  hover
                  position="relative"
                  borderB
                  padding="0 20px"
                  width="100%"
                  height="90px"
                  flex="flex"
                  justify="space-between"
                  cursor="pointer"
                  _onClick={() => {
                    history.push(`/TbChatDetail/${m.roomId}`, m.subNickname);
                  }}
                >
                  <Grid width="auto" height="auto">
                    <Image src={m.subProfileImgUrl} shape="circle" Isize="48" />
                  </Grid>
                  <Grid width="67%" margin="0 6% 0 0">
                    <Text size="20px">{m.subNickname}</Text>
                    <Text
                      elli
                      color="#595959"
                      bold="bold"
                      size="14px"
                      margin="0.4rem 0 0 0"
                      family="NotoSansCJK"
                      spacing="-0.5px"
                    >
                      {m.lastContent}
                    </Text>
                  </Grid>
                  <Grid
                    width="auto"
                    height="auto"
                    position="absolute"
                    right="20px"
                    top="10px"
                  >
                    <Text
                      size="10px"
                      spacing="-0.5px"
                      color="#878787"
                      blod="bold"
                      family="NotoSansCJK"
                    >
                      {m.lastContentCreatedTime}
                    </Text>
                  </Grid>

                  <Grid flex="flex" width="auto">
                    {m.unreadCount == 0 ? (
                      <></>
                    ) : (
                      <Grid
                        width="23px"
                        height="23px"
                        bg="#FF5454"
                        flex="flex"
                        radius="20px"
                      >
                        <Text color="#fff" size="11px">
                          {m.unreadCount}
                        </Text>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              );
            })
          )}
        </TbChatListBox>
      </animated.div>
      <TbNavigation TbChatList={"TbChatList"} />
    </>
  );
};

const TbChatListBox = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px 0;
  overflow-y: scroll;
  background-color: #fbf7f7;
`;

const BgBox = styled.div`
  width: 100%;
  height: 80vh;
  position: absolute;
  top: 12%;
  left: 0;
  background-color: #fbf7f7;
  background-image: url(${NoChatList});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
`;

export default TbChatList;
