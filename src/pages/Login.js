import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/TbIndex";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import kakao from "../static/icons/kakao.svg";

const Login = (props) => {
  const dispatch = useDispatch();
  const API_key = '2bbe979f5fff3c4ab9f79ad6a7be6729';
  const Redirect_URI = 'http://localhost:3000/user/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_key}&redirect_uri=${Redirect_URI}&response_type=code`;

  // 이메일, 비밀번호 상태관리//
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // 유효성검사 체크//
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);

  const onChangeEmail = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (!emailRegex.test(currentEmail)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const currentPassword = e.target.value;
    setPassword(currentPassword);

    if (!passwordRegex.test(currentPassword)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const clickLogin = () => {
    if (email == "" || password === "") {
      window.alert("Please fill in all blanks");
      return;
    } else {
      dispatch(userActions.logInDB(email, password));
    }
  };

  const clickSocial = () => {
    return window.location.href= KAKAO_AUTH_URL
  };

  return (
    <>
      <Grid margin="70px 0 0 0" flex="flex; align-items:center; flex-direction: column">
        <Image shape="circle" Isize="250"></Image>

        <FormGroup>
            <Grid margin="30px 0px 20px 0px">
                <Input boxSizing="border-box" size="17px" bg="#FBF7F7" color="#FF5454" radius="10px" padding="10px" value={email} _onChange={onChangeEmail} height="47px" width="300px" placeholder="아이디"></Input>
                {email.length > 0 && !isEmail && (<p className="validation">올바른 이메일 형식을 입력해주세요.</p>)}
            </Grid>
            <Grid>
                <Input boxSizing="border-box" size="17px" bg="#FBF7F7" color="#FF5454" radius="10px" padding="10px" type="password" value={password} _onChange={onChangePassword} height="47px" width="300px" placeholder="비밀번호"></Input>
                {password.length > 0 && !isPassword && (<p className="validation">8자 이상의 영문과 숫자, 특수문자 조합을 입력해주세요.</p>)}
            </Grid>
        </FormGroup>
        <Grid  margin="100px 0 0 0" align="center">
            <Button login _onClick={clickLogin} height="60px" width="220px" text="로그인하기"></Button>
            <Button social _onClick={clickSocial} margin="20px 0 0 0" height="60px" width="220px"><Icon/>&nbsp;카카오톡으로 로그인</Button>
            
        </Grid>
        <Grid flex="flex" align="center" margin="10px 0 0 0">
            <Text color="#C4C4C4" >생드백 회원이 아니신가요?&nbsp;</Text>
                <JoinLink onClick={() => {
                    history.push('/join')
                    }}>
                    회원가입
                </JoinLink>
        </Grid>
      </Grid>
    </>
  );
};

const FormGroup = styled.div`
  .validation {
    margin-top: 5px;
    font-size: 12px;
    font-family: 'NotoSansCJK';
    color: #e25c3d;
  }
`;


const JoinLink = styled.p`
  color: #767676;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out,
  opacity 0.1s ease-in-out;
  text-decoration: underline;
  font-family: 'KOTRAHOPE';
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #111111;
  }
`;

const Icon = styled.div`
  display: inline-block;
  position: absolute;
  left: 115px;
  width: 27px;
  height: 27px;
  background-image: url(${kakao});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;


export default Login;
