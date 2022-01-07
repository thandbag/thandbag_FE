import React from "react";
import Heads from "../components/Heads";
import { Grid, Image, Text, Button } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import TbNavigation from "../components/TbNavigation";
import TbLoading from "./TbLoading";


const TbChatList = (props) => {
  const dispatch = useDispatch();
  const chatList = useSelector((state) => state.chat.chatListInfo);
  const is_loaded = useSelector((state) => state.chat.is_loaded);
  
  React.useEffect(() => {
    dispatch(chatActions.getChatListDB());
  }, []);

  return (
    <>
    {!is_loaded && <TbLoading/>}
      <Heads none bg="#fff" stroke="#fff" color="#333" text="채팅" />
      <Grid margin="70px 0 0 0">
        {chatList.length == 0 ? 
        <Grid flex="flex"
        direction="column" position="absolute" top="300px">
        <Image no_thand />
        <Text color="#F7C8C8" size="30px" margin="40px 0 0 0">
        아직 채팅방이 없어요!
        </Text>
        </Grid>
        :chatList.map((m, idx) => {
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
        
      </Grid>
      <TbNavigation/>
      
      
    </>
  );
};

export default TbChatList;
