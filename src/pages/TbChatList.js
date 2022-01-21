import React from "react";
import Heads from "../components/Heads";
import { Grid, Image, Text } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import TbNavigation from "../components/TbNavigation";
import TbLoading from "./TbLoading";
import styled from "styled-components";
import NoChatList from "../static/images/no_chatlist.png";
import { useSpring, animated } from "@react-spring/web";

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
  height: 90vh;
  position: absolute;
  top: 5%;
  left: 0;
  background-color: #fbf7f7;
  background-image: url(${NoChatList});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
`;

export default TbChatList;
