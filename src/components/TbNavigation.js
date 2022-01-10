import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Main } from "../static/icons/nav_main.svg";
import { ReactComponent as TbChatList } from "../static/icons/nav_chat.svg";
import { ReactComponent as TbNotice } from "../static/icons/nav_notice.svg";
import { ReactComponent as MyPage } from "../static/icons/nav_mypage.svg";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "../elements/TbIndex";
import { actionCreators as chatActions } from "../redux/modules/chat";
import "../shared/style.css";

const TbNavgation = (props) => {
  const dispatch = useDispatch();
  const alarm = useSelector((state) => state.chat.alarm);
  const [newRing, setNewRings] = React.useState(false);

  React.useEffect(() => {
    if (alarm.length !== 0) {
      setNewRings(true);
    }
  }, [alarm]);

  const [color, setColor] = useState("red");

  function toggleColor() {
    setColor(color === "red" ? "black" : "red");
  }

  return (
    <React.Fragment>
      <NavBox>
        <Nav1
          onClick={() => {
            toggleColor();
            history.push("/main");
          }}
        >
          <Main className={`icon ${color}`} />
        </Nav1>
        <Nav1>
          <TbChatList
            fill="#333"
            onClick={() => {
              history.push("/TbChatList");
            }}
          />
        </Nav1>
        <Nav1>
          {newRing === true && (
            <Image position="absolute" right="137px" shape="alarm" Isize="10" />
          )}
          <TbNotice
            fill="#333"
            onClick={() => {
              history.push("/TbNotice");
              dispatch(chatActions.deleteAlarm());
              setNewRings(false);
            }}
          />
        </Nav1>
        <Nav1>
          <MyPage
            fill="#333"
            onClick={() => {
              history.push("/MyPage");
            }}
          />
        </Nav1>
      </NavBox>
    </React.Fragment>
  );
};

const NavBox = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  height: 70px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 9;
  border-top: 1px solid #efefef;
`;

const Nav1 = styled.div`
  width: 25%;
  height: 100%;
  padding-top: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export default TbNavgation;
