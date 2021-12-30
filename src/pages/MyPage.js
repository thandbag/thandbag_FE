import React from "react";
import Navigation from "../components/Navigation";
import UserProfile from "../components/UserProfile";
import NoThandBag from "../static/images/no_thnadbag.png";
import { Grid, Text, Image } from "../elements/TbIndex";

const MyPage = (props) => {
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
          is_align="flex-end"
          bg="#fff"
          padding="20px 20px"
        >
          <UserProfile mypage_user />
        </Grid>
        {/* 기본 리스트 없는 초기상태 */}
        <Grid
          width="100%"
          height="76%"
          flex="flex"
          direction="column"
          padding="0 0 100px 0"
        >
          <Image no_thand />
          <Text color="#F7C8C8" size="24px" margin="40px 0 0 0">
            아직 생드백이 없어요!
          </Text>
        </Grid>
      </Grid>
      <Navigation />
    </React.Fragment>
  );
};

export default MyPage;
