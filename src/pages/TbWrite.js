import React, { useState } from "react";
import Heads from "../components/Heads";
import TbWriteSelect from "../components/TbModals/TbWriteSelect";
import TbTextEditor from "../components/TbTextEditor";
import { Grid, Button, Input } from "../elements/TbIndex";
import styled from "styled-components";
import { TbModalThree } from "../components/TbModals/TbModalThree";
import { useDispatch } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card";
import { history } from "../redux/configureStore";
import Swal from "sweetalert2";
import { useSpring, animated } from "react-spring";


const TbWrite = (props) => {
  const dispatch = useDispatch();

  //제목, 내용, 카테고리 상태관리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("카테고리를 선택하세요");
  const [checkState, setCheckState] = useState(true);


  //제목 내용 가져오기
  const getTitle = (e) => {
    const currentTitle = e.target.value;
    setTitle(currentTitle);
  };

  //모달
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      history.push("/TbList");
    }, 1500);
  };

  const clickTB = () => {
    if (
      title === "" ||
      content === "<p><br></p>" ||
      category === "카테고리를 선택하세요"
    ) {
      Swal.fire({
        icon: 'warning',
        title: '앗!',
        text: '빈값을 다 채워주세요'
      })
      return;
    } else {
      dispatch(
        cardActions.sendCardDB(category, title, content, null, checkState)
      );
      openModal();
    }
  };

  const fadeIn = useSpring({
    config: {
      duration: 300,
    },
    width: "100%",
    opacity: 1,
    from: { opacity: 0 },
  });


  return (
    <>
      <TbModalThree showModal={showModal} setShowModal={setShowModal} />
      <Container>
        <Heads
          is_anoter
          bg="#fff"
          stroke="#333"
          color="#333"
          text="생드백 만들기"
        />
        <animated.div style={fadeIn}>
          <Grid width="100%" height="auto" margin="70px 0 0 0">
            <TbWriteSelect category={category} setCategory={setCategory} />
          </Grid>
          <Grid width="100%" height="59px">
            <Input
              _onChange={getTitle}
              value={title}
              width="100%"
              height="100%"
              placeholder="제목"
              size="24px"
              padding=" 0 20px"
            />
          </Grid>
          <Grid width="100%" height="auto">
            <TbTextEditor
              checkState={checkState}
              setCheckState={setCheckState}
              content={content}
              setContent={setContent}
            />
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
            _onClick={() => {
              history.goBack();
            }}
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
            _onClick={() => {
              clickTB()
            }}
          />
        </Grid>
        </animated.div>
      </Container>
    </>
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
