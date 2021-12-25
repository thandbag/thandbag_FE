import React from "react";
import styled from "styled-components";
import state_img from "../static/images/state_img.png";

const TbImage = (props) => {
  const { shape, src, size, thandbag_state } = props;

  const styles = {
    src: src,
    size: size,
    thandbag_state: thandbag_state,
  };

  if (thandbag_state) {
    return (
      <StateImage {...styles}></StateImage>
    )
  }

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  return <>이미지</>;
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

const StateImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${state_img});
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: center;
`;

export default TbImage;
