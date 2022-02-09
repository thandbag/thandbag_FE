import React from "react";
import styled from "styled-components";

const TbImage = (props) => {
  const {
    shape,
    height,
    position,
    right,
    src,
    Isize,
    thandbag_state,
    punch_thand,
  } = props;

  const styles = {
    src: src,
    position: position,
    right: right,
    Isize: Isize,
    thandbag_state: thandbag_state,
    punch_thand: punch_thand,
    height: height,
  };


  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "alarm") {
    return <BgCircle {...styles}></BgCircle>;
  }

  if (shape === "logo") {
    return <LogoImage {...styles}></LogoImage>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return <>이미지</>;
};

TbImage.defaultProps = {
  shape: "circle",
  src: "https://kpopsource.com/data/avatars/h/2/2834.jpg?1612192799",
  size: 36,
  position: false,
  right: false,
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  --size: ${(props) => props.Isize}px;
  width: var(--size);
  height: var(--size);
  background-position: center;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const LogoImage = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.Isize}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-position: center;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border: 0.1px solid #efefef;
`;

const BgCircle = styled.div`
  --size: ${(props) => props.Isize}px;
  position: ${(props) => (props.position ? `${props.position}` : "")};
  right: ${(props) => (props.right ? `${props.right}` : "")};
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-position: center;
  background-color: #FF5454;
  background-size: cover;
  border: 0.1px solid #efefef;
`;



export default TbImage;
