import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

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
    marginTop: "25px",
    color: "#fff",
    opacity: 1,
    from: { opacity: 0 },
    transition: "0.5s",
  });

  return (
    <LogoBox>
      <animated.h1 style={logoImg}>🍟</animated.h1>
      <animated.h1 style={logoText}>Thand Bag .</animated.h1>
    </LogoBox>
  );
}

const LogoBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default WelcomeOne;
