import React from "react";
import styled from "styled-components";

import UserProfile from "../components/UserProfile";
import { Grid, Button } from "../elements/TbIndex";

import { history } from "../redux/configureStore";
import api from "../shared/Api";
import Swal from "sweetalert2";
import { useSpring, animated } from "react-spring";

import thandbagend from "../static/images/thandbag/one_thandbagend.png";
import thandbagend2 from "../static/images/thandbag/two_thandbagend.png";
import thandbagend3 from "../static/images/thandbag/three_thandbagend.png";


const TbFinish = (props) => {
  const token = sessionStorage.getItem("token");
  const postid = props.match.params.postid;
  const [user, setUsers] = React.useState("");
  const is_level = history.location.state.level;
  const fadeIn = useSpring({
    config: {
      duration: 300,
    },
    width: "100%",
    opacity: 1,
    from: { opacity: 0 },
  });

  React.useEffect(() => {
    api
      .post(
        `/api/thandbag?postId=${postid}`,
        {
          newHitCount: history.location.state.count,
          prevHitCount: history.location.state.pastcount,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      )
      .then(function (response) {
        setUsers(response.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "앗!",
          text: "유저정보를 불러오는데 문제가 발생했습니다.",
        });
      });
  }, []);
  return (
    <React.Fragment>
      <animated.div style={fadeIn}>
        <FinishBox>
          <Grid height="70vh">
            <img
              style={{ width: "420px" }}
              src={
                is_level == 1
                  ? thandbagend
                  : is_level == 2
                  ? thandbagend2
                  : thandbagend3
              }
              alt="level_thand"
            />
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
      </animated.div>
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
