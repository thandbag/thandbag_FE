import React from "react";

//스타일
import GlobalStyles from "../components/GlobalStyles";
import styled from "styled-components";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Welcome from "../pages/Welcome";
import { Main, Login, Join, TbWrite, 
  TbList, TbTwoDetail, TbNotice, TbChatList, TbChatDetail, MyPage, 
  MyEdit, AuthRedirect, TbFinish, TbHitDetail, NotFound} from "../pages/Index";
import Auth from "../shared/auth";
import FeedBackBtn from "../components/FeedBackBtn";
import WebImg from "../static/images/web.png";

//ga 적용
import ReactGA from 'react-ga';

ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});
ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});


function App() {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); 
  };

  React.useEffect(() => {
    ReactGA.initialize("user id");
    history.listen((location) => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
    // ReactGA.pageview(window.location.pathname + window.location.search);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[])

  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <div className="wrap">
          <ConnectedRouter history={history}>
            <Switch>
              <Route path={"/"} exact component={Welcome} />
              <Route path={"/login"} exact component={Auth(Login, false)} />
              <Route path={"/user/kakao/callback"} exact component={Auth(AuthRedirect, false)}/>
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
        <FeedBackBtn />
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
    height: calc(var(--vh) * 100);
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
