import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import icon1 from "../static/icons/icon1.svg";
import icon2 from "../static/icons/icon2.svg";
import icon3 from "../static/icons/icon3.svg";
import icon4 from "../static/icons/icon4.svg";
import { history } from "../redux/configureStore";

const Navgation = (props) => {

  if(props.location.pathname === '/') {
    return null;
  }

  if(props.location.pathname === '/login' ) {
    return null;
  }

  if(props.location.pathname === '/join' ) {
    return null;
  }


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
          <Icon3
            onClick={() => {
              history.push("/TbNotice");
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
}

const NavBox = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav1 = styled.div`
  width: 25%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Icon1 = styled.div`
  width: 27px;
  height: 27px;
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

export default withRouter(Navgation);