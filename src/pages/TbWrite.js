import React, { useRef, useState } from "react";

import TbText from "../elements/TbText";
import TbSelect from "../elements/TbSelect";
import TbInput from "../elements/TbInput";
import TbButton from "../elements/TbButton";

import Heads from "../components/Heads";
import TbWriteSelect from "../components/TbWriteSelect";
import Editor from "../components/Editor";

import { actionCreators as cardActions } from "../redux/modules/card";
import { useDispatch } from "react-redux";

import styled from "styled-components";

const TbWrite = (props) => {
  const dispatch = useDispatch();

  //제목, 내용, 카테고리 상태관리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("카테고리를 선택하세요");
  const sharedCheckBoxRef = useRef(null);

  //제목 내용 가져오기
  const getTitle = (e) => {
    const currentTitle = e.target.value;
    setTitle(currentTitle);
    console.log(title);
    console.log(category);
    console.log(sharedCheckBoxRef.current.checked);
  };

  const getContent = (e) => {
    const currentContent = e.target.value;
    setContent(currentContent);
    console.log(content);
  };

  return (
    <Container>
      <Header>
        <Heads is_anoter text="생드백 만들기" stroke="#333"></Heads>
      </Header>

      <TbWriteSelect category={category} setCategory={setCategory} />

      <NameInputWrap>
        <TbInput
          _onChange={getTitle}
          value={title}
          height="100%"
          width="100%"
          radius="0px"
          placeholder="제목"
        ></TbInput>
      </NameInputWrap>
      <CheckBoxArea>
        <InputCheckBox
          type="checkbox"
          id="check"
          ref={sharedCheckBoxRef}
        ></InputCheckBox>
        <CheckBoxLabel htmlfor="check">나만 볼래요</CheckBoxLabel>
        {/* <Editor></Editor> */}
      </CheckBoxArea>
      <ContentsWrap>
        <TbInput
          _onChange={getContent}
          value={content}
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
        <TbButton
          _onClick={() => {
            dispatch(
              cardActions.sendCardDB(
                category,
                title,
                content,
                null,
                sharedCheckBoxRef.current.checked
              )
            );
          }}
          login
          width="190px"
          height="60px"
          text="저장"
        ></TbButton>
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
  background-color: #fbf7f7;
  margin: 26px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
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
