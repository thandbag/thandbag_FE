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

const TbChatDetail = (props) => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => (state.chat.message))
  const sock = new SockJs("http://3.38.7.220/ws-stomp");
  const stomp = StompJs.over(sock);
  const token = {
    Authorization: sessionStorage.getItem('token')
   }
  const roomId = props.match.params.roomid
  const sender_nick = sessionStorage.getItem("nickname");
  const now = moment().format("hh:mm A");

  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if(!token) {
      return (window.alert('토큰이 없습니다')).then((res) => {
        return history.replace('/TbChatList')
      })
      
    }
    dispatch(chatActions.getChatMessageDB(roomId))
    
  },[])

  React.useEffect(() => {
    if(!roomId) {
      return (window.alert('잘못된 접근입니다')).then((res)=>{
        return history.replace('/TbChatList')
      });
    }
      stompConnect();
    return () => {
      stompDisConnect();
    }
  }, []);

  const stompConnect = () => {
    try {
      // stomp.debug = null;
      stomp.connect(
        token, 
        ()=>{
        stomp.subscribe(`/sub/chat/room/${roomId}`, 
          (data)=> {
          const newMessage = JSON.parse(data.body)
          console.log(newMessage);
          dispatch(chatActions.addMessage(newMessage))
        }, token);
      });

    } catch (err) {
      console.log(err.response)
      
    }
  };
 
  const stompDisConnect = () => {
    try {
      // stomp.debug = null;
      stomp.disconnect(
        () => {
          stomp.unsubscribe("sub-0");
          clearTimeout(waitForConnect);
        }, token
      );
    } catch (err) {
      console.log(err.response)
    }
  };

  const waitForConnect = (stomp, callback) => {
    setTimeout(() => {
      if (stomp.stomp.readyState === 1){
        callback();
      } else {
        waitForConnect(stomp, callback);
      }
    },0.1);
  };

  const addMessage = (e) => {
    setMessage(e.target.value)
  }
  
  const SendMessage = () => {
    const data = {
      type: 'TALK',
      roomId: roomId,
      sender: sender_nick,
      message: message,
      createdAt: now,
      };
    waitForConnect(stomp, () => {
      stomp.debug = null;
    })
    stomp.send("/pub/chat/message",token,JSON.stringify(data));
    setMessage("");
    
  }

    return (
        <>
        <Grid>
        <Heads stompDisConnect={stompDisConnect} chat bg="#fff" stroke="#333" color="#333" text="닉네임"/>
          <Container >
            <Grid>
              {contents?.map((m, idx) => {
                return <Message messageInfo={m}/>
              })}

            </Grid>
          </Container>
            <Grid position= 'fixed' bottom="0" borderB borderT padding="26px 20px" width="420px" flex="flex" justify="space-between">
              <Input value={message} _onChange={addMessage} placeholder="채팅을 남겨주세요" boxSizing="border-box" size="17px" bg="#FBF7F7" color="#FF5454" radius="10px" padding="10px" width="290px"></Input>
              <Button _onClick={SendMessage} login height="40px" width="60px" text="전송"></Button>
            </Grid>
        </Grid>
        </>
    )
};

const Container = styled.div`
  padding: 0px 20px;
  margin-top: 90px;
  width: 100%;
  height: auto;
  max-height: 83vh;
  overflow: scroll;
  background-color: #fff;
`;

export default TbChatDetail;