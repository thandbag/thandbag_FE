import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { useSpring, animated } from "@react-spring/web";
import NoTbNotice from "../static/images/no_tbnotice.png";

// 컴포넌트
import Heads from "../components/Heads";
import TbNavgation from "../components/TbNavigation";
import TbLoading from "./TbLoading";
import { Grid, Text } from "../elements/TbIndex";

// 알림 페이지 아이콘
import { ReactComponent as NoticeIcon } from "../static/icons/notice_icons/notice_icon.svg";
import { ReactComponent as ChatOpen } from "../static/icons/notice_icons/chatopen_icon.svg";
import { ReactComponent as NewThand } from "../static/icons/notice_icons/newthand_icon.svg";
import { ReactComponent as LevelUp } from "../static/icons/notice_icons/lelvelup_icon.svg";
import { ReactComponent as WirteSelect } from "../static/icons/notice_icons/writerselect_icon.svg";
import { actionCreators as noticeActions } from "../redux/modules/chat";

const TbNotice = (props) => {
  const dispatch = useDispatch();
  const notice = useSelector((state) => state.chat.notice);
  const is_loaded = useSelector((state) => state.chat.is_loaded);
  const is_append_loaded = useSelector((state) => state.chat.is_append_loaded);
  const is_card_list_load_complete = useSelector(
    (state) => state.chat.is_card_list_load_complete
  );

  const scrollNoticeList = (e) => {
    if (!is_append_loaded || is_card_list_load_complete) return;
    const scrollTop = e.target.scrollTop;
    const cardListHeight = e.target.scrollHeight;
    const contentsHeight = e.target.offsetHeight;
    if ((cardListHeight - contentsHeight) * 0.99 < scrollTop) {
      console.log("무한스크롤 시작!");
      dispatch(chatActions.appendNoticeListDB());
    }
  };

  React.useEffect(() => {
    dispatch(chatActions.getNoticeDB());
  }, [dispatch]);

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
      <Heads none bg="#fff" stroke="#fff" color="#333" borderB text="알림" />
      <animated.div style={fadeIn}>
        <TbNoticeBox onScroll={scrollNoticeList}>
          <Grid
            width="100%"
            height="50px"
            padding="0 20px"
            flex="flex"
            borderB
            borderT
            justify="space-between"
            bg="#FBF7F7"
          >
            <Grid width="10%" height="auto" flex="flex" justify="flex-start">
              <NoticeIcon />
            </Grid>
            <Grid align="center" width="60%">
              <Text size="15px" spacing="1px">
                아직 등록된 공지가 없어요!
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
          {notice.length == 0 ? (
            <BgBox />
          ) : (
            notice?.map((n) => {
              return (
                <Grid
                  hover
                  borderB
                  cursor="pointer"
                  height="90px"
                  padding="0 20px"
                  width="100%"
                  flex="flex"
                  justify="space-between"
                  bg="#fff"
                  _onClick={() => {
                    if (n.type === "INVITEDCHAT") {
                      history.push(`/TbChatDetail/${n.chatRoomId}`);
                    } else if (n.type === "REPLY") {
                      history.push(`/TbTwoDetail/${n.postId}`);
                    } else if (n.type === "PICKED") {
                      history.push(`/TbTwoDetail/${n.postId}`);
                    } else if (n.type === "LEVELCHANGE") {
                      history.push(`/MyPage`);
                    }
                    dispatch(chatActions.postNoticeDB(n.alarmId));
                  }}
                >
                  <Grid width="10%" height="auto" flex="flex">
                    {n.type == "INVITEDCHAT" ? (
                      <ChatOpen />
                    ) : n.type == "REPLY" ? (
                      <NewThand />
                    ) : n.type == "PICKED" ? (
                      <WirteSelect />
                    ) : n.type == "LEVELCHANGE" ? (
                      <LevelUp />
                    ) : (
                      <></>
                    )}
                  </Grid>
                  <Grid
                    width="80%"
                    height="auto"
                    padding="0 10px 0 15px"
                    flex="flex"
                    justify="flex-start"
                    overFlow="hidden"
                  >
                    <NotiBox>
                      <Text
                        size="14px"
                        LHeight="20px"
                        family="NotoSansCJK"
                        Wbreack="keep-all"
                        spacing="-0.5px"
                      >
                        {n.message}
                      </Text>
                    </NotiBox>
                  </Grid>
                  <Grid
                    width="10%"
                    height="auto"
                    flex="flex"
                    justify="flex-end"
                  >
                    {n.isRead == false && (
                      <Grid
                        width="23px"
                        height="23px"
                        bg="#FF5454"
                        flex="flex"
                        radius="20px"
                      >
                        <Text color="#fff" size="11px">
                          N
                        </Text>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              );
            })
          )}
        </TbNoticeBox>
      </animated.div>
      <TbNavgation TbNotice={"TbNotice"} />
    </>
  );
};

const TbNoticeBox = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px 0;
  overflow-y: scroll;
`;

const BgBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 4%;
  left: 0;
  background-color: #fbf7f7;
  background-image: url(${NoTbNotice});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
`;

const NotiBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default TbNotice;
