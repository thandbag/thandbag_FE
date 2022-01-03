import React from "react";
import TbText from "../elements/TbText";
import styled from "styled-components";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import TbNavgation from "../components/TbNavigation";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { Navigation } from "swiper";

const Main = (props) => {
  const dispatch = useDispatch();
  const alarm = useSelector((state) => (state.chat.alarm));
  const sock = new SockJs("http://52.78.54.60/ws-stompAlarm");
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
        <Logo>로고가 들어갈 거에용</Logo>
      </Header>
      <MainBodyTop>
        <MainImage>메인 이미지가 들어갈 거에용</MainImage>
      </MainBodyTop>
      <MainBodyBottom>
        <Button>
          <TbText bold>버튼을 눌러보아용</TbText>
        </Button>
        <Button>
          <TbText bold>어서 눌러보아욘</TbText>
        </Button>
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
  width: 100%;
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
  height: 40vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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

const Button = styled.button`
  width: 70%;
  height: 20%;
  background-color: dargreen;
  border-radius: 15px;
  margin: 10px 0px;
  background-color: orange;
`;

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #fff;
`;

export default Main;
