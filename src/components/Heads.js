import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import Arrow from "../static/icons/arrow.svg";

const Heads = (props) => {
  const { is_anoter } = props;

  // another 헤드
  if(is_anoter) {
    return (
      <React.Fragment>
      <HeadBox>
        <Grid width="10%" height="70px" flex="flex">
          <BackIcon
            onClick={() => {
              history.push("/main");
            }}
          />
        </Grid>
        <Grid width="90%" height="70px" flex="flex" padding="0 40px 0 0">
          <Text size="1.2rem" bold="600">
            {props.text}
          </Text>
        </Grid>
      </HeadBox>
    </React.Fragment>
    )
  }

  return (
    // default 헤드
    <React.Fragment>
      <HeadBox>
        <Grid width="20%" height="70px" bg="green" flex="flex">
          <Text size="2.8rem">🍔</Text>
        </Grid>
        <Grid width="80%" height="70px" bg="blue" flex="flex" />
      </HeadBox>
    </React.Fragment>
  );
};

const HeadBox = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  height: 70px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(120, 120, 120, 0.1);

  @media screen and (min-width: 1024px) {
      margin-left: 11%;
  }
`;

const BackIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${Arrow});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export default Heads;
