import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";
import { useDispatch, useSelector } from "react-redux";
import card, { actionCreators as cardActions } from "../redux/modules/card";

const ThandDetail = (props) => {
  const cardDetail = useSelector((state) => state.card.card_detail);
  const dispatch = useDispatch();
  console.log(cardDetail);

  useEffect(() => {
    dispatch(cardActions.cardDetailOneDB());
  }, []);
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
            {cardDetail.title}
          </Text>
        </Grid>
        <TextBox>
          <Text bold="100" size="20px" LHeight="28px">
            {cardDetail.content}
            <br />
            {/* 행간: 28 */}
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
