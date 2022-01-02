import React from "react";
import Heads from "../components/Heads";
import { ReactComponent as OffClose } from "../static/icons/off_close.svg";
import { Grid, Text, Image, Input, Button } from "../elements/TbIndex";

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
        <Grid
          width="100%"
          height="210px"
          padding="10px 20px"
          bg="#fff"
          border="1px solid #eee"
          flex="flex"
          direction="column"
        >
          <Grid width="100%" height="25%" flex="flex">
            <Grid flex="flex" width="30%" height="100%" justify="flex-start">
              <Text size="17px">닉네임</Text>
            </Grid>
            <Grid
              flex="flex"
              justify="space-between"
              borderB
              width="70%"
              height="100%"
            >
              <Input color="#FF5454" size="18px" />
              <OffClose />
            </Grid>
          </Grid>

          <Grid width="100%" height="25%" flex="flex">
            <Grid flex="flex" width="30%" height="100%" justify="flex-start">
              <Text size="17px">비밀번호</Text>
            </Grid>
            <Grid flex="flex" justify="flex" borderB width="70%" height="100%">
              <Input color="#FF5454" size="18px" />
            </Grid>
          </Grid>

          <Grid width="100%" height="25%" flex="flex">
            <Grid flex="flex" width="30%" height="100%" justify="flex-start">
              <Text size="17px">새 비밀번호</Text>
            </Grid>
            <Grid
              flex="flex"
              justify="space-between"
              borderB
              width="70%"
              height="100%"
            >
              <Input color="#FF5454" size="18px" />
              <OffClose />
            </Grid>
          </Grid>

          <Grid width="100%" height="25%" flex="flex">
            <Grid flex="flex" width="30%" height="100%" justify="flex-start">
              <Text size="17px">새 비밀번호 확인</Text>
            </Grid>
            <Grid
              flex="flex"
              justify="space-between"
              borderB
              width="70%"
              height="100%"
            >
              <Input color="#FF5454" size="18px" />
              <OffClose />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          width="100%"
          height="51px"
          border="1px solid #eee"
          bg="#fff"
          flex="flex"
          justify="flex-start"
          padding="10px 20px"
          margin="43px 0 0 0"
          cursor="pointer"
        >
          <Text>로그아웃</Text>
        </Grid>
        <Grid
          width="100%"
          height="auto"
          flex="flex"
          position="absolute"
          bottom="1.5rem"
          left="0"
        >
          <Button
            width="223px"
            height="60px"
            bg="#333"
            color="#fff"
            size="24px"
            text="저장"
            radius="12px"
            cursor="pointer"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MyEdit;
