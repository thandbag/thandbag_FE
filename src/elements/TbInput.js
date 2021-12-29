import React from "react";
import styled from "styled-components";

const TbInput = (props) => {
  const {
    boxSizing,
    type,
    placeholder,
    margin,
    _onChange,
    _className,
    padding,
    width,
    border,
    height,
    radius,
    bg,
    size,
    color,
    value,
  } = props;

  const styles = {
    margin: margin,
    padding: padding,
    boxSizing: boxSizing,
    height: height,
    width: width,
    radius: radius,
    border: border,
    bg: bg,
    size: size,
    color: color,

  };

  return (
    <>
      <InputBox
        {...styles}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={_onChange}
        className={_className}
      />
    </>
  );
};

TbInput.defaultProps = {
  _className: '',
  border: "none",
  placeholder: "",
  bg: "",
  type: "text",
  padding: "6px 12px",
  margin: "0px",
  value: "",
  color: "",
  _onChange: () => {},
};

const InputBox = styled.input`
  font-family: "KOTRAHOPE";
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: ${(props) => props.boxSizing};
  font-size: ${(props) => props.size};
  border: ${(props) => props.border};
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  font-family: 'KOTRAHOPE';
  outline: none;
  border-radius: 10px;

  &::placeholder {
    color: #F7C8C8;
  }

`;

export default TbInput;
