import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'


// **** Action type **** //
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const USER_CARD = 'USER_CARD'


// **** Action creator **** //
const logIn = createAction(LOG_IN, (user) => ({ user }))
const logOut = createAction(LOG_OUT, (user) => ({ user }))
const userCard = createAction(USER_CARD, (user_card_list) => ({ user_card_list }))

// **** Initial data **** //
const initialState = {
  user: null,
  
}

// **** Middleware **** //

const joinDB = (email, password, fullname, nickname) => {
  return async function (dispatch, getState, { history }) {
   
  }
}

const logInDB = (email, password) => {
  return async function (dispatch, getState, { history }) {
    
  }
}

const logOutDB = () => {
  return async function (dispatch, getState, { history }) {
    
  }
}

const userCardDB = () => {
  return async function (dispatch, getState, { history }) {
    
  }
}

// **** Reducer **** //
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        
      }),
    [USER_CARD]: (state, action) =>
      produce(state, (draft) => {
        
      }),
  },
  initialState
)

// **** Export **** //
const actionCreators = {
  joinDB,
  logInDB,
  logOutDB,
  logOut,
  userCardDB,
  userCard,
}

export { actionCreators }
