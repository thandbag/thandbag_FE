import React from "react";
import { Grid, Text } from "../elements/TbIndex";
import { ReactComponent as Hit } from "../static/images/Hit.svg";
import { ReactComponent as PM } from "../static/images/punch_message.svg";
import { history } from "../redux/configureStore";
import styled from "styled-components";

const EndContain = (props) => {
  const { is_Two } = props;

  if (is_Two) {
    // ************* 전체 다 볼수있는 컴포넌트 - 생드백 터트리기 버튼 없음 *************
    return (
      <React.Fragment>
        <ContentBox>
          <Grid position="absolute" bottom="25px" right="20px">
            <Text size="1.4rem" align="right">
              <span
                style={{
                  color: "#333",
                  lineHeight: "2rem",
                  background:
                    "linear-gradient(to top, #F7C8C8 50%, transparent 50%)",
                }}
              >
                생드백의 아무 곳이나
                <br />
                클릭해주세요! 👊
              </span>
            </Text>
          </Grid>
          <Grid
            width="220px"
            height="220px"
            position="absolute"
            bottom="80px"
            right="15px"
          >
            <Hit />
          </Grid>
        </ContentBox>
      </React.Fragment>
    );
  }

  return (
    // ************* 글 작성자만 볼수있는 컴포넌트 - 생드백 터트리기 버튼 있음 *************
    <React.Fragment>
      <ContentBox>
        <Grid position="absolute" bottom="95px" left="20px">
          <Text size="1.4rem">
            <span
              style={{
                color: "#333",
                lineHeight: "2rem",
                background:
                  "linear-gradient(to top, #F7C8C8 50%, transparent 50%)",
              }}
            >
              생드백의 아무 곳이나
              <br />
              클릭해주세요! 👊
            </span>
          </Text>
        </Grid>
        <Grid
          width="220px"
          height="220px"
          position="absolute"
          bottom="55px"
          right="15px"
        >
          <Hit />
        </Grid>
        <Grid
          width="220px"
          height="220px"
          position="absolute"
          bottom="-138px"
          right="-55px"
        >
          <PM
            onClick={() => {
              history.push("/tbfinish");
            }}
          />
        </Grid>
      </ContentBox>
    </React.Fragment>
  );
};

const ContentBox = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 70px;
`;

export default EndContain;
