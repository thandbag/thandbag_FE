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
    value,
  } = props;

  const styles = {
    margin: margin,
    padding: padding,
    boxSizing: boxSizing,
    height: height,
    width: width,
    border: border,
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
  box-sizing: border-box;
  font-size: 17px;
  font-family: 'KOTRAHOPE';
  background: #FBF7F7;
  color: #FF5454;
  outline: none;
  border-radius: 10px;
  border: ${(props) => (props.border ? `${props.border}` : 'none')};
  /* border:none; */
  padding: 10px 5px 10px 5px;
  ::placeholder{
    color: #F7C8C8;
  }
  
  
  
`;

export default TbInput;
