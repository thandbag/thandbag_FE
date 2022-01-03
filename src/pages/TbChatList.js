import React from "react";
import Heads from "../components/Heads";
import { Grid, Image, Text, Button } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import TbNavgation from "../components/TbNavigation";

const TbChatList = (props) => {
  const dispatch = useDispatch();
  const user_id = parseInt(sessionStorage.getItem("userId"));
  const you_id = parseInt("4");
  const chatList = useSelector((state) => state.chat.chatListInfo);
  console.log(chatList);

  React.useEffect(() => {
    dispatch(chatActions.getChatListDB());
  }, []);

  return (
    <>
      <Heads none bg="#fff" stroke="#fff" color="#333" text="채팅" />
      <Grid margin="70px 0 0 0">
        {chatList?.map((m, idx) => {
          return (
            <Grid
              borderB
              borderT
              padding="16px 20px"
              width="100%"
              flex="flex"
              justify="space-between"
              bg="#FBF7F7"
              _onClick={() => {
                history.push(`/TbChatDetail/${m.roomId}`);
              }}
            >
              <Image src={m.subProfileImgUrl} shape="circle" Isize="60" />
              <Grid width="60%">
                <Text padding="0 0 10px 0" size="20px">
                  {m.subNickname}
                </Text>
                <Text size="12px" family="NotoSansCJK">
                  {m.lastContent}
                </Text>
              </Grid>
              <Grid flex="flex" direction="column" align="center" width="20%">
                <Text padding="0 0 10px 0" size="12px" family="NotoSansCJK">
                  {m.lastContentCreatedTime}
                </Text>
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
              </Grid>
            </Grid>
          );
        })}

        <Button
          _onClick={() => {
            dispatch(chatActions.createChatRoomDB(user_id, you_id));
            // history.push("/TbChatDetail");
          }}
          margin="10px 0 0 0"
          text="채팅방생성"
        ></Button>
      </Grid>
      <TbNavgation />
    </>
  );
};

export default TbChatList;
