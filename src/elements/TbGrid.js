import React from "react";
import styled from "styled-components";

const TbGrid = (props) => {
    const { position, children, flex, align, width, padding,
         margin, height } =
    props
  const styles = {
    flex: flex,
    position: position,
    width: width,
    height: height,
    padding: padding,
    margin: margin,
    align: align,
}

    return (
        <GridBox {...styles}>
        {children}
        </GridBox>
    );
};

TbGrid.defaultProps = {
    position: false,
    children: null,
    flex: false,
    width: '100%',
    height: 'false',
    padding: false,
    margin: false,
    align: false,
}

const GridBox = styled.div`
    position: ${(props) => (props.position ? `${props.position}` : '')};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => (props.padding ? `${props.padding}` : '')};
    margin: ${(props) => (props.margin ? `${props.margin}` : '')};
    display: ${(props) => (props.flex ? `${props.flex}` : '')};
    text-align: ${(props) => props.align};
`;

export default TbGrid;
