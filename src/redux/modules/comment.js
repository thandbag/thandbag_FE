import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/Api";

// **** Action type **** //
const SEND_COMMENT = "SEND_COMMENT";

// **** Action creator **** //

const sendComment = createAction(SEND_COMMENT, (postId, comment) => ({
  comment
}));

// **** Initial data **** //
const initialState = {
  comment: [{
    userId: "",
    nickname: "",
    comment: "",
    createdAt: "",
    totalCount: null,
  }],
};

// **** Middleware **** //

const sendCommentDB = (postId, comment) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem('token')
    await api.post(`/api/${postId}/newComment`, {
      headers : { Authorization: token }
    }).then(function(response) {
      dispatch(sendComment(response.data))
    })
    .catch((err) => {
      window.alert(err.response)
    })
  }
};

// **** Reducer **** //
export default handleActions(
  {
    [SEND_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.comment = state.comment.push(action.payload.comment);
    }),
  },
  initialState
);

// **** Export **** //
const actionCreators = {
  sendCommentDB,
};

export { actionCreators };
