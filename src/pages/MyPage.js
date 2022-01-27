import React from "react";
import styled from "styled-components";

import TbNavigation from "../components/TbNavigation";
import UserProfile from "../components/UserProfile";
import TbCardMy from "../components/TbCardMy";
import TbLoading from "./TbLoading";
import { Grid, Text } from "../elements/TbIndex";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card";
import { useSpring, animated } from "@react-spring/web";

const MyPage = (props) => {
  const cardList = useSelector((state) => state.card.my_list);
  const is_loaded = useSelector((state) => state.card.is_loaded);
  const is_append_loaded = useSelector((state) => state.card.is_append_loaded);
  const is_card_list_load_complete = useSelector(
    (state) => state.card.is_card_list_load_complete
  );
  const level = sessionStorage.getItem("level");
  const mbti = sessionStorage.getItem("mbti");
  const dispatch = useDispatch();

  const userList = [ level, mbti ];

  const scrollCardList = (e) => {
    if (!is_append_loaded || is_card_list_load_complete) return;
    const scrollTop = e.target.scrollTop;
    const cardListHeight = e.target.scrollHeight;
    const contentsHeight = e.target.offsetHeight;
    if ((cardListHeight - contentsHeight) * 0.99 < scrollTop) {
      dispatch(cardActions.appendMyCardListDB());
    }
  };

  const fadeIn = useSpring({
    config: {
      duration: 300,
    },
    width: "100%",
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <React.Fragment>
      <animated.div style={fadeIn}>
        <Grid
          width="100%"
          height="100vh"
          bg="#FBF7F7"
          flex="flex"
          direction="column"
          justify="flex-start"
        >
          <Grid
            width="100%"
            height="20vh"
            flex="flex"
            is_align="center"
            bg="#fff"
            padding="20px 20px"
            position="absolute"
            zIndex="9"
          >
            <UserProfile mypage_user={userList} size="26px" />
          </Grid>
          {/* 기본 리스트 없는 초기상태 */}
          <Grid
            width="100%"
            height="100vh"
            flex="flex"
            direction="column"
            justify="flex-start"
            padding="20vh 0 70px 0"
          >
            {cardList.length == 0 ? (
              <></>
            ) : (
              <Grid width="100%" height="auto" padding="15px 20px 10px 20px">
                <Text size="24px">내 생드백</Text>
              </Grid>
            )}
            <CardList onScroll={scrollCardList}>
              <TbCardMy />
            </CardList>
          </Grid>
          {!is_loaded && <TbLoading />}
        </Grid>
      </animated.div>
      <TbNavigation MyPage={"MyPage"} />
    </React.Fragment>
  );
};

const CardList = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  overflow-y: scroll;
`;

export default MyPage;
