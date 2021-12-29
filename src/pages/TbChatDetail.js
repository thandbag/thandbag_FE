import React, { useEffect } from "react";
import * as StompJs from "@stomp/stompjs";
import SockJs from "sockjs-client";
// import * as Stomp from "stompjs";


const TbChatDetail = (props) => {
  const sock = new SockJs("http://52.78.54.60/sub/chat");
  const stomp = StompJs.Stomp.over(sock);
  const token = sessionStorage.getItem('token')

  const [content, setContents] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    stomp.connect({Authorization : token}, ()=>{
      const one = 'df94c48e-0c1c-4c84-bf78-fe32c50aff23'
      stomp.subscribe(`/room/${one}`, (data)=> {
        console.log(data)
      })
    })
  })

  const addMessage = (e) => {
    setMessage(e.target.value)
  }

  const SendMessage = () => {
    const data = {message: message}
    console.log(data)
    stomp.send("/pub/chat/message",{Authorization : token},JSON.stringify(data));
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
