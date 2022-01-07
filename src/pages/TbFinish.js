import React from "react";
import UserProfile from "../components/UserProfile";
import { Button } from "../elements/TbIndex";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import DieThandLv1 from "../static/images/die_thand_lv1.png";
import DieThandLv2 from "../static/images/die_thand_lv2.png";
import DieThandLv3 from "../static/images/die_thand_lv3.png";

const TbFinish = (props) => {
  return (
    <React.Fragment>
      <FinishBox>
        <DieImgBox />
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
  height: 100vh;
  background-color: #fbf7f7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

const DieImgBox = styled.div`
  width: 100%;
  height:50vh;
  position: absolute;
  top: 2%;
  background: url(${DieThandLv1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ChatBox = styled.div`
  width: 100%;
  height: auto;
  max-height: 266.43px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default TbFinish;
