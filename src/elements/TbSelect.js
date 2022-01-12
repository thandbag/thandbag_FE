import React from "react";
import styled from "styled-components";

const TbSelect = (props) => {
  const {
    boxSizing,
    margin,
    _onChange,
    padding,
    width,
    border,
    height,
    tbwrite,
    tblist,
    value,
    radius,
    bg,
  } = props;

  const styles = {
    margin: margin,
    padding: padding,
    boxSizing: boxSizing,
    height: height,
    width: width,
    border: border,
    radius: radius,
    bg: bg,
  };

  //생드백 작성 부분
  if (tbwrite) {
    return (
      <SelectBasic {...styles} onChange={_onChange}>
        <OptionBasic className="red" value="0">
          카테고리 선택
        </OptionBasic>
        <OptionBasic value="1">사회생활</OptionBasic>
        <OptionBasic value="1">공부</OptionBasic>
        <OptionBasic value="1">진로고민</OptionBasic>
        <OptionBasic value="1">대인관계</OptionBasic>
        <OptionBasic value="1">가정문제</OptionBasic>
        <OptionBasic value="1">연애</OptionBasic>
        <OptionBasic value="1">기타</OptionBasic>
      </SelectBasic>
    );
  }

  //전체리스트부분
  if (tblist) {
    return (
      <SelectBasic {...styles} onChange={_onChange}>
        <OptionBasic className="red" value="0">
          전체
        </OptionBasic>
        <OptionBasic value="1">터트림</OptionBasic>
        <OptionBasic value="1">터트리는 중</OptionBasic>
      </SelectBasic>
    );
  }

  return (
    <SelectBasic {...styles} value={value} onChange={_onChange}>
      <OptionBasic value="0">
        MBTI 선택
      </OptionBasic>
      <OptionBasic value="ENFJ">ENFJ</OptionBasic>
      <OptionBasic value="ENFP">ENFP</OptionBasic>
      <OptionBasic value="ENTJ">ENTJ</OptionBasic>
      <OptionBasic value="ENTP">ENTP</OptionBasic>
      <OptionBasic value="ESFJ">ESFJ</OptionBasic>
      <OptionBasic value="ESFP">ESFP</OptionBasic>
      <OptionBasic value="ESTJ">ESTJ</OptionBasic>
      <OptionBasic value="ESTP">ESTP</OptionBasic>
      <OptionBasic value="INFJ">INFJ</OptionBasic>
      <OptionBasic value="INFP">INFP</OptionBasic>
      <OptionBasic value="INTJ">INTJ</OptionBasic>
      <OptionBasic value="INTP">INTP</OptionBasic>
      <OptionBasic value="ISFJ">ISFJ</OptionBasic>
      <OptionBasic value="ISFP">ISFP</OptionBasic>
      <OptionBasic value="ISTJ">ISTJ</OptionBasic>
      <OptionBasic value="ISTP">ISTP</OptionBasic>
    </SelectBasic>
  );
};

TbSelect.defaultProps = {
  padding: "6px 12px",
  margin: "0px",
  value: "",
  bg: false,
  _onChange: () => {},
};

const SelectBasic = styled.select`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: 17px;
  font-family: "KOTRAHOPE";
  background: ${(props) => props.bg};
  color: #ff5454;
  border: none;
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")};
  :focus {
    border: none;
    outline: none;
  }
`;

const OptionBasic = styled.option`
  color: #ff5454;
  border: none;
  font-size: 17px;
  background: #ffffff;
  /* text-align: center; */
`;

export default TbSelect;
