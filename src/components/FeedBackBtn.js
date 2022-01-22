import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/TbIndex";
import FeedBackButton from "../static/icons/feedbag.svg";
import Message from "../static/icons/message.svg";
import { useSpring, animated } from "react-spring";

const FeedBackBtn = (props) => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { y: 10 },
    to: { y: -20 },
    config: { mass: 1, tension: 120, friction: 100, duration: 500 },
  });

  return (
    <>
      <FeedBack
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSd9yXC3p_4yJGu5XdiBnpJFMDJGT0alrIvRt3AEx2n2pViNTQ/viewform",
            "_blank"
          )
        }
      >
        <Grid flex="flex" with="100%" height="auto">
          <BoxBg>
            <Text size="1.45rem" LHeight="2.2rem">
              피드백을 남기고 🥳
              <br />
              <span
                style={{
                  color: "#ff5454",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                스타벅스
              </span>{" "}
              기프티콘 챙기기 !
            </Text>
          </BoxBg>
        </Grid>
        <Grid
          flex="flex"
          with="100px"
          height="100px"
          position="absolute"
          left="6rem"
          top="-20px"
        >
          <animated.div
            style={{
              width: 80,
              height: 80,
              backgroundImage: `url(${FeedBackButton})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              ...styles,
            }}
          />
        </Grid>
      </FeedBack>
    </>
  );
};

const FeedBack = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 5%;
  bottom: 8%;
  cursor: pointer;

  @media all and (min-width: 1240px) {
    right: 2%;
  }

  @media all and (min-width: 1920px) {
    right: 7%;
  }

  @media screen and (max-width: 1366px) {
    display: none;
  }
`;

const BoxBg = styled.div`
  width: 19rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Message});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default FeedBackBtn;
