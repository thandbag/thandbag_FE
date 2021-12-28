import React from "react";
import ThandBag from "../static/images/thandbag.png";
import Heads from "./Heads";
import { Grid, Button, Text } from "../elements/TbIndex";
import { ReactComponent as Hit } from "../static/images/Hit.svg";

const TbOneEnd = (props) => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        height="100vh"
        bg="#FBF7F7"
        flex="flex"
        justify="flex-start"
        is_align="center"
        direction="column"
      >
        <Heads
          is_anoter
          bg="#FBF7F7"
          stroke="#333"
          color="#333"
          text="줘 패기 - 나만 보는 경우"
        />
        <Grid
          width="100%"
          height="60%"
          flex="flex"
          justify="flex-start"
          direction="column"
          margin="70px 0 0 0"
          padding="20px 0 0 0"
        >
          <img src={ThandBag} width="50%" height="auto" alt="ThandBag" />
        </Grid>
        <Grid
          width="100%"
          height="35%"
          flex="flex"
          justify="flex-start"
          is_align="flex-start"
        >
          <Grid
            flex="flex"
            is_align="flex-start"
            direction="column"
            justify="flex-start"
            width="100%"
            padding="0 0 0 30px"
          >
            <Text margin="0 0 15px 0">
              <span
                style={{
                  fontSize: "1.3rem",
                  lineHeight: "1.8rem",
                  color: "#333",
                  background:
                    "linear-gradient(to top, #F7C8C8 50%, transparent 50%)",
                }}
              >
                생드백의 아무곳이나
                <br />
                클릭해주세요 👊
              </span>
            </Text>
            <Button
              width="150px"
              height="50px"
              bg="#333"
              radius="12px"
              color="#fff"
              text="생드백 터트리기"
              size="1.3rem"
            />
          </Grid>
          <Grid
            width="100%"
            flex="flex"
            justify="flex-end"
            margin="0 0 70px 0"
            padding="0 15px 0 0"
            position="absolute"
            bottom="26px"
          >
            <Hit width="210" height="210" />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TbOneEnd;
