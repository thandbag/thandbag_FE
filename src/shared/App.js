import React from "react";
import styled from "styled-components";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Wlecome from "../pages/Welcome";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Join from "../pages/Join";
import TbSelect from "../pages/TbSelect";
import TbWrite from "../pages/TbWrite";
import TbList from "../pages/TbList";
import TbOneDetail from "../pages/TbOneDetail";
import TbTwoDetail from "../pages/TbTwoDetail";
import TbNotice from "../pages/TbNotice";
import TbChatList from "../pages/TbChatList";
import TbChatDetail from "../pages/TbChatDetail";
import MyPage from "../pages/MyPage";
import MyEdit from "../pages/MyEdit";
import AuthRedirect from "../pages/AuthRedirect";
import TbComplate from "../pages/TbComplete";
import TbFinish from "../pages/TbFinish";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import GlobalStyles from "../components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <div className="wrap">
          <ConnectedRouter history={history}>
            <Switch>
              <Route path={"/"} exact component={Wlecome} />
              <Route path={"/login"} exact component={Login} />
              <Route path={"/user/kakao/callback"} exact component={AuthRedirect}/>
              <Route path={"/join"} exact component={Join} />
              <Route path={"/main"} exact component={Main} />
              <Route path={"/TbSelect"} exact component={TbSelect} />
              <Route path={"/TbWrite"} exact component={TbWrite} />
              <Route path={"/TbList"} exact component={TbList} />
              <Route path={"/TbOneDetail"} exact component={TbOneDetail} />
              <Route path={"/TbTwoDetail"} exact component={TbTwoDetail} />
              <Route path={"/TbNotice"} exact component={TbNotice} />
              <Route path={"/TbChatList"} exact component={TbChatList} />
              <Route path={"/TbChatDetail/:roomid"} exact component={TbChatDetail} />
              <Route path={"/MyPage"} exact component={MyPage} />
              <Route path={"/MyEdit"} exact component={MyEdit} />
              <Route path={"/tbfinish"} exact component={TbFinish} />
              <Route path={"/TbComplate"} exact component={TbComplate} />
            </Switch>
          </ConnectedRouter>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: #e5e5e5;
  overflow: hidden;

  .wrap {
    width: 100%;
    max-width: 420px;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 auto;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: relative;

    @media screen and (min-width: 1024px) {
      position: relative;
      left: 11%;
      top: 0%;
      overflow: auto;
    }
  }
`;

export default App;
