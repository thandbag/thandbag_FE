import React, { useState } from 'react';
import styled from 'styled-components';
import { TbModalTwo } from '../components/TbModalTwo';
import { Button } from "../elements/TbIndex";
import {useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { history } from '../redux/configureStore';
import { ReactComponent as ThanksChat } from "../static/icons/thanks_chat.svg";

const TbModalTwoButton = (props) => {
  const {you_id} = props;
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false)
  }, 1500)
  };

  return (
    <>
      <Container>
 
        <ThanksChat width="32px" height="32px"
          onClick={() => {openModal()
          dispatch(chatActions.createChatRoomDB(userId, you_id));
          }}/>
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
  cursor: pointer;
`;

export default TbModalTwoButton;
