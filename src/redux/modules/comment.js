import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/Api";

// **** Action type **** //
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMNET";
const PLUS_LIKE = "PLUS_LIKE";

// **** Action creator **** //
const setComment = createAction(SET_COMMENT, (comment_list) => ({comment_list}));
const addComment = createAction(ADD_COMMENT, (comment) => ({comment}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({commentId}));
const plusLike = createAction(PLUS_LIKE, (like) => ({like}));

// **** Initial data **** //
const initialState = {
  comment_list: [],
};

// **** Middleware **** /
const sendCommentDB = (postId, comment) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api.post(`/api/${postId}/newComment`, comment,{
        headers: { Authorization: token, 
          'Content-Type': 'application/json;charset=UTF-8'},
      })
      .then(function (response) {
        console.log(response)
        dispatch(addComment(response.data));
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
      .delete(`/api/uncomment/${commentId}` ,{
        headers: { Authorization: token },
      })
      .then(function (response) {
        dispatch(deleteComment(commentId));
      })
      .catch((err) => {
        console.log("댓글 삭제에 문제가 발생했습니다.", err);
      })
  };
};

const likeCommentDB = (bool , commentId) => {
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
    await api.post(`/api/${commentId}/like`,{commentId:commentId} ,{
      headers: { Authorization: token},
    })
    .then(function (response) {
      console.log(response)
      dispatch(plusLike(response.data))
      
    })
    .catch((err) => {
      console.log(err)
    })
  };
};

// **** Reducer **** //
export default handleActions(
  { 
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment_list = action.payload.comment_list
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment_list.push(action.payload.comment);
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const new_comment =draft.comment_list.filter(
          (c) => c.commentId !== action.payload.commentId
        );
        draft.comment_list = new_comment
      }),
    [PLUS_LIKE]: (state, action) => 
      produce(state, (draft) => {
        let idx = draft.comment_list.findIndex((c) => 
           c.commentId === action.payload.like.commentId
        );
        draft.comment_list[idx] = {
          ...draft.comment_list[idx], ...action.payload.like}
      }),
    
  },
  initialState
);

// **** Export **** //
const actionCreators = {
  sendCommentDB,
  deleteCommentDB,
  likeCommentDB,
  setComment,
};

export { actionCreators };
