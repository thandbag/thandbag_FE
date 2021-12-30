import React from "react";
import UserProfile from "../components/UserProfile";
import { Button } from "../elements/TbIndex";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const TbFinish = (props) => {
  return (
    <React.Fragment>
      <FinishBox>
        <ChatBox>
          {/* 맵돌리자 */}
          <UserProfile chat_user />
        </ChatBox>
        <ButtonBox>
          <Button
            width="100%"
            height="93px"
            bg="#333"
            color="#fff"
            size="1.5rem"
            text="홈으로 가기"
            _onClick={() => {
              history.push("/main");
            }}
          />
        </ButtonBox>
      </FinishBox>
    </React.Fragment>
  );
};

const FinishBox = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 auto;
  box-sizing: border-box;
  background-color: #fbf7f7;
  position: relative;
  z-index: 0;

  @media screen and (min-width: 1024px) {
    position: relative;
    left: 0%;
    top: 0%;
    overflow: auto;
  }
`;

const ChatBox = styled.div`
  width: 100%;
  max-width: 375px;
  height: auto;
  max-height: 266.43px;
  margin: 0 auto;
  position: fixed;
  bottom: 93px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  z-index: 9;

  @media screen and (min-width: 1024px) {
    margin-left: 11%;
  }
`;

const ButtonBox = styled(ChatBox)`
  height: auto;
  bottom: 0;
`;

export default TbFinish;
