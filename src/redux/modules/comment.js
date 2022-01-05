import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/Api";

// **** Action type **** //
const SEND_COMMENT = "SEND_COMMENT";
const DELETE_COMMENT = "DELETE_COMMNET";

// **** Action creator **** //
const sendComment = createAction(SEND_COMMENT, (comment) => ({
  comment,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));

// **** Initial data **** //
const initialState = {
  comment: [
    {
      userId: "",
      nickname: "",
      comment: "",
      createdAt: "",
      totalCount: null,
    },
  ],
};

// **** Middleware **** /
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

const deleteCommentDB = (commentId) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api
      .post(`/api/uncomment/${commentId}`, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        // dispatch(deleteComment(response.data));
      })
      .catch((error) => {
        console.log("댓글 삭제에 문제가 발생했습니다.", error);
      })
  };
};

// **** Reducer **** //
export default handleActions(
  {
    [SEND_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment = state.comment.push(action.payload.comment);
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // 백엔드 협의
        draft.comment[action.payload.commentId].filter(
          (c) => c.id !== action.payload.commentId
        );
      }),
  },
  initialState
);

// **** Export **** //
const actionCreators = {
  sendCommentDB,
  deleteCommentDB,
};

export { actionCreators };
