import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../elements/TbIndex";
import state_img from "../static/images/state_img.png";

const ThandStateImg = (props) => {
  const { display } = props;
  const styles = { display: display };
  return (
    <React.Fragment>
      <BackgroundState>
        <Grid
          width="100%"
          padding="16px 20px"
          flex="flex"
          justify="flex-end"
          is_align="flex-end"
          direction="column"
        >
          <Text color="#fff" size="1.2rem" margin="0 0 10px 0" padding="0 16px 0 0">
            🔥 현재{" "}
            <span
              style={{
                color: "#fff",
                padding: "0 3px",
                background:
                  "linear-gradient(to top, #333 50%, transparent 50%)",
              }}
            >
              999대
            </span>{" "}
            맞음!!
          </Text>
          <Button
            {...styles}
            width="176px"
            height="43px"
            color="#fff"
            radius="12px"
            bg="#333"
            size="1.2rem"
            text="생드백 때리러가기 >"
          />
        </Grid>
      </BackgroundState>
    </React.Fragment>
  );
};

const BackgroundState = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  background-image: url(${state_img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default ThandStateImg;
