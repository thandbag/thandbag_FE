import React from "react";
import styled from "styled-components";

const TbText = (props) => {
  const { bold, width, color, size, align, margin, children, LHeight, family, padding } = props;

  const styles = {
    width: width,
    margin: margin,
    bold: bold,
    color: color,
    size: size,
    align: align,
    LHeight: LHeight,
    family: family,
    padding: padding,
  };

  return (
    <>
      <P {...styles}>{children}</P>
    </>
  );
};

TbText.defaultProps = {
  cihldren: null,
  bold: false,
  color: "",
  size: "18px",
  align: false,
  margin: false,
  padding: false,
  family: "",
};

const P = styled.p`
    width: ${(props) => (props.width ? `${props.width}` : "")};
    color: ${(props) => props.color};
    font-family: ${(props) => (props.family ? `${props.family}` : "KOTRAHOPE")};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold ? `${props.bold}` : "")};
    text-align:${(props) => (props.align ? `${props.align}` : "")};
    line-height: ${(props) => (props.LHeight ? `${props.LHeight}` : "")};
    margin: ${(props) => (props.margin ? `${props.margin}` : "")};
    padding: ${(props) => (props.padding ? `${props.padding}` : "")};
    word-break:break-all;
    letter-spacing:-0.5px;

`;

export default TbText;
