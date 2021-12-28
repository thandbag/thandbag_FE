import React from "react";
import { Grid, Text, Image } from "../elements/TbIndex";

const UserProfile = (props) => {
  const { size, Isize } = props;

  const styles = {
    size: size,
    Isize: Isize,
  };

  return (
    <React.Fragment>
      <Grid width="auto" flex="flex">
        {/* 유저 프로필 사진 */}
        <Grid width="auto" height="auto" flex="flex">
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
              width="43px"
              padding="3px"
              bg="#FF5454"
              flex="flex"
              radius="20px"
              margin="0 5px 0 0"
            >
              <Text color="#fff" size="0.7rem" bold="bold">
                mbti
              </Text>
            </Grid>
            <Grid
              width="43px"
              padding="3px"
              bg="#333"
              flex="flex"
              radius="20px"
            >
              <Text color="#fff" size="0.7rem" bold="bold">
                Lv.1
              </Text>
            </Grid>
          </Grid>
          <Grid width="100%" height="50%" margin="5px 0 0 0">
            <Text {...styles}>작성자 닉네임 영역 입니다</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default UserProfile;
