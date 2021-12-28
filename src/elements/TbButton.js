import React from "react";
import styled from "styled-components";

const TbButton = (props) => {
  const { position, login, social, width,children, height, text, _onClick, margin, bg, size, color, padding } = props;

  const styles = {
    position: position,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    color: color,
    size: size,
  };

  if(social){
    return (
      <BtnSocial {...styles} onClick={_onClick}>
        {children}
      </BtnSocial>
    );
  };

  if(login){
    return (
      <BtnLogin {...styles} onClick={_onClick}>
        {text}
      </BtnLogin>
    );
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
  margin: "",
  padding: "",
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

const BtnLogin = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: 22px;
  font-family: 'KOTRAHOPE';
  background: #333333;
  color: #FFFFFF;
  outline: none;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  &:hover{
    color: #FFFFFF;
    background: #FF5454;
  }
`;

const BtnSocial = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: 22px;
  font-family: 'KOTRAHOPE';
  background: #F6E24C;
  color: #381E1F;
  outline: none;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;


export default TbButton;
