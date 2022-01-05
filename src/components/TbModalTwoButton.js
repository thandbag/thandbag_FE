import React, { useState } from 'react';
import styled from 'styled-components';
import { TbModalTwo } from '../components/TbModalTwo';
import { Button } from "../elements/TbIndex";

const TbModalTwoButton = (props) => {
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
          _onClick={openModal}
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
