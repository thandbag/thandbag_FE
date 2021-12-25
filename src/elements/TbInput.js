import React from "react";
import styled from "styled-components";

const TbInput = (props) => {
  const {
    boxSizing,
    type,
    placeholder,
    margin,
    _onChange,
    padding,
    width,
    height,
    value,
  } = props;

  const styles = {
    margin: margin,
    padding: padding,
    boxSizing: boxSizing,
    height: height,
    width: width,
  };

  return (
    <>
      <InputBox
        {...styles}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
      />
    </>
  );
};

TbInput.defaultProps = {
  border: false,
  placeholder: "",
  type: "text",
  padding: "6px 12px",
  margin: "0px",
  value: "",
  _onChange: () => {},
};

const InputBox = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: ${(props) => props.boxSizing};
  font-size: 17px;
  border: none;
  border-bottom: 1px solid #ccc;
  
`;

export default TbInput;
