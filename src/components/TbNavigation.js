import React from "react";
import styled from "styled-components";
import icon1 from "../static/icons/icon1.svg";
import icon2 from "../static/icons/icon2.svg";
import icon3 from "../static/icons/icon3.svg";
import icon4 from "../static/icons/icon4.svg";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Image } from "../elements/TbIndex";
import { actionCreators as chatActions } from "../redux/modules/chat";

const TbNavgation = (props) => {
  const dispatch = useDispatch();
  const alarm = useSelector((state) => (state.chat.alarm));
  const [newRing, setNewRings] = React.useState(false);
  console.log(alarm)

  React.useEffect(() => {
    if(alarm.length !== 0){
      setNewRings(true)
    }
  },[alarm])
  return (
    <React.Fragment>
      <NavBox>
        <Nav1>
          <Icon1
            onClick={() => {
              history.push("/main");
            }}
          />
        </Nav1>
        <Nav1>
          <Icon2
            onClick={() => {
              history.push("/TbChatList");
            }}
          />
        </Nav1>
        <Nav1>
          {newRing === true && <Image position="absolute" right="137px" shape="alarm" Isize="10"/>}
          <Icon3
            onClick={() => {
              history.push("/TbNotice");
              dispatch(chatActions.deleteAlarm())
              setNewRings(false)
            }}
          />
        </Nav1>
        <Nav1>
          <Icon4
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
`;

const Icon1 = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${icon1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const Icon2 = styled(Icon1)`
  background-image: url(${icon2});
`;

const Icon3 = styled(Icon1)`
  background-image: url(${icon3});
`;

const Icon4 = styled(Icon1)`
  background-image: url(${icon4});
`;

export default TbNavgation;
