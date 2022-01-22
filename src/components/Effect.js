import React from "react";
import styled from "styled-components";
import gimoling from "../static/images/strike_effect.gif";

const Effect = ({ cursorPosition, isVisible }) => {
  return (
    <EffectStyle
      cursorPosition={cursorPosition}
      isVisible={isVisible}
    ></EffectStyle>
  );
};

const EffectStyle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -35px;
  left: ${(props) => props.cursorPosition}px;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  background-image: url(${gimoling});
  background-size: cover;
`;

export default Effect;
