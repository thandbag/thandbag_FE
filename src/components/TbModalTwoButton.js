import React, { useState } from 'react';
import styled from 'styled-components';
import { TbModalTwo } from '../components/TbModalTwo';
import { Button } from "../elements/TbIndex";
import {useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { history } from '../redux/configureStore';

const TbModalTwoButton = (props) => {
  const {you_id} = props;
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Button
          width="100%"
          height="100%"
          bg="#eee"
          color="#555"
          radius="100%"
          text="채팅"
          _onClick={() => {openModal()
            dispatch(chatActions.createChatRoomDB(userId, you_id));
            }}
        />
        <TbModalTwo showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TbModalTwoButton;
