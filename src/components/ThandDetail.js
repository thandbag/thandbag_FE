import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";

const ThandDetail = (props) => {
  const {one, share, contents} = props
  if(share){
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
              {contents.title}
            </Text>
          </Grid>
          <TextBox>
            <div dangerouslySetInnerHTML={{ __html : contents.content}}></div>
          </TextBox>
        </DetailBox>
      </React.Fragment>
    );
  }
  
  return(
    <React.Fragment>
      <DetailBox>
        <Grid
          width="100%"
          height="50px"
          bg="#333"
          flex="flex"
          justify="flex-start"
          padding="12px 20px 16px 20px">
          <Text bold="400" color="#fff" size="28px">
            {one.title}
          </Text>
        </Grid>
        <TextBox>
          <div dangerouslySetInnerHTML={{ __html : one.content}}></div>
        </TextBox>
      </DetailBox>
    </React.Fragment>
  )
};

const TextBox = styled.div`
  width: 100%;
  height: 280px;
  max-height: 280px;
  overflow-y: scroll;
  background-color: #fff;
  padding: 20px;
`;

const DetailBox = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
`;

export default ThandDetail;
