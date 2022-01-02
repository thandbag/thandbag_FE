import {createAction, createActions, handleActions } from "redux-actions";
import { produce } from 'immer';
import api from "../../shared/Api";


// **** Action type **** //
const SET_CHAT_LIST = 'SET_CHAT_LIST';
const SET_CHAT_MSG = 'SET_CHAT_MSG';
const ADD_CHAT_MSG = 'ADD_CHAT_MSG';
const GET_NOTICE = 'GET_NOTICE';



// **** Action creator **** //
const setChatList = createAction(SET_CHAT_LIST, (myChatList) => ({ myChatList }))
const setMessage = createAction(SET_CHAT_MSG, (chats) => ({chats}))
const addMessage = createAction(ADD_CHAT_MSG, (chat) => ({chat}))
const getNotice = createAction(GET_NOTICE, (alarm) => ({alarm}))

// **** Initial data **** //
const initialState = {
  chatListInfo: [],
  message: [],
  notice: [],
  
}

// **** Middleware **** //
const createChatRoomDB = (myId, youId) => {
    return async function (dispatch, getState, {history}) {
        const ids = {
            pubId : myId,
            subId : youId
        }
      const token = sessionStorage.getItem('token')
      await api.post('/chat/room',ids,{
            headers: {Authorization:token}
        }).then(function(response){
            console.log(response)
            //채팅방생성 알림?
        })
        .catch((err) => {
          window.alert(err.response.data)
        })
    }
}

const getChatListDB = () => {
  return async function (dispatch, getState, { history }) {
      const token = sessionStorage.getItem('token')
      await api.get('/chat/myRoomList',{
            headers : {Authorization:token}
        }).then(function(response) {
        dispatch(setChatList(response.data))
    })
    .catch((err) => {
      window.alert(err.response)
    })
  }
};

const getChatMessageDB = (roomId) => {
  return async function (dispatch, getState, { history }){
      const token = sessionStorage.getItem('token')
      await api.post(`/chat/room/enter/${roomId}`,{roomId:roomId},{
        headers: {Authorization:token}
    }).then(function(response){
      console.log(response)
      dispatch(setMessage(response.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
};




// **** Reducer **** //
export default handleActions(
  {
    [SET_CHAT_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.chatListInfo = action.payload.myChatList;
      }),
    [SET_CHAT_MSG]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.chats)
        draft.message = action.payload.chats
      }),
    [ADD_CHAT_MSG]: (state, action) =>
      produce(state, (draft) => {
        draft.message.push(action.payload.chat)
      }),
    [GET_NOTICE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.alarm)
        draft.notice.push(action.payload.alarm)
      })
    
  },
  initialState
)

// **** Export **** //
const actionCreators = {
  getChatListDB,
  getChatMessageDB,
  createChatRoomDB,
  addMessage,
  getNotice,
}

export { actionCreators }