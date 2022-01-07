import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import api from "../../shared/Api";


// **** Action type **** //
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'


// **** Action creator **** //
const logIn = createAction(LOG_IN, (user) => ({ user }))
const logOut = createAction(LOG_OUT, (user) => ({ user }))


// **** Initial data **** //
const initialState = {
  user: null,
}

// **** Middleware **** //

const joinDB = (email, password, nickname, mbti) => {
  return async function (dispatch, getState, { history }) {
    const user = {
      username: email,
      nickname: nickname,
      password: password,
      mbti: mbti
    }
    await api.post('/api/user/signup',user).then(function(response){
      history.push('/login')
      window.alert('회원가입 성공!')
    })
    .catch((err) => {
      console.log(err.response)
      window.alert('회원가입에 문제가 생겼습니다')
    })
    };
};


const logInDB = (email, password) => {
  return async function (dispatch, getState, { history }) {
    const user = {
      username: email,
      password: password
      
    }
    await api.post('/api/user/login',user).then(function(response){
      sessionStorage.setItem('userId', response.data.userId)
      sessionStorage.setItem('nickname', response.data.nickname)
      sessionStorage.setItem('token', response.headers.authorization)
      sessionStorage.setItem('mbti', response.data.mbti);
      sessionStorage.setItem('level', response.data.level);
      sessionStorage.setItem('profile', response.data.profileImgUrl);
      dispatch(logIn({user_email:email, user_id: response.data.userId,
         nickname:response.data.nickname}))
      history.push('/main')

    })
    .catch((err) => {
      console.log(err.response)
      window.alert('로그인에 문제가 생겼습니다')
    })
  };
};

const logOutDB = () => {
  return async function (dispatch, getState, { history }) {
    localStorage.removeItem('userId')
    localStorage.removeItem('nickname')
    localStorage.removeItem('token')
    history.replace("/login")
    dispatch(logOut())
  };
};

const kakaoLogin = (code) => {
  return async function(dispatch, getState, { history }){
    await api.get(`/user/kakao/callback?code=${code}`).then(function(response){
      console.log(response)
      sessionStorage.setItem('userId', response.data.userId)
      sessionStorage.setItem('nickname', response.data.nickname)
      sessionStorage.setItem("token", response.headers.authorization);
      sessionStorage.setItem('mbti', response.data.mbti);
      sessionStorage.setItem('level', response.data.level);
      sessionStorage.setItem('profile', response.data.profileImgUrl);
      dispatch(logIn({ 
        user_id: response.data.userId,
        nickname:response.data.nickname,
        mbti: response.data.mbti,
        profile: response.data.profileImgUrl,
        level: response.data.level}))
      history.replace('/main')
    })
    .catch((err) => {
      window.alert('소셜로그인 에러', err);
      history.replace('/login');
    })
  };
};

const editDB = (nickname, mbti) => {
  return async function(dispatch, getState, { history }){
    const token = sessionStorage.getItem('token')
    const user_info = {
      nickname: nickname,
      mbti: mbti
    }
    await api.post('/mypage/profile', user_info, {
      headers : {Authorization:token,
        'Content-Type': 'application/json;charset=UTF-8'}
    }).then(function(response){
      console.log(response)
      sessionStorage.removeItem('nickname')
      sessionStorage.setItem('nickname', response.data.nickname)
      history.push('/MyPage')
    })
    .catch((err) => {
      console.log(err.response)
    })
  }
}

// **** Reducer **** //
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = ""
      }),
  },
  initialState
)

// **** Export **** //
const actionCreators = {
  joinDB,
  logInDB,
  logOutDB,
  editDB,
  logOut,
  logIn,
  kakaoLogin,
}

export { actionCreators }
