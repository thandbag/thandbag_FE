import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import { ReactComponent as Arrow } from "../static/icons/arrow.svg";
import { ReactComponent as SearchIcon } from "../static/icons/icon_search.svg";
import { ReactComponent as SearchIconBlack } from "../static/icons/icon_search_black.svg";
import { ReactComponent as ThandbagLogo } from "../static/icons/thandbag_logo.svg";
import SearchModal from "./TbModals/SearchModal";
import { useDispatch } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card";

const Heads = (props) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState("false");
  const {
    is_anoter,
    list,
    post_id,
    pastHitcount,
    hitcount,
    hit,
    chat,
    stompDisConnect,
    none,
    bg,
    color,
    fill,
    stroke,
    borderT,
    borderB,
  } = props;

  const styles = {
    bg: bg,
    color: color,
    fill: fill,
    stroke: stroke,
    none: none,
    borderT: borderT,
    borderB: borderB,
  };

  // another 헤드
  if (is_anoter) {
    return (
      <React.Fragment>
        <HeadBox {...styles}>
          <Grid
            width="10%"
            height="70px"
            position="absolute"
            top="0"
            left="10px"
            flex="flex"
          >
            <BackIcon
              onClick={() => {
                history.goBack();
              }}
            >
              <Arrow {...styles} width="26" height="26" />
            </BackIcon>
          </Grid>
          <Grid width="100%" height="70px" flex="flex">
            <Text size="1.4rem" {...styles}>
              {props.text}
            </Text>
          </Grid>
        </HeadBox>
      </React.Fragment>
    );
  }

  if (list) {
    return (
      <React.Fragment>
        <HeadBox {...styles}>
          <Grid
            width="10%"
            height="70px"
            position="absolute"
            top="0"
            left="10px"
            flex="flex"
          >
            {modal === true ? <></>:
            <BackIcon
            onClick={() => {
              history.replace("/main");
            }}
          >
            <Arrow {...styles} width="26" height="26" />
          </BackIcon>
            }
          </Grid>
          <Grid
            width="10%"
            height="70px"
            position="absolute"
            top="0"
            right="0"
            flex="flex"
          >
            <SearchWrap>
              <SearchIcon
                {...styles}
                width="20"
                height="20"
                onClick={() => {
                  setModal(true);
                }}
              />
            </SearchWrap>
            {modal === true ? <SearchModal setModal={setModal} /> : null}
          </Grid>
          <Grid width="100%" height="70px" flex="flex">
            <Text size="1.4rem" {...styles}>
              {props.text}
            </Text>
          </Grid>
        </HeadBox>
      </React.Fragment>
    );
  }

  if (chat) {
    return (
      <React.Fragment>
        <HeadBox {...styles}>
          <Grid
            width="10%"
            height="70px"
            position="absolute"
            top="0"
            left="10px"
            flex="flex"
          >
            <BackIcon
              onClick={() => {
                history.push("/TbChatList");
                stompDisConnect();
              }}
            >
              <Arrow {...styles} width="26" height="26" />
            </BackIcon>
          </Grid>
          <Grid width="100%" height="70px" flex="flex">
            <Text size="1.4rem" {...styles}>
              {props.text}
            </Text>
          </Grid>
        </HeadBox>
      </React.Fragment>
    );
  }

  if (hit) {
    return (
      <React.Fragment>
        <HeadBox {...styles}>
          <Grid
            width="10%"
            height="70px"
            position="absolute"
            top="0"
            left="20px"
            flex="flex"
          >
            <BackIcon
              onClick={() => {
                dispatch(
                  cardActions.postHitCountDB(post_id, hitcount, pastHitcount)
                );
                history.goBack();
              }}
            >
              <Arrow {...styles} width="26" height="26" />
            </BackIcon>
          </Grid>
          <Grid width="100%" height="70px" flex="flex">
            <Text size="1.4rem" {...styles}>
              {props.text}
            </Text>
          </Grid>
        </HeadBox>
      </React.Fragment>
    );
  }
  if (none) {
    return (
      <React.Fragment>
        <HeadBox {...styles}>
          <Grid width="100%" height="70px" flex="flex">
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
        <Grid width="100%" height="70px" flex="flex">
          <ThandbagLogo width="100%" />
        </Grid>
      </HeadBox>
    </React.Fragment>
  );
};

const HeadBox = styled.div`
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.borderT ? "border-top: 1px solid #efefef;" : "")};
  ${(props) => (props.borderB ? "border-bottom: 1px solid #efefef;" : "")};
`;

const BackIcon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) => (props.none ? `display: ${props.none};` : "")};
`;

export default Heads;
