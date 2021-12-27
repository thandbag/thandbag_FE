import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "../elements/TbIndex";

const ThandDetail = (props) => {
  return (
    // 글작성
    <React.Fragment>
      <DetailBox>
        <Grid
            width="100%"
            height="130px"
            bg="red"
            flex="flex"
            justify="flex-start"
          >
            <Image thandbag_state />
          </Grid>
        <Grid
          width="100%"
          height="50px"
          flex="flex"
          justify="flex-start"
          padding="0 0 0 10px"
        >
          <Text bold="600">제목</Text>
        </Grid>
        <Grid
          width="100%"
          height="45px"
          flex="flex"
          justify="flex-start"
          padding=" 0 0 0 5px"
          margin="5px 0"
        >
          <Image />
          <Text bold="600" margin="0 15px 0">
            닉네임
          </Text>
          <Text bold="600" margin="0 15px">
            MBTI
          </Text>
          <Text margin="0 0 0 10px">10분전..</Text>
        </Grid>
        <TextBox>
          <Text bold="600">내용</Text>
        </TextBox>
      </DetailBox>
      <Grid width="90%" flex="flex" justify="flex-end" margin="20px 0 0 0">
        <Text bold="600" size="1rem">😡 현재 467대 맞음!</Text>
      </Grid>
    </React.Fragment>
  );
};

const TextBox = styled.div`
  width: 100%;
  height: 300px;
  max-height: 300px;
  overflow-y: scroll;
  padding: 10px;
`;

const DetailBox = styled.div`
  width: 90%;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
`;

export default ThandDetail;
