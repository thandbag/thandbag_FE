import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import { ReactComponent as Arrow } from "../static/icons/arrow.svg";

const Heads = (props) => {
  const { is_anoter, bg, color, fill, stroke } = props;

  const styles = {
    bg: bg,
    color: color,
    fill: fill,
    stroke: stroke,
  };

  // another 헤드
  if (is_anoter) {
    return (
      <React.Fragment>
        <HeadBox {...styles}>
          <Grid
            width="10%"
            height="70px"
            flex="flex"
            padding="20px 0 20px 20px"
          >
            <BackIcon
              onClick={() => {
                history.push("/main");
              }}
            >
              <Arrow {...styles} width="20" height="20" />
            </BackIcon>
          </Grid>

          <Grid width="90%" height="70px" flex="flex" padding="20px 0">
            <Text size="1.4rem" {...styles}>
              {props.text}
            </Text>
          </Grid>
        </HeadBox>
      </React.Fragment>
    );
  }

  return (
    // default 헤드
    <React.Fragment>
      <HeadBox>
        <Grid width="20%" height="70px" bg="#fff" flex="flex">
          <Text size="2.8rem">🍔</Text>
        </Grid>
        <Grid width="80%" height="70px" bg="#fff" flex="flex" />
      </HeadBox>
    </React.Fragment>
  );
};

const HeadBox = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  height: auto;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};

  @media screen and (min-width: 1024px) {
    margin-left: 11%;
  }
`;

const BackIcon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Heads;
