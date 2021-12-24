import React from "react";
import WelcomeOne from "../components/WelcomeOne.js";
import WelcomeTwo from "../components/WelcomeTwo.js";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";

function Welcome() {
  const fadeOut = useSpring({
    width: "100%",
    height: "100vh",
    backgroundColor: "#FF5454",
    position: "absolute",
    opacity: 0,
    from: { opacity: 1 },
    transition: "0.5s",
    transitionDelay: "1.2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const fadeIn = useSpring({
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    opacity: 1,
    from: { opacity: 0 },
    transition: "0.8s",
    transitionDelay: "1.45s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });

  return (
    <React.Fragment>
      <WelcomeBox>
        <animated.div style={fadeOut}>
          <WelcomeOne />
        </animated.div>
        <animated.div style={fadeIn}>
          <WelcomeTwo />
        </animated.div>
      </WelcomeBox>
    </React.Fragment>
  );
}

const WelcomeBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
`;

export default Welcome;
