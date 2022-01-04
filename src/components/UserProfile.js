import React from "react";
import { Grid, Text, Image, Button } from "../elements/TbIndex";
import { history } from "../redux/configureStore";

const UserProfile = (props) => {
  const { size, Isize, height, margin, chat_user, mypage_user } =
    props;

  const styles = {
    size: size,
    Isize: Isize,
    height: height,
    margin: margin,
    chat_user: chat_user,
    mypage_user: mypage_user,
  };

  if (mypage_user) {
    return (
      <React.Fragment>
        <Grid flex="flex" width="100%" hegiht="auto" bg="#fff">
          <Grid width="80%" height="auto">
            <UserProfile Isize="98" size="26px" />
          </Grid>
          <Grid flex="flex" justify="flex-end" width="20%" height="40px">
            <Button
              width="30px"
              height="30px"
              bg="#efefef"
              radius="100%"
              _onClick={() => {
                history.push("/MyEdit");
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  if (chat_user) {
    return (
      <React.Fragment>
        <Grid
          flex="flex"
          width="100%"
          hegiht="auto"
          padding="20px"
          bg="#fff"
          borderB="1px solid #efefef"
        >
          <Grid width="80%" height="auto">
            <UserProfile Isize="40" size="1.4rem" />
          </Grid>
          <Grid flex="flex" justify="flex-end" width="20%" height="40px">
            <Button width="30px" height="30px" bg="#efefef" radius="100%" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid width="auto" {...styles} flex="flex" bg="fff">
        {/* 유저 프로필 사진 */}
        <Grid {...styles} width="auto" height="auto" flex="flex">
          <Image {...styles} />
        </Grid>
        {/* mbti // 레벨 */}
        <Grid
          width="85%"
          height="auto"
          flex="flex"
          direction="column"
          margin="0 0 0 10px"
        >
          <Grid width="100%" height="50%" flex="flex" justify="flex-start">
            <Grid
              width="auto"
              padding="3px 8px"
              bg="#FF5454"
              flex="flex"
              radius="20px"
              margin="0 4px 0 0"
            >
              <Text color="#fff" size="0.9rem" bold="400">
                mbti
              </Text>
            </Grid>
            <Grid
              width="auto"
              padding="3px 8px"
              bg="#333"
              flex="flex"
              radius="20px"
            >
              <Text color="#fff" size="0.9rem" bold="400">
                Lv.1
              </Text>
            </Grid>
          </Grid>
          <Grid width="100%" height="50%" margin="5px 0 0 0">
            <Text {...styles}>닉네임 영역 입니다</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default UserProfile;
