import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Image,Button } from "../elements/TbIndex";
import {useDispatch} from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

const Join = (props) => {

    const dispatch = useDispatch();

    // 이메일, 비밀번호, 닉네임 상태관리//
    const [email, setEmail] = React.useState('');
    const [nickname, setNickname] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passcheck, setPasscheck] = React.useState('');

    // 유효성검사 체크//
    const [isEmail, setIsEmail] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [isPasscheck, setIsPasscheck] = React.useState(false);
    const [isNickname, setIsNickname] = React.useState(false);

    const onChangeEmail = (e) => {
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const currentEmail = e.target.value
        setEmail(currentEmail)

        if(!emailRegex.test(currentEmail)){
            setIsEmail(false)
        }else {
            setIsEmail(true)
        }
    }

    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        const currentPassword = e.target.value
        setPassword(currentPassword)

        if(!passwordRegex.test(currentPassword)){
            setIsPassword(false)
        }else {
            setIsPassword(true)
        }
    }

    const onChangePasscheck = (e) => {
        const currentPasscheck = e.target.value
        setPasscheck(currentPasscheck)

        if(password !== currentPasscheck) {
            setIsPasscheck(false)
        }else {
            setIsPasscheck(true)
        }
    }

    const onChangeNick = (e) => {
        const nickRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,6}$/;
        const currentNickname = e.target.value
        setNickname(currentNickname)

        if(!nickRegex.test(currentNickname)){
            setIsNickname(false)
        }else {
            setIsNickname(true)
        }
    }

    const clickJoin = () => {
        if (email == '' || password === '' || passcheck === '' || nickname == '') {
            window.alert('Please fill in all blanks')
            return
        } else {
            dispatch(userActions.joinDB(email, password, nickname))
        }
    }

    return (
        <>
        <Grid margin="70px 0 0 0" flex="flex; align-items:center; flex-direction: column">
            <Image shape="circle" size="300"></Image>
            <FormGroup>
                <Grid margin="30px 0px 0px 0px">
                    <input  className={`${email.length > 0 && !isEmail ? 'has-error' : 'success'}`} value={email} onChange={onChangeEmail} placeholder="ID"></input>
                    {email.length > 0 && !isEmail && <p className="validation">올바른 이메일 형식을 입력해주세요.</p>}
                </Grid>
            <Grid margin="20px 0px 0px 0px">
                    <input type="password" className={`${password.length > 0 && !isPassword ? 'has-error' : 'success'}`} value={password} onChange={onChangePassword} placeholder="Password"></input>
                    {password.length > 0 && !isPassword && <p className="validation">8자 이상의 영문과 숫자 조합을 입력해주세요.</p>}
            </Grid>
                <Grid margin="20px 0px 0px 0px">
                    <input type="password" className={`${passcheck.length > 0 && !isPasscheck ? 'has-error' : 'success'}`} value={passcheck} onChange={onChangePasscheck} placeholder="PasswordCheck"></input>
                    {passcheck.length > 0 && !isPasscheck && <p className="validation">비밀번호가 다릅니다.</p>}

                </Grid>
                <Grid margin="20px 0px 0px 0px">
                    <input className={`${nickname.length > 0 && !isNickname ? 'has-error' : 'success'}`} value={nickname} onChange={onChangeNick} placeholder="Nickname"></input>
                    {nickname.length > 0 && !isNickname && <p className="validation">올바른 닉네임 형식을 입력해주세요.</p>}
                </Grid>
                <Grid margin="20px 0px 0px 0px">
                <select className="dropdown">
                    <option value="0">MBTI 선택</option>
                    <option value="1">ENFJ</option>
                    <option value="2">ENFP</option>
                    <option value="3">ENTJ</option>
                    <option value="4">ENTP</option>
                    <option value="5">ESFJ</option>
                    <option value="6">ESFP</option>
                    <option value="7">ESTJ</option>
                    <option value="8">ESTP</option>
                    <option value="9">INFJ</option>
                    <option value="10">INFP</option>
                    <option value="11">INTJ</option>
                    <option value="12">INTP</option>
                    <option value="13">ISFJ</option>
                    <option value="14">ISFP</option>
                    <option value="15">ISTJ</option>
                    <option value="16">ISTP</option>
                </select>
                </Grid>
                
            </FormGroup>
            <Grid  margin="50px 0 0 0" align="center">
                <Button _onClick={clickJoin} width="300px" text="회원가입"></Button>
            </Grid>
            <Grid align="center" margin="10px 0 0 0">
            <Question>이미 계정이 있으신가요?&nbsp;</Question>
                <JoinLink onClick={() => {
                      history.push('/login')
                    }}>
                    로그인
                </JoinLink>
        </Grid>
        
        </Grid>
        </>
    )
}

const FormGroup = styled.div`
    
    .success {
        box-sizing: border-box;
        width: 300px;
        font-size: 17px;
        outline: none;
        padding: 10px 5px 10px 5px;
    }
    .has-error {
        border: 1px solid #e25c3d;
        outline: none;
        box-sizing: border-box;
        width: 300px;
        font-size: 17px;
        outline: none;
        padding: 10px 5px 10px 5px;
        &:focus {
            border: 1px solid #e25c3d;
            outline: none;
            box-sizing: border-box;
            width: 300px;
            font-size: 17px;
            outline: none;
            padding: 10px 5px 10px 5px;
        }
    }
    .dropdown {
        width: 300px;
        height: 44px;
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
`;

const JoinLink = styled.a`
  color: #767676;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  text-decoration: underline;

  &:hover {
    color: #111111;
  }
`;

export default Join;
