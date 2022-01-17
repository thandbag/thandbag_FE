import React from "react";
import styled from "styled-components";
import WebImg from "../static/images/web.png";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wlecome from "../pages/Welcome";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Join from "../pages/Join";
import TbWrite from "../pages/TbWrite";
import TbList from "../pages/TbList";
import TbTwoDetail from "../pages/TbTwoDetail";
import TbNotice from "../pages/TbNotice";
import TbChatList from "../pages/TbChatList";
import TbChatDetail from "../pages/TbChatDetail";
import MyPage from "../pages/MyPage";
import MyEdit from "../pages/MyEdit";
import AuthRedirect from "../pages/AuthRedirect";
import TbFinish from "../pages/TbFinish";
import TbHitDetail from "../pages/TbHitDetail";
import NotFound from "../pages/NotFound";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import GlobalStyles from "../components/GlobalStyles";
import Auth from "../shared/auth";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <div className="wrap">
          <ConnectedRouter history={history}>
            <Switch>
              <Route path={"/"} exact component={Wlecome} />
              <Route path={"/login"} exact component={Auth(Login, false)} />
              <Route
                path={"/user/kakao/callback"}
                exact
                component={Auth(AuthRedirect, false)}
              />
              <Route path={"/join"} exact component={Auth(Join, false)} />
              <Route path={"/main"} exact component={Main} />
              <Route path={"/TbWrite"} exact component={Auth(TbWrite, true)} />
              <Route path={"/TbList"} exact component={TbList} />
              <Route path={"/TbTwoDetail/:postid"} exact component={TbTwoDetail} />
              <Route path={"/TbHitDetail/:postid"} exact component={Auth(TbHitDetail, true)} />
              <Route path={"/TbNotice"} exact component={Auth(TbNotice,true)} />
              <Route path={"/TbChatList"} exact component={Auth(TbChatList,true)} />
              <Route path={"/TbChatDetail/:roomid"} exact component={Auth(TbChatDetail,true)} />
              <Route path={"/MyPage"} exact component={Auth(MyPage,true)} />
              <Route path={"/MyEdit"} exact component={Auth(MyEdit,true)} />
              <Route path={"/TbFinish/:postid"} exact component={Auth(TbFinish,true)} />
              <Route path={"*"} exact component={NotFound} />
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
  background-color: #f6f6f6;
  background-image: url(${WebImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    background-image: none;
  }

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
