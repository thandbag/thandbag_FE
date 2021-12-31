import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import api from "../../shared/Api";

// **** Action type **** //
const SEND_COMMENT = "SEND_COMMENT";

// **** Action creator **** //
const sendComment = createAction(SEND_COMMENT, (comment) => ({ comment }));

// **** Initial data **** //
const initialState = {
  comment: null,
};

// **** Middleware **** //

const sendCommentDB = (comment, postId) => {
  return async function (dispatch, getState, { history }) {
    try {
      await api.post(`/api/${postId}/newComment`);
    } catch (err) {
      console.log(err.response);
      window.alert("댓글전송에 문제가 생겼습니다");
    }
  };
};

// **** Reducer **** //
export default handleActions(
  {
    [SEND_COMMENT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// **** Export **** //
const actionCreators = {
  sendCommentDB,
};

export { actionCreators };
