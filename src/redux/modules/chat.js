import {createAction, handleActions } from "redux-actions";
import { produce } from 'immer';
import api from "../../shared/Api";


// **** Action type **** //
const SET_CHAT_LIST = 'SET_CHAT_LIST';
const SET_CHAT_MSG = 'SET_CHAT_MSG';
const ADD_CHAT_MSG = 'ADD_CHAT_MSG';
const GET_NOTICE = 'GET_NOTICE';
const EDIT_NOTICE = 'EDIT_NOTICE';
const GET_ALARM = 'GET_ALARM';
const DELETE_ALARM = 'DELETE_ALARM';


// **** Action creator **** //
const setChatList = createAction(SET_CHAT_LIST, (myChatList) => ({ myChatList }))
const setMessage = createAction(SET_CHAT_MSG, (chats) => ({chats}))
const addMessage = createAction(ADD_CHAT_MSG, (chat) => ({chat}))
const getNotice = createAction(GET_NOTICE, (notice) => ({notice}))
const editNotice = createAction(EDIT_NOTICE, (notice) => ({notice}))
const getAlarm = createAction(GET_ALARM, (alarm) => ({alarm}));
const deleteAlarm = createAction(DELETE_ALARM, () => ({}))

// **** Initial data **** //
const initialState = {
  chatListInfo: [],
  message: [],
  notice: [],
  alarm: [null],
  
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
            window.alert('채팅방이 생성되었습니다')
            //채팅방생성 알림
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
      window.alert(err)
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

const getNoticeDB = () => {
  return async function (dispatch, getState, { history }){
    const token = sessionStorage.getItem('token')
    await api.get('/api/alarm',{
      headers : {Authorization:token}
  }).then(function(response) {
    console.log(response)
    dispatch(getNotice(response.data))
  })
  .catch((err) => {
    console.log(err)
  })
  }
};

const postNoticeDB = (Id) => {
  return async function (dispatch, getState, { history }){
    const token = sessionStorage.getItem('token')
    await api.post(`/api/alarm/${Id}`, {alarmId:Id},{
      headers : {Authorization:token}
  }).then(function(response) {
    console.log(response)
    dispatch(editNotice(response.data))
  })
  .catch((err) => {
    console.log(err.response)
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
        draft.notice = action.payload.notice
      }),
    [EDIT_NOTICE]: (state, action) => 
      produce(state, (draft) => {
        let idx = draft.notice.findIndex(
          (n) => n.alarmId === action.payload.notice.alarmId)
        draft.notice[idx] = {...draft.notice[idx], ...action.payload.notice}
      }),
    [GET_ALARM]: (state, action) =>
      produce(state, (draft) => {
        draft.alarm.push(action.payload.alarm)
      }),
    [DELETE_ALARM]: (state, action) =>
      produce(state, (draft) => {
        draft.alarm = []
      })
    
  },
  initialState
)

// **** Export **** //
const actionCreators = {
  getChatListDB,
  getChatMessageDB,
  createChatRoomDB,
  getNoticeDB,
  postNoticeDB,
  addMessage,
  getNotice,
  getAlarm,
  deleteAlarm,
}

export { actionCreators }