import React, { useEffect } from "react";
import styled from "styled-components";
import Heads from "../components/Heads";
import ThandDetail from "../components/ThandDetail";
import UserProfile from "../components/UserProfile";
import ThandStateImg from "../components/ThandStateImg";
import { Grid, Text } from "../elements/TbIndex";
import { useDispatch, useSelector } from "react-redux";
import card, { actionCreators as cardActions } from "../redux/modules/card";

const TbOneDetail = (props) => {
  const cardDetail = useSelector((state) => state.card.card_detail);
  const dispatch = useDispatch();
  console.log(cardDetail);

  useEffect(() => {
    console.log("되거라");
    dispatch(cardActions.cardDetailOneDB);
  }, []);
  return (
    <React.Fragment>
      {/* 헤드 */}
      <Heads is_anoter bg="#333" stroke="#fff" color="#fff" text="" />
      <DetailsBox>
        {/* 게시글 내용 */}
        <Grid width="100%" height="auto" margin="70px 0 0 0">
          <ThandDetail />
        </Grid>

        {/* 유저 프로필 // 시간 */}
        <Grid
          width="100%"
          height="auto"
          flex="flex"
          bg="#fff"
          padding="16px 20px"
          justify="space-between"
        >
          <UserProfile size="1.3rem" Isize="50" />
          <Grid width="20%" flex="flex" justify="flex-end" padding="20px 0 0 0">
            <Text size="12px" color="#FF5454" family="NotoSansCJK">
              {cardDetail.createdAt}
            </Text>
          </Grid>
        </Grid>

        {/*생드백 때리러가기 버튼*/}
        <ThandStateImg />
      </DetailsBox>
    </React.Fragment>
  );
};

const DetailsBox = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fbf7f7;
`;

export default TbOneDetail;
