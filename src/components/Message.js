import React from "react";
import { Grid, Text, Image } from "../elements/TbIndex";

const Message = (props) => {
  const { messageInfo } = props;
  const user_info = sessionStorage.getItem("nickname");

  if (user_info === messageInfo.sender) {
    return (
      <Grid
        width="100%"
        height="auto"
        margin="16px 0"
        flex="flex"
        justify="flex-end"
      >
        <Grid marginT="auto" width="auto" margin="0 6px 0 0">
          <Text size="0.5rem" color="#878787" bold="bold" family="NotoSansCJK">
            {messageInfo.createdAt}
          </Text>
        </Grid>
        <Grid
          radius="10px"
          bg="#F7C8C8"
          padding="10px"
          width="auto"
          maXwidth="67%"
        >
          <Text
            family="NotoSansCJK"
            bold="600"
            size="13px"
            LHeight="17px"
            width="auto"
            color="#fff"
            Wbreack="keep-all"
          >
            {messageInfo.message}
          </Text>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        width="100%"
        height="auto"
        margin="20px 0"
        flex="flex"
        justify="flex-start"
      >
        <Grid
          flex="flex"
          direction="column"
          justify="flex-start"
          width="auto"
          height="65px"
          margin="0 10px 0 0"
        >
          <Image src={messageInfo.senderProfileImg} shape="circle" Isize="40" />
        </Grid>
        <Grid
          width="90%"
          hegight="auto"
          flex="flex"
          direction="column"
          justify="flex-start"
          is_align="flex-start"
        >
          <Grid width="100%">
            <Text padding="5px" color="#333">
              {messageInfo.sender}
            </Text>
          </Grid>
          <Grid
            width="100%"
            height="auto"
            flex="flex"
            justify="flex-start"
            is_align="flex-end"
          >
            <Grid
              radius="10px"
              bg="#FBF7F7"
              padding="10px"
              width="auto"
              maXwidth="67%"
              height="auto"
            >
              <Text
                family="NotoSansCJK"
                bold="600"
                size="13px"
                LHeight="17px"
                width="auto"
                color="#333"
                Wbreack="keep-all"
              >
                {messageInfo.message}
              </Text>
            </Grid>
            <Grid width="auto" margin="0 0 0 6px">
              <Text size="0.5rem" color="#878787" bold="bold" family="NotoSansCJK">
                {messageInfo.createdAt}
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

export default Message;
