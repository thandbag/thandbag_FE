import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/Api";

// **** Action type **** //
const SEARCH_CARD = "SEARCH_CARD";
const ADD_CARD = "ADD_CARD";
const TWO_DETAIL_CARD = "TWO_DETAIL_CARD";
const ONE_DETAIL_CARD = "ONE_DETAIL_CARD";
const EDIT_CARD = "EDIT_CARD";
const DELETE_CARD = "DELETE_CARD";
const SEND_CARD = "SEND_CARD";
const SET_CARD_LIST = "SET_CARD_LIST";
const CARD_DETAIL_ONE = "CARD_DETAIL_ONE";
const FIND_CARD = "FIND_CARD";

// **** Action creator **** //
const searchCard = createAction(SEARCH_CARD, (search) => ({
  search,
}));
const findCard = createAction(FIND_CARD, (find_card) => ({ find_card }));
const addCard = createAction(ADD_CARD, (card) => ({ card }));
const getTwoDetailCard = createAction(TWO_DETAIL_CARD, (card) => ({ card }));
const getOneDetailCard = createAction(ONE_DETAIL_CARD, (card) => ({ card }));
const editCard = createAction(EDIT_CARD, (card) => ({ card }));
const deleteCard = createAction(DELETE_CARD, (id) => ({ id }));
const sendCard = createAction(SEND_CARD, (card) => ({ card }));
const setCardList = createAction(SET_CARD_LIST, (card_list) => ({ card_list }));
const cardDetailOne = createAction(CARD_DETAIL_ONE, (card_detail) => ({
  card_detail,
}));

// **** Initial data **** //
const initialState = {
  card_list: [],
  search_list: [],
  shared_card: "",
  not_shared_card: "",
  find_card: [],

};

// **** Middleware **** //
const addCardDB = (img, tag, location, content, size) => {
  return async function (dispatch, getState, { history }) {};
};

const getCardListDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const pageNo = 0;
    const sizeNo = 1000;
    await api
      .get(`/api/thandbagList?page=${pageNo}&size=${sizeNo}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        dispatch(setCardList(response.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const getMyCardListDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const pageNo = 0;
    const sizeNo = 1000;
    await api
      .get(`/api/myThandbag?page=${pageNo}&size=${sizeNo}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
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
        console.log(response);
        dispatch(getTwoDetailCard(response.data));
      })
      .catch((err) => {
        console.log(err.response);
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
        console.log(response);
        dispatch(getOneDetailCard(response.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const cardDetailOneDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const postId = 1;
    await api
      .get(`/api/thandbag/${postId}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        dispatch(cardDetailOne(response.data));
      })
      .catch((err) => {
        console.log(err.response);
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
        dispatch(searchCard(response.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

const searchCardDB = (tagId) => {
  return async function (dispatch, getState, { history }) {};
};

const getCardDB = (id) => {
  return async function (dispatch, getState, { history }) {};
};

const editCardDB = (id, tag, location, content) => {
  return async function (dispatch, getState, { history }) {};
};

const deleteCardDB = (id) => {
  return async function (dispatch, getState, { history }) {};
};

// **** 댓글추가 **** /
const sendCommentDB = (postId, comment) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api
      .post(`/api/${postId}/newComment`, {comment:comment},{
        headers: { Authorization: token },
      })
      .then(function (response) {
        console.log(response)
        dispatch(sendComment(response.data));
      })
      .catch((err) => {
        window.alert(err.response);
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
    console.log(card);
    await api
      .post("/api/newThandbag", card, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        console.log(response);
        history.push("/tblist");
        window.alert("생드백 작성 완료!");
      })
      .catch((err) => {
        console.log(err.response);
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
      }),

    [TWO_DETAIL_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.shared_card = action.payload.card;
      }),
    [ONE_DETAIL_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.not_shared_card = action.payload.card;
      }),

    [EDIT_CARD]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.card_list.findIndex(
          (p) => p.boardId === action.payload.card.boardId
        );

        draft.card_list[idx] = {
          ...draft.card_list[idx],
          ...action.payload.card,
        };
      }),

    [DELETE_CARD]: (state, action) =>
      produce(state, (draft) => {
        const new_dict = draft.card_list.filter((c, idx) => {
          return c.boardId !== action.payload.id;
        });

        draft.card_list = new_dict;
      }),

    [SEARCH_CARD]: (state, action) =>
      produce(state, (draft) => {
        const all_search = draft.card_list.filter((c) => {
          return c.share == true;
        });
        const new_search = draft.card_list.filter((c) => {
          return c.category == action.payload.search;
        });

        if (action.payload.search == "전체") {
          draft.search_list = all_search;
        } else {
          draft.search_list = new_search;
        }
      }),

    [ADD_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.card_list.unshift(action.payload.card);
      }),
  },
  initialState
);

const actionCreators = {
  addCardDB,
  getCardDB,
  searchCardDB,
  getCardListDB,
  editCardDB,
  deleteCardDB,
  searchCard,
  addCard,
  sendCardDB,
  getCardTwoDetailDB,
  getCardOneDetailDB,
  getMyCardListDB,
};

export { actionCreators };
