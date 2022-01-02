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
    title,
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
    title: title,
  };

  if (title) {
    return (
      <>
        <InputTitle
          {...styles}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
          className={_className}
        />
      </>
    );
  }

  return (
    <>
      <InputBox
        {...styles}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={_onChange}
        className={_className}
      />
    </>
  );
};

TbInput.defaultProps = {
  _className: "",
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
  outline: none;

  &::placeholder {
    color: #f7c8c8;
  }
`;

const InputTitle = styled.input`
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
  outline: none;

  &::placeholder {
    color: #ccc;
  }
`;

export default TbInput;
