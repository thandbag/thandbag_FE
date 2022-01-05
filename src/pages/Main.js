import React from "react";
import styled from "styled-components";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import TbNavgation from "../components/TbNavigation";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import {Grid, Button, Image} from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import thandbag_main from "../static/images/thandbag_main.png";
import thandbag_logo from "../static/icons/thandbag_logo.svg";

const Main = (props) => {
  const dispatch = useDispatch();
  const alarm = useSelector((state) => (state.chat.alarm));
  const sock = new SockJs("http://3.38.7.220/ws-stompAlarm");
  const stomp = StompJs.over(sock);
  const userId = sessionStorage.getItem("userId");
  const token = {
    Authorization: sessionStorage.getItem("token"),
  };

  React.useEffect(() => {
    try {
      stomp.connect(token, () => {
        stomp.subscribe(
          `/sub/alarm/${userId}`,
          (data) => {
            const newData = JSON.parse(data.body);
            console.log(newData);
            dispatch(chatActions.getAlarm(newData));
          },
          token
        );
      });
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, alarm]);

  return (
    <Container>
      <Header>
        <Image shape='logo' src={thandbag_logo}/>
      </Header>
      <MainBodyTop>
        <Image shape="rectangle" Isize="420" src={thandbag_main}/>
      </MainBodyTop>
      <MainBodyBottom>
        <Button login _onClick={() => {
          history.push('/TbWrite')
        }} height="60px" width="220px" text="생드백 만들기"></Button>
        <Button margin="45px 0 0 0" login _onClick={() => {
          history.push('/TbList')
        }} height="60px" width="220px" text="다른 사람의 생드백 보기"></Button>
      </MainBodyBottom>
      <Footer />
      <TbNavgation/>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 50%;
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 50%;
  height: 100%;
  background-color: midnightblue;
`;

const MainBodyTop = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const MainBodyBottom = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fff;
`;

export default Main;
