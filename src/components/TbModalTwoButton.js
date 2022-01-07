import React, { useState } from 'react';
import styled from 'styled-components';
import { TbModalTwo } from '../components/TbModalTwo';
import { Button } from "../elements/TbIndex";
import { ReactComponent as ThanksChat } from "../static/icons/thanks_chat.svg";


const TbModalTwoButton = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <ThanksChat width="32px" height="32px" onClick={openModal}/>
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
