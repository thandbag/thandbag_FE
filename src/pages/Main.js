import React from "react";

import TbText from "../elements/TbText";
import Heads from "../components/Heads";
import TbButton from "../elements/TbButton";

import thandbag from "../static/images/thandbag.png";

import styled from "styled-components";
import { history } from "../redux/configureStore";

const Main = (props) => {
  return (
    <Container>
      <Header>
        <Heads></Heads>
      </Header>
      <MainBodyTop>
        <MainImage></MainImage>
      </MainBodyTop>
      <MainBodyBottom>
        <TbButton
          login
          width="220px"
          height="60px"
          text="생드백만들기"
          margin="0px 0px 40px 0px"
          _onClick={() => {
            history.push("/tbWrite");
          }}
        ></TbButton>
        <TbButton
          login
          width="220px"
          height="60px"
          text="다른 사람의 생드백 보기"
        ></TbButton>
      </MainBodyBottom>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainBodyTop = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${thandbag});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const MainBodyBottom = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fff;
`;

export default Main;
