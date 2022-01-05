import React from "react";
import styled from "styled-components";

const TbButton = (props) => {
  const {
    position,
    login,
    social,
    width,
    height,
    children,
    text,
    _onClick,
    margin,
    bg,
    size,
    color,
    radius,
    display,
    padding,
    category,
  } = props;

  const styles = {
    position: position,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    color: color,
    size: size,
    radius: radius,
    display: display,
    category: category,
  };

  if (category) {
    return (
      <CategoryBtn  {...styles} onClick={_onClick}>
        {text}
      </CategoryBtn>
    );
  }

  if (social) {
    return (
      <BtnSocial {...styles} onClick={_onClick}>
        {children}
      </BtnSocial>
    );
  }

  if (login) {
    return (
      <BtnLogin {...styles} onClick={_onClick}>
        {text}
      </BtnLogin>
    );
  }

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
  margin: "",
  padding: "",
  bg: false,
  color: "#555",
  size: "1rem",
  radius: "",
  display: "",
  _onClick: () => {},
  _onChange: () => {},
  _disabled: () => {},
};

const BtnBasic = styled.button`
  font-family: "KOTRAHOPE";
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: none;
  cursor: pointer;
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.size ? `font-size: ${props.size};` : "")};
  ${(props) => (props.display ? `display: ${props.display};` : "")};
`;

const CategoryBtn = styled(BtnBasic)`
  &:hover {
    color: #ffffff;
    background: #ff5454;
    transition: 0.35s;
  }
  &:not(hover) {
    color: #333;
    background: #fff;
    transition: 0.35s;
  }
`;

const BtnLogin = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: 22px;
  font-family: "KOTRAHOPE";
  background: #333333;
  color: #ffffff;
  outline: none;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: #ff5454;
    transition: 0.55s;
  }
  &:not(hover) {
    color: #fff;
    background: #333;
    transition: 0.555s;
  }
`;

const BtnSocial = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: 22px;
  font-family: "KOTRAHOPE";
  background: #f6e24c;
  color: #381e1f;
  outline: none;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

export default TbButton;
