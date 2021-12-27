import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";

const ThandDetail = (props) => {
  return (
    // 글작성
    <React.Fragment>
      <DetailBox>
        <Grid
          width="100%"
          height="50px"
          bg="#333"
          flex="flex"
          justify="flex-start"
          padding="12px 20px 16px 20px"
        >
          <Text bold="400" color="#fff" size="28px">
            제목입니다
          </Text>
        </Grid>
        <TextBox>
          <Text bold="100" size="20px" LHeight="28px">
            내용 텍스트 부분입니다.
            <br />
            행간: 28
          </Text>
        </TextBox>
      </DetailBox>
    </React.Fragment>
  );
};

const TextBox = styled.div`
  width: 100%;
  height: 280px;
  max-height: 280px;
  overflow-y: scroll;
  padding: 20px;
`;

const DetailBox = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
`;

export default ThandDetail;
