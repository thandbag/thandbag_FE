import React from "react";
import UserProfile from "../components/UserProfile";
import { Grid, Button } from "../elements/TbIndex";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import thandbagend from "../static/images/thandbag/one_thandbagend.png";
import api from "../shared/Api";

const TbFinish = (props) => {
  
  
  const token = sessionStorage.getItem("token");
  const postid = props.match.params.postid
  const [user, setUsers] = React.useState("")

  React.useEffect(() => {
    api.post(`/api/thandbag?postId=${postid}`,{postId:postid} ,{
      headers: {Authorization: token}
    })
    .then(function (response) {
      setUsers(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  return (
    <React.Fragment>
      <FinishBox>
        <Grid height="70vh">
        <img style={{width: "420px"}} src={thandbagend}/>
        </Grid>
        <ChatBox>
          {/* 맵돌리자 */}
          <UserProfile thank_user={user} chat_user />
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
