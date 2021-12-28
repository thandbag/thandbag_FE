import React from "react";
import styled from "styled-components";

const TbGrid = (props) => {
  const {
    position,
    children,
    flex,
    align,
    width,
    padding,
    margin,
    height,
    left,
    right,
    top,
    bottom,
    justify,
    direction,
    is_align,
    wrap,
    bg,
    border,
    radius,
    borderT,
    borderB,
  } = props;

  const styles = {
    flex: flex,
    position: position,
    width: width,
    height: height,
    padding: padding,
    margin: margin,
    align: align,
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    justify: justify,
    direction: direction,
    is_align: is_align,
    wrap: wrap,
    bg: bg,
    border: border,
    radius: radius,
    borderT: borderT,
    borderB: borderB,
  };

  return <GridBox {...styles}>{children}</GridBox>;
};

TbGrid.defaultProps = {
  position: false,
  children: null,
  flex: false,
  width: "100%",
  height: "",
  padding: false,
  margin: false,
  align: false,
  left: false,
  right: false,
  top: false,
  bottom: false,
  justify: "center",
  direction: "",
  is_align: "center",
  wrap: "",
  bg: false,
  border: false,
  radius: "",
  borderT: false,
  borderB: false,
};

const GridBox = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: ${(props) => props.align};
  padding: ${(props) => (props.padding ? `${props.padding}` : "")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
  position: ${(props) => (props.position ? `${props.position}` : "")};
  left: ${(props) => (props.left ? `${props.left}` : "")};
  right: ${(props) => (props.right ? `${props.right}` : "")};
  top: ${(props) => (props.top ? `${props.top}` : "")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}` : "")};
  display: ${(props) => (props.flex ? `${props.flex}` : "")};
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")};
  ${(props) => (props.is_align ? `align-items: ${props.is_align};` : "")};
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : "")};
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.border ? `border: ${props.border};` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")};
  ${(props) => (props.borderT ? "border-top: 1px solid #efefef;" : "")};
  ${(props) => (props.borderB ? "border-bottom: 1px solid #efefef;" : "")};
`;

export default TbGrid;
