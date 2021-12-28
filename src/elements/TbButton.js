import React from "react";
import styled from "styled-components";

const TbButton = (props) => {
  const {
    position,
    width,
    height,
    text,
    _onClick,
    margin,
    bg,
    size,
    color,
    radius,
    display,
  } = props;

  const styles = {
    position: position,
    width: width,
    height: height,
    margin: margin,
    bg: bg,
    color: color,
    size: size,
    radius: radius,
    display: display,
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
  radius: "",
  display: "",
  _onClick: () => {},
  _disabled: () => {},
};

const BtnBasic = styled.button`
  font-family: "KOTRAHOPE";
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: none;
  cursor: pointer;
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.size ? `font-size: ${props.size};` : "")};
  ${(props) => (props.display ? `display: ${props.display};` : "")};
`;

export default TbButton;
