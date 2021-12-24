import React from "react";
import styled from "styled-components";

const TbImage = (props) => {

    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,

    };

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        );
    };

    return (
        <>
        이미지
        </>
    )
};

TbImage.defaultProps = {
    shape: "circle",
    src: "https://i.ytimg.com/vi/9J67amvesFg/maxresdefault.jpg",
    size: 36,

};

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default TbImage;
