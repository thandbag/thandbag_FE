import React, { useRef, useState } from "react";
import Heads from "../components/Heads";
import TbWriteSelect from "../components/TbWriteSelect";
import TbTextEditor from "../components/TbTextEditor";
import { Grid, Button, Input } from "../elements/TbIndex";
import styled from "styled-components";

import { useDispatch } from "react-redux";

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
    
  };

  const getContent = (e) => {
    const currentContent = e.target.value;
    setContent(currentContent);
    console.log(content);
  };

  return (
    <Container>
      <Heads
        is_anoter
        bg="#fff"
        stroke="#333"
        color="#333"
        text="생드백 만들기"
      />
      <Grid width="100%" height="auto" margin="70px 0 0 0">
        <TbWriteSelect />
      </Grid>
      <Grid width="100%" height="59px">
        <Input
          title
          width="100%"
          height="100%"
          placeholder="제목"
          size="24px"
          padding=" 0 20px"
          value={title}
          _onChange={getTitle}
        />
      </Grid>
      <Grid width="100%" height="auto">
        <TbTextEditor />
      </Grid>
      <Grid
        width="100%"
        height="15%"
        flex="flex"
        bg="#fff"
        position="absolute"
        bottom="0"
      >
        <Button
          login
          width="158px"
          height="50px"
          bg="#333"
          text="취소"
          radius="12px"
          size="24px"
          color="#fff"
          margin="0 20px 0 0"
        />
        <Button
          login
          width="158px"
          height="50px"
          bg="#333"
          text="저장"
          radius="12px"
          size="24px"
          color="#fff"
        />
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export default TbWrite;
