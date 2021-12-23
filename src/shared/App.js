import React from 'react';
import styled from 'styled-components';
import './App.css';
import {Route} from "react-router-dom";
import Main from "../pages/Main";
import Login from '../pages/Login';
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
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../redux/configureStore'


function App() {
  return (
    <>
    <Container>
      <div className='wrap'>
        <ConnectedRouter history={history}>
          <Route path={"/"} exact component={Main}/>
          <Route path={"/login"} exact component={Login}/>
          <Route path={"/join"} exact component={Join}/>
          <Route path={"/TbSelect"} exact component={TbSelect}/>
          <Route path={"/TbWrite"} exact component={TbWrite}/>
          <Route path={"/TbList"} exact component={TbList}/>
          <Route path={"/TbOneDetail"} exact component={TbOneDetail}/>
          <Route path={"/TbTwoDetail"} exact component={TbTwoDetail}/>
          <Route path={"/TbNotice"} exact component={TbNotice}/>
          <Route path={"/TbChatList"} exact component={TbChatList}/>
          <Route path={"/TbChatDetail"} exact component={TbChatDetail}/>
          <Route path={"/MyPage"} exact component={MyPage}/>
          <Route path={"/MyEdit"} exact component={MyEdit}/>
        </ConnectedRouter>
      </div>
    </Container>
    
    
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: #eeee;
  overflow: hidden;
  .wrap {
    
    width: 100%;
    height: 100%;
    max-width: 420px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 auto;
    box-sizing: border-box;
    background-color: #ffff;

    @media screen and (min-width: 1024px){
    position: relative;
    left:11%;
    top:0%;
    overflow: auto;
  }
  }
  

`;

export default App;
