import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/Api";

//리덕스
// 리덕스는 별거 없다 마 이것만 기억하면됨. 원래는 action, dispatch, reducer가 전부인데
// 그것들을 사용하기 편리하게 한게 모듈에 덕스구조라고 생각하자. 매번 뷰쪽에서 디스패치 일으킬때
// ({액션 타입}, 어쩌구저쩌구) 해주기 귀찮으니까? 밑에 액션 타입 미리 지정해준거고 액션 크리에이터도
// 만들어 둔 것임. 그리고 핸들액션 부분이 리듀서에 넣어주는 부분인데 그러면 디스패치를 통해 리듀서에 있는 값들이 자동으로 리렌더링이 되어서
// 뷰딴에 보여지게 되는것임. 이찌되었든 액션을 정하고 디스패치를 통해 스토어에 접근하고 디스패치가 리듀서에 있는 값들을 뷰딴에 알아서
// 리렌더링 시켜주는것임. 액션 타입(편하려고), 액션 크리에이터(편하려고), 미들웨어(비동기 통신 하려고) 이딴것들은 도구일 뿐이다.
// 규칙 맞춰서 써주면 된다.

// **** Action type **** //
const SEARCH_CARD = "SEARCH_CARD";
const ADD_CARD = "ADD_CARD";
const TWO_DETAIL_CARD = "TWO_DETAIL_CARD";
const ONE_DETAIL_CARD = "ONE_DETAIL_CARD";
const EDIT_CARD = "EDIT_CARD";
const DELETE_CARD = "DELETE_CARD";
const SEND_CARD = "SEND_CARD";
const SET_CARD_LIST = "SET_CARD_LIST";

// **** Action creator **** //
const searchCard = createAction(SEARCH_CARD, (search) => ({
  search,
}));
const addCard = createAction(ADD_CARD, (card) => ({ card }));
const getTwoDetailCard = createAction(TWO_DETAIL_CARD, (card) => ({ card }));
const getOneDetailCard = createAction(ONE_DETAIL_CARD, (card) => ({ card }));
const editCard = createAction(EDIT_CARD, (card) => ({ card }));
const deleteCard = createAction(DELETE_CARD, (id) => ({ id }));
const sendCard = createAction(SEND_CARD, (card) => ({ card }));
const setCardList = createAction(SET_CARD_LIST, (card_list) => ({ card_list }));

// **** Initial data **** //
const initialState = {
  card_list: [],
  search_list: [],
  shared_card: "",
  not_shared_card: ""
};

// **** Middleware **** //
const addCardDB = (img, tag, location, content, size) => {
  return async function (dispatch, getState, { history }) {};
};

// await가 뭘까? 비동기 통신을 방지해주는 것임, 값이 제대로 들어오지도 않았는데 다음단계로 넘어가서 코드를 실행하면 안되니까 await를 사용해서
// 비동기 통신을 방지해줌. 즉 값을 정상적으로 받아올때까지 기다려준다는 것임.

// try는? 정상적으로 통신이 일어났을때 발생할 동작들을 try안에 넣어줌
// catch는 오류났을때

const getCardListDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    const pageNo = 0;
    const sizeNo = 1000;
    await api.get(`/api/thandbagList?page=${pageNo}&size=${sizeNo}`,
        {
          headers: { Authorization: token },
        }).then(function(response){
        dispatch(setCardList(response.data));
      })
      .catch((err) => {
        console.log(err.response)
      })
  };
};

const getMyCardListDB = () => {
  return async function (dispatch, getState, {history}) {
    const token = sessionStorage.getItem("token");
    const pageNo = 0;
    const sizeNo = 1000;
    await api.get( `/api/myThandbag?page=${pageNo}&size=${sizeNo}`,
    {
      headers: { Authorization: token },
    }).then(function(response){
      console.log(response)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }
}

const getCardTwoDetailDB = (postid) => {
  return async function (dispatch, getState, { history }){
    const token = sessionStorage.getItem("token");
    await api.get(`api/thandbag/${postid}`, { 
      headers : { Authorization: token}
    }).then(function(response){
      console.log(response)
      dispatch(getTwoDetailCard(response.data))
    })
    .catch((err) => {
      console.log(err.response)
    })
  };
};

const getCardOneDetailDB = (postid) => {
  return async function ( dispatch, getState, { history }){
    const token = sessionStorage.getItem("token");
    await api.get(`api/thandbag/${postid}`, {
      headers : { Authorization: token}
    }).then(function(response){
      console.log(response)
      dispatch(getOneDetailCard(response.data))
    })
    .catch((err) => {
      console.log(err.response)
    })
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
          return c.share == true
        })
        const new_search = draft.card_list.filter((c) => {
          return c.category == action.payload.search
          })

        if(action.payload.search == '전체'){
          draft.search_list = all_search
        }else {
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
