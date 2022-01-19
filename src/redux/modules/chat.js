import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/Api";

// **** Action type **** //
const SET_CHAT_LIST = "SET_CHAT_LIST";
const SET_CHAT_MSG = "SET_CHAT_MSG";
const ADD_CHAT_MSG = "ADD_CHAT_MSG";
const GET_NOTICE = "GET_NOTICE";
const EDIT_NOTICE = "EDIT_NOTICE";
const GET_ALARM = "GET_ALARM";
const DELETE_ALARM = "DELETE_ALARM";
const INCREASE_PAGE_NUM = "INCREASE_PAGE_NUM";
const SET_IS_APPEND_LOADED = "SET_IS_APPEND_LOADED";
const SET_IS_CARD_LIST_LOAD_COMPLETE = "SET_IS_CARD_LIST_LOAD_COMPLETE";
const APPEND_NOTICE_LIST = "APPEND_NOTICE_LIST";

// **** Action creator **** //
const setChatList = createAction(SET_CHAT_LIST, (myChatList) => ({
  myChatList,
}));
const setMessage = createAction(SET_CHAT_MSG, (chats) => ({ chats }));
const addMessage = createAction(ADD_CHAT_MSG, (chat) => ({ chat }));
const getNotice = createAction(GET_NOTICE, (notice) => ({ notice }));
const editNotice = createAction(EDIT_NOTICE, (notice) => ({ notice }));
const getAlarm = createAction(GET_ALARM, (alarm) => ({ alarm }));
const deleteAlarm = createAction(DELETE_ALARM, () => ({}));
const increasePageNum = createAction(INCREASE_PAGE_NUM);
const setIsAppendLoaded = createAction(
  SET_IS_APPEND_LOADED,
  (is_append_loaded) => ({ is_append_loaded })
);
const setIsCardListLoadComplete = createAction(
  SET_IS_CARD_LIST_LOAD_COMPLETE,
  (is_card_list_load_complete) => ({ is_card_list_load_complete })
);
const appendNoticeList = createAction(APPEND_NOTICE_LIST, (notice) => ({
  notice,
}));

// **** Initial data **** //
const initialState = {
  chatListInfo: [],
  message: [],
  notice: [],
  alarm: [],
  is_loaded: false,
  pageNumber: 1,
  is_append_loaded: true,
  is_card_list_load_complete: false,
};

// **** Middleware **** //
const createChatRoomDB = (myId, youId) => {
  return async function (dispatch, getState, { history }) {
    const ids = {
      pubId: myId,
      subId: youId,
    };
    const token = sessionStorage.getItem("token");
    await api
      .post("/chat/room", ids, {
        headers: { Authorization: token },
      })
      .then(function (response) {})
      .catch((err) => {
        window.alert("채팅방을 생성하는데 문제가 발생했습니다.");
      });
  };
};

const getChatListDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api
      .get("/chat/myRoomList", {
        headers: { Authorization: token },
      })
      .then(function (response) {
        dispatch(setChatList(response.data));
      })
      .catch((err) => {
        window.alert("채팅 목록을 불러오는데 문제가 발생했습니다.");
      });
  };
};

const getChatMessageDB = (roomId) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api
      .post(
        `/chat/room/enter/${roomId}`,
        { roomId: roomId },
        {
          headers: { Authorization: token },
        }
      )
      .then(function (response) {
        dispatch(setMessage(response.data));
      })
      .catch((err) => {
        window.alert("메세지를 불러오는데 문제가 발생했습니다.");
      });
  };
};

const getNoticeDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api
      .get("/api/alarm?page=0&size=8", {
        headers: { Authorization: token },
      })
      .then(function (response) {
        dispatch(getNotice(response.data));
      })
      .catch((err) => {
        window.alert("알림목록을 불러오는데 문제가 발생했습니다.");
      });
  };
};

const appendNoticeListDB = (sizeNo = 8) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    dispatch(setIsAppendLoaded(false));
    console.log("api 시작!");
    await api
      .get(`/api/alarm?page=${getState().chat.pageNumber}&size=${sizeNo}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        console.log("notice : ", response.data);
        dispatch(appendNoticeList(response.data));
        dispatch(increasePageNum());
        dispatch(setIsAppendLoaded(true));
      })
      .catch((err) => {
        window.alert("알림을 불러오는데 문제가 발생했습니다.");
        dispatch(setIsAppendLoaded(true));
      });
  };
};

const postNoticeDB = (Id) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api
      .post(
        `/api/alarm/${Id}`,
        { alarmId: Id },
        {
          headers: { Authorization: token },
        }
      )
      .then(function (response) {
        dispatch(editNotice(response.data));
      })
      .catch((err) => {
        window.alert("해당 경로를 불러오는데 문제가 발생했습니다.");
      });
  };
};

// **** Reducer **** //
export default handleActions(
  {
    [SET_CHAT_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.chatListInfo = action.payload.myChatList;
        draft.is_loaded = true;
      }),
    [SET_CHAT_MSG]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.chats);
        draft.message = action.payload.chats;
        draft.is_loaded = true;
      }),
    [ADD_CHAT_MSG]: (state, action) =>
      produce(state, (draft) => {
        draft.message.push(action.payload.chat);
      }),
    [GET_NOTICE]: (state, action) =>
      produce(state, (draft) => {
        draft.notice = action.payload.notice;
        draft.is_loaded = true;
      }),
    [APPEND_NOTICE_LIST]: (state, action) =>
      produce(state, (draft) => {
        console.log("notice : ", action.payload.notice);
        if (action.payload.notice.length === 0) {
          draft.is_card_list_load_complete = true;
          return;
        }
        draft.notice = [...draft.notice, ...action.payload.notice];
      }),
    [INCREASE_PAGE_NUM]: (state, action) =>
      produce(state, (draft) => {
        console.log(draft.pageNumber);
        draft.pageNumber += 1;
      }),
    [SET_IS_APPEND_LOADED]: (state, action) =>
      produce(state, (draft) => {
        draft.is_append_loaded = action.payload.is_append_loaded;
      }),
    [EDIT_NOTICE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.notice.findIndex(
          (n) => n.alarmId === action.payload.notice.alarmId
        );
        draft.notice[idx] = { ...draft.notice[idx], ...action.payload.notice };
      }),
    [GET_ALARM]: (state, action) =>
      produce(state, (draft) => {
        draft.alarm.push(action.payload.alarm);
      }),
    [DELETE_ALARM]: (state, action) =>
      produce(state, (draft) => {
        draft.alarm = [];
      }),
  },
  initialState
);

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
  appendNoticeListDB,
};

export { actionCreators };
