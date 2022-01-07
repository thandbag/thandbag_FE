import React from "react";
import styled from "styled-components";
import NotFoundImg from "../static/images/not_found.png";
import { Button } from "../elements/TbIndex";
import { history } from "../redux/configureStore";

const NotFound = (props) => {
  return (
    <>
      <NotFoundBox>
        <NotBox />
        <ButtonBox>
          <Button
            width="145px"
            height="43px"
            bg="#333"
            radius="12px"
            color="#fff"
            text="돌아가기"
            _onClick={() => {
              history.push("/login");
            }}
          />
        </ButtonBox>
      </NotFoundBox>
    </>
  );
};

const NotFoundBox = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${NotFoundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const NotBox = styled.div`
  width: 100%;
  height: 47vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 53vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotFound;
