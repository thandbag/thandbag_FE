import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'


// **** Action type **** //
const LOG_IN = 'LOG_IN'



// **** Action creator **** //
const logIn = createAction(LOG_IN, (user) => ({ user }))


// **** Initial data **** //
const initialState = {
  user: null,
  
}

// **** Middleware **** //

const joinDB = (email, password, fullname, nickname) => {
  return async function (dispatch, getState, { history }) {
   
  }
}


// **** Reducer **** //
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        
      })
    
  },
  initialState
)

// **** Export **** //
const actionCreators = {
  joinDB,
}

export { actionCreators }
