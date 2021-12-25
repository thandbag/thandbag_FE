import React from "react";
import styled from "styled-components";

const TbButton = (props) => {
  const { position, width, height, text, _onClick, margin, bg, size, color, } = props;

  const styles = {
    position: position,
    width: width,
    height: height,
    margin: margin,
    bg: bg,
    color: color,
    size: size,
  };

  return (
    <BtnBasic {...styles} onClick={_onClick}>
      {text}
    </BtnBasic>
  );
};

TbButton.defaultProps = {
  position: false,
  width: "100%",
  height: "false",
  text: "텍스트",
  margin: "",
  bg: false,
  color: "#555",
  size: "1rem",
  _onClick: () => {},
  _disabled: () => {},
};

const BtnBasic = styled.button`
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: none;
  border-radius: 4px;
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.size ? `font-size: ${props.size};` : "")};
`;

export default TbButton;
