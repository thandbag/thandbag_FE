import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button, Image } from "../elements/TbIndex";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";


const Login = (props) => {
  const dispatch = useDispatch();

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
    console.log(email);
    console.log(isEmail);
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

  return (
    <>
      <Grid margin="70px 0 0 0" flex="flex; align-items:center; flex-direction: column">
        <Image shape="circle" size="300"></Image>

        <FormGroup>
            <Grid margin="30px 0px 20px 0px">
                <input className={`${email.length > 0 && !isEmail ? "has-error" : "success"}`} value={email} onChange={onChangeEmail}placeholder="ID"></input>
                {email.length > 0 && !isEmail && (<p className="validation">올바른 이메일 형식을 입력해주세요.</p>)}
            </Grid>
            <Grid>
                <input type="password" className={`${password.length > 0 && !isPassword ? "has-error" : "success"}`} value={password} onChange={onChangePassword} placeholder="Password"></input>
                {password.length > 0 && !isPassword && (<p className="validation">8자 이상의 영문과 숫자, 특수문자 조합을 입력해주세요.</p>)}
            </Grid>
        </FormGroup>
        <Grid  margin="100px 0 0 0" align="center">
            <Button _onClick={clickLogin} width="300px" text="로그인"></Button>
            <Button _onClick={clickLogin} margin="20px 0 0 0" width="300px" text="소셜로그인"></Button>
        </Grid>
        <Grid align="center" margin="10px 0 0 0">
            <Question>생드백 회원이 아니신가요??&nbsp;</Question>
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

  .success {
    box-sizing: border-box;
    width: 300px;
    font-size: 17px;
    font-family: 'KOTRAHOPE';
    outline: none;
    padding: 10px 5px 10px 5px;
  }
  .has-error {
    border: 1px solid #e25c3d;
    outline: none;
    box-sizing: border-box;
    width: 300px;
    font-size: 17px;
    font-family: 'KOTRAHOPE';
    outline: none;
    padding: 10px 5px 10px 5px;

    &:focus {
      border: 1px solid #e25c3d;
      outline: none;
      box-sizing: border-box;
      width: 300px;
      font-size: 17px;
      font-family: 'KOTRAHOPE';
      outline: none;
      padding: 10px 5px 10px 5px;
    }
  }
  .validation {
    margin-top:5px;
    font-size: 12px;
    color: #e25c3d;
  }
`;

const Question = styled.p`
  display: inline-block;
  margin: 0;
`

const JoinLink = styled.a`
  color: #767676;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  text-decoration: underline;

  &:hover {
    color: #111111;
  }
`


export default Login;
