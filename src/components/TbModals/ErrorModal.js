import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import BasicModal from "../../static/images/modals/basic_modal.png";
import { Text } from "../../elements/TbIndex";
import { history } from "../../redux/configureStore";
import { useSpring, animated } from "react-spring";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
`;

const ModalWrapper = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  z-index: 9;
`;

const ModalboxT = styled.div`
  width: 219px;
  height: 172px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${BasicModal});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 10px;
  padding-bottom: 20px;
`;

export const ErrorModal = ({ errorModal, setErrorModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: errorModal ? 1 : 0,
    transform: errorModal ? `translateY(0%)` : `translateY(-30%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      errorModal(false);
      history.push("/TbWrite");
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && errorModal) {
        setErrorModal(false);
        history.push("/TbWrite");
      }
    },
    [setErrorModal, errorModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {errorModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper errorModal={errorModal}>
              <ModalboxT>
                <Text size="18px" color="#FF5454">
                  생드백 작성에 문제가 생겼습니다🤭
                </Text>
              </ModalboxT>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
