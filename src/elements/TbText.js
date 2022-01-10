import React from "react";
import styled from "styled-components";

const TbText = (props) => {
  const {
    bold,
    color,
    size,
    align,
    margin,
    children,
    LHeight,
    family,
    padding,
    _onClick,
    deco,
    decoP,
    cursor,
    max_width,
    bg,
    elli,
    spacing,
    Wbreack,
    Wspace,
  } = props;

  const styles = {
    margin: margin,
    bold: bold,
    color: color,
    size: size,
    align: align,
    LHeight: LHeight,
    family: family,
    padding: padding,
    deco: deco,
    decoP: decoP,
    cursor: cursor,
    max_width: max_width,
    bg: bg,
    elli: elli,
    spacing: spacing,
    Wbreack: Wbreack,
    Wspace: Wspace,
  };

  if (elli) {
    return (
      <>
        <Ellipsis {...styles} onClick={_onClick}>
          {children}
        </Ellipsis>
      </>
    );
  }

  return (
    <>
      <P {...styles} onClick={_onClick}>
        {children}
      </P>
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
  max_width: false,
  bg: false,
  family: "KOTRAHOPE",
  _onClick: () => {},
};

const P = styled.p`
  color: ${(props) => props.color};
  max-width: ${(props) => (props.max_width ? `${props.max_width}` : "")};
  font-family: ${(props) => (props.family ? `${props.family}` : "")};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? `${props.bold}` : "")};
  text-align: ${(props) => (props.align ? `${props.align}` : "")};
  line-height: ${(props) => (props.LHeight ? `${props.LHeight}` : "")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
  padding: ${(props) => (props.padding ? `${props.padding}` : "")};
  word-break: ${(props) => (props.Wbreack ? `${props.Wbreack}` : "")};
  white-space: ${(props) => (props.Wspace ? `${props.Wspace}` : "")};
  letter-spacing: ${(props) => (props.spacing ? `${props.spacing}` : "")};
  background-color: ${(props) => (props.bg ? ` ${props.bg};` : "")};
  text-decoration: ${(props) => (props.deco ? `${props.deco}` : "")};
  text-underline-position: ${(props) => (props.decoP ? `${props.decoP}` : "")};
  cursor: ${(props) => (props.cursor ? `${props.cursor}` : "")};
`;

const Ellipsis = styled.div`
  width: 100%;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? `${props.bold}` : "")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
  font-family: ${(props) => (props.family ? `${props.family}` : "")};
`;

export default TbText;
