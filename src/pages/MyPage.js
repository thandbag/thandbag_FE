import React from "react";
import styled from "styled-components";
import TbNavigation from "../components/TbNavigation";
import UserProfile from "../components/UserProfile";
import { Grid, Text, Image } from "../elements/TbIndex";
import TbCardMy from "../components/TbCardMy";
import { useSelector } from "react-redux";
import TbLoading from "./TbLoading";


const MyPage = (props) => {
  const cardList = useSelector((state) => state.card.my_list);
  const is_loaded = useSelector((state) => state.card.is_loaded);

  return (
    <React.Fragment>
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
          height="182px"
          flex="flex"
          is_align="center"
          bg="#fff"
          padding="20px 20px"
        >
          <UserProfile mypage_user />
        </Grid>
        {/* 기본 리스트 없는 초기상태 */}
        <Grid
          width="100%"
          height="82%"
          flex="flex"
          direction="column"
          justify="flex-start"
          padding="0 0 70px 0">
            { cardList.length == 0 ?  <></> :
            <Grid width="auto" margin="20px 0 0 0">
                <Text size="30px">내 생드백</Text> 
            </Grid>
            }
            <CardList>
              <TbCardMy/>
            </CardList>
        </Grid>
        {!is_loaded && <TbLoading/>}
      </Grid>
      <TbNavigation />
      
      
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
