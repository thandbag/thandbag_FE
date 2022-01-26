import React from "react";
import { Button, Grid, Input } from "../elements/TbIndex";
import moment from "moment";
import Heads from "../components/Heads";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import styled from "styled-components";
import Message from "../components/Message";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { useSpring, animated } from "react-spring";

const TbChatDetail = (props) => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.chat.message);
  const sock = new SockJs("https://todays-table.shop/ws-stomp");
  const stomp = StompJs.over(sock);
  const token = { Authorization: sessionStorage.getItem("token") };
  const roomId = props.match.params.roomid;
  const sender_nick = sessionStorage.getItem("nickname");
  const now = moment().format("hh:mm A");

  const [message, setMessage] = React.useState("");
  const messageScroll = React.useRef();
  const now_message = React.useRef("");
  const msg = now_message.current;

  React.useEffect(() => {
    if (!token) {
      return window.alert("토큰이 없습니다").then((res) => {
        return history.replace("/TbChatList");
      });
    }
    dispatch(chatActions.getChatMessageDB(roomId));
  }, []);

  React.useEffect(() => {
    if (!roomId) {
      return window.alert("잘못된 접근입니다").then((res) => {
        return history.replace("/TbChatList");
      });
    }
    stompConnect();
    return () => {
      stompDisConnect();
    };
  }, []);

  const stompConnect = () => {
    try {
      stomp.debug = null;
      stomp.connect(token, () => {
        stomp.subscribe(
          `/sub/chat/room/${roomId}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            dispatch(chatActions.addMessage(newMessage));
          },
          token
        );
      });
    } catch (err) {}
  };

  const stompDisConnect = () => {
    try {
      stomp.debug = null;
      stomp.disconnect(() => {
        stomp.unsubscribe("sub-0");
        clearTimeout(waitForConnect);
      }, token);
    } catch (err) {}
  };

  const waitForConnect = (ws, callback) => {
    setTimeout(() => {
      if (stomp.ws.readyState === 1) {
        callback();
      } else {
        waitForConnect(ws, callback);
      }
    }, 0.1);
  };

  const addMessage = (e) => {
    setMessage(e.target.value);
  };

  const SendMessage = () => {
    stomp.debug = null;
    if (message === "") {
      return;
    }
    const data = {
      type: "TALK",
      roomId: roomId,
      sender: sender_nick,
      message: msg.defaultValue,
      createdAt: now,
    };
    waitForConnect(stomp, () => {
      stomp.debug = null;
      stomp.send("/pub/chat/message", token, JSON.stringify(data));
    });
    setMessage("");
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      SendMessage();
    }
  };

  const scrollToBottom = () => {
    if (messageScroll.current) {
      messageScroll.current.scrollTop = messageScroll.current.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [contents.length]);

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
      <Grid>
        <Heads
          stompDisConnect={stompDisConnect}
          chat
          bg="#fff"
          stroke="#333"
          color="#333"
          text={history.location.state}
        />
        <animated.div style={fadeIn}>
          <Container ref={messageScroll}>
            <Grid>
              {contents?.map((m, idx) => {
                return <Message messageInfo={m} />;
              })}
            </Grid>
          </Container>
          <Grid
            position="fixed"
            bottom="0"
            borderB
            borderT
            padding="26px 20px"
            width="100%"
            maXwidth="420px"
            flex="flex"
            bg="#fff"
            justify="space-between"
          >
            <Input
              ref={now_message}
              _onKeyDown={onEnterPress}
              value={message}
              _onChange={addMessage}
              placeholder="채팅을 남겨주세요"
              boxSizing="border-box"
              size="17px"
              bg="#FBF7F7"
              color="#FF5454"
              radius="10px"
              padding="10px 15px"
              width="75%"
            />
            <Button
              _onClick={SendMessage}
              bg="#333"
              size="20px"
              padding="0 0 3px 0"
              color="#fff"
              radius="10px"
              height="40px"
              width="20%"
              text="전송"
            />
          </Grid>
        </animated.div>
      </Grid>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  padding: 70px 20px 94px 20px;
  background-color: #fff;
`;

export default TbChatDetail;
