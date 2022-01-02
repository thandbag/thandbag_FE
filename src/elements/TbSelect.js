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
  } = props;

  const styles = {
    margin: margin,
    padding: padding,
    boxSizing: boxSizing,
    height: height,
    width: width,
    border: border,
    radius: radius,
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
    <SelectBasic {...styles} onChange={_onChange}>
      <OptionBasic className="red" value="0">
        MBTI 선택
      </OptionBasic>
      <OptionBasic value="1">ENFJ</OptionBasic>
      <OptionBasic value="2">ENFP</OptionBasic>
      <OptionBasic value="3">ENTJ</OptionBasic>
      <OptionBasic value="4">ENTP</OptionBasic>
      <OptionBasic value="5">ESFJ</OptionBasic>
      <OptionBasic value="6">ESFP</OptionBasic>
      <OptionBasic value="7">ESTJ</OptionBasic>
      <OptionBasic value="8">ESTP</OptionBasic>
      <OptionBasic value="9">INFJ</OptionBasic>
      <OptionBasic value="10">INFP</OptionBasic>
      <OptionBasic value="11">INTJ</OptionBasic>
      <OptionBasic value="12">INTP</OptionBasic>
      <OptionBasic value="13">ISFJ</OptionBasic>
      <OptionBasic value="14">ISFP</OptionBasic>
      <OptionBasic value="15">ISTJ</OptionBasic>
      <OptionBasic value="16">ISTP</OptionBasic>
    </SelectBasic>
  );
};

TbSelect.defaultProps = {
  padding: "6px 12px",
  margin: "0px",
  value: "",
  _onChange: () => {},
};

const SelectBasic = styled.select`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: 17px;
  font-family: "KOTRAHOPE";
  background: #fbf7f7;
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
  text-align: center;
`;

export default TbSelect;
