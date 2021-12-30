import React from "react";

import TbText from "../elements/TbText";
import TbSelect from "../elements/TbSelect";
import TbInput from "../elements/TbInput";
import TbButton from "../elements/TbButton";

import Heads from "../components/Heads";

import styled from "styled-components";

const TbWrite = (props) => {
  return (
    <Container>
      <Header>
        <Heads is_anoter text="생드백 만들기" stroke="#333"></Heads>
      </Header>
      <Category>
        <TbSelect tbwrite height="100%" width="100%"></TbSelect>
      </Category>
      <NameInputWrap>
        <TbInput
          height="100%"
          width="100%"
          radius="0px"
          placeholder="제목"
        ></TbInput>
      </NameInputWrap>
      <CheckBoxArea>
        <InputCheckBox type="checkbox" id="check"></InputCheckBox>
        <CheckBoxLabel for="check">나만 볼래요</CheckBoxLabel>
      </CheckBoxArea>
      <ContentsWrap>
        <TbInput
          width="100%"
          height="95%"
          placeholder="내용을 입력하세요"
        ></TbInput>
      </ContentsWrap>
      <Space />
      <ContentsBottom>
        <TbButton
          login
          width="190px"
          height="60px"
          text="취소"
          margin="0px 10px 0px 0px"
        ></TbButton>
        <TbButton login width="190px" height="60px" text="저장"></TbButton>
      </ContentsBottom>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Category = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #fff;
  margin: 26px 0px 0px 0px;
`;

const NameInputWrap = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

const CheckBoxArea = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`;

const InputCheckBox = styled.input`
  width: 30px;
  height: 30px;
`;

const CheckBoxLabel = styled.label`
  color: black;
`;

const ContentsWrap = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Space = styled.div`
  width: 100%;
  height: 3vh;
  background-color: #fbf7f7;
`;

const ContentsBottom = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 0px 0px;
`;

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fff;
`;
export default TbWrite;
