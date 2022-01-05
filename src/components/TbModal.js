import React from "react";
import styled from "styled-components";
import "../shared/style.css";

const TbModal = (props) => {
  const { open, close } = props;

  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <main>
              <ModalboxT>정말 댓글을 삭제하시겠어요??</ModalboxT>
              <ModalboxR>댓글 삭제</ModalboxR>
              <Modalbox onClick={close}>취소 </Modalbox>
            </main>
          </section>
        ) : null}
      </div>
    </>
  );
};

const ModalboxR = styled.button`
  line-height: 1.5;
  margin: 0;
  cursor: pointer;
  min-height: 48px;
  padding: 4px 8px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  border: 1px solid #eee;
  width: 100%;
  color: rgba(var(--i30, 237, 73, 86), 1);
  font-weight: 700;
  background-color: white;
`;

const ModalboxT = styled(ModalboxR)`
  border: none;
  color: #333;
  cursor: default;
`;

const Modalbox = styled.button`
  line-height: 1.5;
  margin: 0;
  cursor: pointer;
  min-height: 48px;
  padding: 4px 8px;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  border: none;
  width: 100%;
  background-color: white;
`;

export default TbModal;
