import React from "react";
import styled from "styled-components";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import TbNavgation from "../components/TbNavigation";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { Button } from "../elements/TbIndex";
import { history } from "../redux/configureStore";
import Heads from "../components/Heads";
import thandbag_main from "../static/images/thandbag_main.png";
import { useSpring, animated } from "@react-spring/web";

const Main = (props) => {
  const dispatch = useDispatch();
  const alarm = useSelector((state) => state.chat.alarm);
  const sock = new SockJs("https://todays-table.shop/ws-stompAlarm");
  const stomp = StompJs.over(sock);
  const userId = sessionStorage.getItem("userId");
  const token = {
    Authorization: sessionStorage.getItem("token"),
  };

  React.useEffect(() => {
    try {
      stomp.debug = null;
      stomp.connect(token, () => {
        stomp.subscribe(
          `/sub/alarm/${userId}`,
          (data) => {
            const newData = JSON.parse(data.body);
            dispatch(chatActions.getAlarm(newData));
          },
          token
        );
      });
    } catch (e) {}
  }, [dispatch, alarm]);

  const fadeIn = useSpring({
    config: {
      duration: 300,
    },
    width: "100%",
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <>
      <Heads />
      <Container>
        <animated.div style={fadeIn}>
          <MainBodyTop />
          <MainBodyBottom>
            <Button
              login
              _onClick={() => {
                history.push("/TbWrite");
              }}
              height="7vh"
              width="220px"
              text="생드백 만들기"
            ></Button>
            <Button
              margin="4vh 0 0 0"
              login
              _onClick={() => {
                history.push("/TbList");
              }}
              height="7vh"
              width="220px"
              text="다른 사람의 생드백 보기"
            />
          </MainBodyBottom>
        </animated.div>
        <TbNavgation main={"main"} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 70px 0;
`;

const MainBodyTop = styled.div`
  width: 100%;
  min-height: 44vh;
  margin-top: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${thandbag_main});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


  @media all and (min-height: 944px) {
    margin-top: 3.4vh;
  }

  @media all and (min-width: 1920px) {
    margin-top: 3.4vh;
  }
`;

const MainBodyBottom = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3vh;
  padding: 3vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Main;
