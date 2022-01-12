import { createAction, handleActions } from "redux-actions";
import { actionCreators as commentActions } from "./comment";
import { produce } from "immer";
import api from "../../shared/Api";

// **** Action type **** //
const SEARCH_CARD = "SEARCH_CARD";
const ADD_CARD = "ADD_CARD";
const TWO_DETAIL_CARD = "TWO_DETAIL_CARD";
const ONE_DETAIL_CARD = "ONE_DETAIL_CARD";
const SET_CARD_LIST = "SET_CARD_LIST";
const SET_MY_LIST = "SET_MY_LIST";
const GET_THANK_USER = "GET_THANK_USER";
const APPEND_CARD_LIST = "APPEND_CARD_LIST";
const INCREASE_PAGE_NUM = "INCREASE_PAGE_NUM";
const SET_IS_APPEND_LOADED = "SET_IS_APPEND_LOADED";

// **** Action creator **** //
const searchCard = createAction(SEARCH_CARD, (search) => ({ search }));
const addCard = createAction(ADD_CARD, (card) => ({ card }));
const getTwoDetailCard = createAction(TWO_DETAIL_CARD, (card) => ({ card }));
const getOneDetailCard = createAction(ONE_DETAIL_CARD, (card) => ({ card }));
const setCardList = createAction(SET_CARD_LIST, (card_list) => ({ card_list }));
const setMyList = createAction(SET_MY_LIST, (my_list) => ({ my_list }));
const getThankUser = createAction(GET_THANK_USER, (user) => ({ user }));
const appendCardList = createAction(APPEND_CARD_LIST, (card_list) => ({
  card_list,
}));
const increasePageNum = createAction(INCREASE_PAGE_NUM);
const setIsAppendLoaded = createAction(
  SET_IS_APPEND_LOADED,
  (is_append_loaded) => ({ is_append_loaded })
);

// **** Initial data **** //
const initialState = {
  card_list: [],
  search_list: [],
  my_list: [],
  shared_card: "",
  not_shared_card: "",
  find_card: [],
  hit_count: "",
  thank_users: [],
  is_loaded: false,
  is_append_loaded: true,
  pageNumber: 1,
};

// **** Middleware **** //

const getCardListDB = (pageNo = 0, sizeNo = 5) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api
      .get(`/api/thandbagList?page=${pageNo}&size=${sizeNo}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        console.log(response)
        dispatch(setCardList(response.data));
      })
      .catch((err) => {
        window.alert("생드백을 불러오는데 문제가 발생했습니다.");
      });
  };
};

const appendCardListDB = (sizeNo = 5) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    dispatch(setIsAppendLoaded(false));
    console.log(getState());
    await api
      .get(
        `/api/thandbagList?page=${getState().card.pageNumber}&size=${sizeNo}`,
        {
          headers: { Authorization: token },
        }
      )
      .then(function (response) {
        dispatch(appendCardList(response.data));
        dispatch(increasePageNum());
        dispatch(setIsAppendLoaded(true));
      })
      .catch((err) => {
        window.alert("생드백을 불러오는데 문제가 발생했습니다.");
        dispatch(setIsAppendLoaded(true));
      });
  };
};

const getMyCardListDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const pageNo = 0;
    const sizeNo = 10;
    await api
      .get(`/api/myThandbag?pageNo=${pageNo}&sizeNo=${sizeNo}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        sessionStorage.removeItem('level')
        sessionStorage.setItem('level', response.data.level)
        dispatch(setMyList(response.data.myPostList));
      })
      .catch((err) => {
        window.alert("생드백을 불러오는데 문제가 발생했습니다.");
      });
  };
};

const getCardTwoDetailDB = (postid) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api
      .get(`api/thandbag/${postid}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        dispatch(getTwoDetailCard(response.data));
        dispatch(commentActions.setComment(response.data.comments));
      })
      .catch((err) => {
        window.alert("생드백을 불러오는데 문제가 발생했습니다.");
      });
  };
};

const getCardOneDetailDB = (postid) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api
      .get(`api/thandbag/${postid}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        dispatch(getOneDetailCard(response.data));
      })
      .catch((err) => {
        window.alert("생드백을 불러오는데 문제가 발생했습니다.");
      });
  };
};

const findCardDB = (keyword) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const pageNo = 0;
    const sizeNo = 1000;
    await api
      .get(`/api/thandbag?keyword=${keyword}&page=${pageNo}&size=${sizeNo}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        dispatch(setCardList(response.data));
      })
      .catch((err) => {
        window.alert("생드백을 불러오는데 문제가 발생했습니다.");
      });
  };
};

const postHitCountDB = (postid, hitcount, pastHitcount) => {
  return async function (dispatch, getState, { history }) {
    console.log(postid, hitcount,pastHitcount)
    // return;
    const token = sessionStorage.getItem("token");
    await api
      .post(`/api/thandbag/punch/${postid}`, 
      {newHitCount:hitcount,
        prevHitCount:pastHitcount}, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(function (response) {
      })
      .catch((err) => {
        window.alert("문제가 발생했습니다.");
      });
  };
};

const categoryMapper = {
  사회생활: "SOCIAL",
  공부: "STUDY",
  진로고민: "JOB",
  대인관계: "PEOPLE",
  가정문제: "FAMILY",
  연애: "LOVE",
  기타: "OTHERS",
};

const sendCardDB = (category, title, content, img, share) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const card = {
      category: categoryMapper[category],
      title: title,
      content: content,
      img: img,
      share: share,
    };
    await api
      .post("/api/newThandbag", card, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        dispatch(addCard(response.data))
      })

      .catch((err) => {
        window.alert("생드백 작성 실패!");
      });
  };
};

export default handleActions(
  {
    [SET_CARD_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.card_list = action.payload.card_list;
        draft.search_list = action.payload.card_list;
        draft.is_loaded = true;
      }),
    [APPEND_CARD_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.card_list = [...draft.card_list, ...action.payload.card_list];
        draft.search_list = [...draft.card_list, ...action.payload.card_list];
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
    [SET_MY_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.my_list = action.payload.my_list;
        draft.is_loaded = true;
      }),
    [TWO_DETAIL_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.shared_card = action.payload.card;
        draft.is_loaded = true;
      }),
    [ONE_DETAIL_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.not_shared_card = action.payload.card;
        draft.is_loaded = true;
      }),

    [SEARCH_CARD]: (state, action) =>
      produce(state, (draft) => {
        const thand_end = draft.card_list.filter((c) => {
          return c.closed === true;
        });
        const thand_not_end = draft.card_list.filter((c) => {
          return c.closed === false;
        });
        const all_search = draft.card_list.filter((c) => {
          return c.share === true;
        });
        const new_search = draft.card_list.filter((c) => {
          return c.category === action.payload.search;
        });

        if (action.payload.search === "전체") {
          draft.search_list = all_search;
        } else if (action.payload.search == true) {
          draft.search_list = thand_end;
        } else if (action.payload.search == false) {

          draft.search_list = thand_not_end;
        } else {
          draft.search_list = new_search;
        }
      }),

    [ADD_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.card_list.unshift(action.payload.card);
      }),
    [GET_THANK_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.thank_users = action.payload.user;
      }),
  },
  initialState
);

const actionCreators = {
  getCardListDB,
  searchCard,
  addCard,
  sendCardDB,
  getCardTwoDetailDB,
  getCardOneDetailDB,
  getMyCardListDB,
  findCardDB,
  postHitCountDB,
  getThankUser,
  appendCardListDB,
};

export { actionCreators };
