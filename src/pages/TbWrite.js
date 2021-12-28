import React from "react";

import TbText from "../elements/TbText";

import styled from "styled-components";

const TbWrite = (props) => {
  return (
    <Container>
      <Header>
        <TbText color="white" bold>
          생드백 만들기
        </TbText>
      </Header>
      <Category></Category>
      <NameInputWrap>
        <NameInput placeholder="제목을 입력하세요"></NameInput>
      </NameInputWrap>
      <CheckBoxArea>
        <InputCheckBox type="checkbox" id="check"></InputCheckBox>
        <CheckBoxLabel for="check">나만 볼래요</CheckBoxLabel>
      </CheckBoxArea>
      <ContentsWrap>
        <Contents placeholder="내용을 입력하세요"></Contents>
      </ContentsWrap>
      <ContentsBottom>
        <Button>
          <TbText bold>취소</TbText>
        </Button>
        <Button>
          <TbText bold>저장</TbText>
        </Button>
      </ContentsBottom>
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
  height: 5vh;
  background-color: darkred;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Category = styled.div`
  width: 100%;
  height: 5vh;
  background-color: blue;
`;

const NameInputWrap = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

const NameInput = styled.input`
  width: 95%;
  height: 80%;
`;

const CheckBoxArea = styled.div`
  width: 100%;
  height: 5vh;
  background-color: darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputCheckBox = styled.input`
  width: 30px;
  height: 30px;
`;

const CheckBoxLabel = styled.label`
  color: white;
`;

const ContentsWrap = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: purple;
`;

const Contents = styled.input`
  width: 95%;
  height: 95%;
`;

const ContentsBottom = styled.div`
  width: 100%;
  height: 20vh;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  height: 25%;
  background-color: dargreen;
  border-radius: 10px;
  margin: 0px 10px;
  background-color: orange;
`;

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fff;
`;
export default TbWrite;
