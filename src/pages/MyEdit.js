import React from "react";
import Heads from "../components/Heads";
import { Grid, Text, Image } from "../elements/TbIndex";

const MyEdit = (props) => {
  return (
    <React.Fragment>
      <Heads is_anoter bg="#FBF7F7" stroke="#333" color="#333" />
      <Grid
        width="100%"
        height="100vh"
        bg="#FBF7F7"
        flex="flex"
        justify="flex-start"
        direction="column"
        padding="70px 0 0 0"
      >
        <Grid
          width="100%"
          height="auto"
          flex="flex"
          direction="column"
          padding="40px 0"
        >
          <Image Isize="150" />
          <Text
            size="20px"
            bold="400"
            deco="underline"
            decoP="under"
            margin="36px 0 0 0"
            cursor="pointer"
          >
            프로필 이미지 변경
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MyEdit;
