import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "@react-spring/web";
import { ReactComponent as ThandBagLogo } from "../static/icons/thandbag_logo.svg";

function WelcomeOne() {
  const logoImg = useSpring({
    config: {
      duration: 280,
      tension: 170,
      precision: 0.01,
    },
    opacity: 1,
    scale: 1,
    from: { scale: 0, opacity: 0 },
  });

  return (
    <LogoBox>
      <animated.div style={logoImg}>
        <ThandBagLogo width="220px" height="220px" />
      </animated.div>
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

export default WelcomeOne;
