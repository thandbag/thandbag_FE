import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import api from "../../shared/Api";

const SEARCH_CARD = 'SEARCH_CARD'
const LOAD_CARD = 'LOAD_CARD'
const ADD_CARD = 'ADD_CARD'
const ONE_CARD = 'ONE_CARD'
const EDIT_CARD = 'EDIT_CARD'
const DELETE_CARD = 'DELETE_CARD'

const searchCard = createAction(SEARCH_CARD, (search_list) => ({ search_list }))
const getCard = createAction(LOAD_CARD, (card_list) => ({ card_list }))
const addCard = createAction(ADD_CARD, (card) => ({ card }))
const getOneCard = createAction(ONE_CARD, (card) => ({ card }))
const editCard = createAction(EDIT_CARD, (card) => ({ card }))
const deleteCard = createAction(DELETE_CARD, (id) => ({ id }))

const initialState = {
  card_list: []
  
}

//미들웨어
const addCardDB = (img, tag, location, content, size) => {
  return async function (dispatch, getState, { history }) {
    await api
      .cards()
      .then(res => {
        dispatch(getCard(res.data.result));
      }).catch(err => {
        console.log('')
      })
  }
}

const getCardDB = (id) => {
  return async function (dispatch, getState, { history }) {
    
  }
}

const searchCardDB = (tagId) => {
  return async function (dispatch, getState, { history }) {
    
  }
}

const getOneCardDB = (id) => {
  return async function (dispatch, getState, { history }) {
    
  }
}

const editCardDB = (id, tag, location, content) => {
  return async function (dispatch, getState, { history }) {
    
  }
}

const deleteCardDB = (id) => {
  return async function (dispatch, getState, { history }) {
    
  }
}

export default handleActions(
  {
    [LOAD_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.card_list = action.payload.card_list
      }),

    [ONE_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.one_card = action.payload.card
      }),

    [EDIT_CARD]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.card_list.findIndex((p) => p.boardId === action.payload.card.boardId)

        draft.card_list[idx] = { ...draft.card_list[idx], ...action.payload.card }
      }),

    [DELETE_CARD]: (state, action) =>
      produce(state, (draft) => {
        const new_dict = draft.card_list.filter((c, idx) => {
          return c.boardId !== action.payload.id
        })

        draft.card_list = new_dict

      }),

    [SEARCH_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.search_list = action.payload.search_list
      }),

    [ADD_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.card_list.unshift(action.payload.card)
      }),
  },
  initialState
)

const actionCreators = {
  addCardDB,
  getCardDB,
  searchCardDB,
  getOneCardDB,
  editCardDB,
  deleteCardDB,
  searchCard,
  getCard,
  addCard,
  getOneCard,
}

export { actionCreators }
