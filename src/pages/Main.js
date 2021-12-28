import React from "react";

import TbText from "../elements/TbText";

import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <Header>
        <Logo>로고가 들어갈 거에용</Logo>
      </Header>
      <MainBodyTop>
        <MainImage>메인 이미지가 들어갈 거에용</MainImage>
      </MainBodyTop>
      <MainBodyBottom>
        <Button>
          <TbText bold>버튼을 눌러보아용</TbText>
        </Button>
        <Button>
          <TbText bold>어서 눌러보아욘</TbText>
        </Button>
      </MainBodyBottom>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: skyblue;
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

const Logo = styled.div`
  width: 50%;
  height: 100%;
  background-color: midnightblue;
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
  width: 70%;
  height: 100%;
  background-color: green;
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

const Button = styled.button`
  width: 70%;
  height: 20%;
  background-color: dargreen;
  border-radius: 15px;
  margin: 10px 0px;
  background-color: orange;
`;

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fff;
`;

export default Main;
