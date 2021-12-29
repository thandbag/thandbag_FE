import React, { useEffect } from "react";
// import * as StompJs from "@stomp/stompjs";
import SockJs from "sockjs-client";
import StompJs from "stompjs";


const TbChatDetail = (props) => {
  const sock = new SockJs("http://52.78.54.60/ws-stomp");
  const stomp = StompJs.over(sock);
  const token = {
    Authorization: sessionStorage.getItem('token')
   }
  const roomId = '11287553-d3f5-45a5-9cba-d35b4d7f2663';
  console.log(token)

  const [content, setContents] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    // try {
      // stomp.debug = null;
      // stomp.connect(
      //   token, ()=>{
        
      //   stomp.subscribe(`/sub/chat/room/${roomId}`, (data)=> {
      //     const newData = JSON.parse(data.body)
      //     console.log(newData)
      //   }, token);
      // });
      stomp.connect(token, 
        () => { stomp.subscribe(`/sub/chat/room/${roomId}`, 
        function (message) { let recv = JSON.parse(message.body); 
          console.log("recv : ", recv);}, token); }, function (error) { // window.location.href="/"; 
          });

    // } catch (e) {
    //   console.log(e)
    // }
    
  },[])

  const addMessage = (e) => {
    setMessage(e.target.value)
  }

  const SendMessage = () => {
    const data = {message: message}
    console.log(data)
    stomp.send("/pub/chat/message",token,JSON.stringify(data));
    setMessage("");
  }


    return (
        <>
          <div>
            <div>
              <p>하하</p>
            </div>
            <div>
              <input value={message} onChange={addMessage}></input>
              <button onClick={SendMessage}>전송</button>
            </div>
            
          </div>
        </>
    )
}

export default TbChatDetail;
