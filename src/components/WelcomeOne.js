import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import ThandBagImg from "../static/images/thandbag.png";

function WelcomeOne() {
  const logoImg = useSpring({
    fontSize: "110px",
    scale: 1,
    from: { scale: 0 },
    transition: "0.12s",
  });

  const logoText = useSpring({
    fontSize: "50px",
    fontWeight: "bold",
    color: "#fff",
    opacity: 1,
    from: { opacity: 0 },
    transition: "0.5s",
  });

  return (
    <LogoBox>
      <TopBox>
        <animated.h1 style={logoImg}>
          🍔
        </animated.h1>
      </TopBox>
      <BottomBox>
        <animated.h1 style={logoText}>Thand Bag .</animated.h1>
      </BottomBox>
    </LogoBox>
  );
}

const LogoBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomBox = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  margin-top: 30px;
`;

export default WelcomeOne;
