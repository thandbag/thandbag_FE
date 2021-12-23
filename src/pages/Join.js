import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements/TbIndex";
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
        <Grid margin="300px 0px 0px 0px" align="center">
        <Text bold>회원가입</Text>
        <FormGroup>
            <input  className={`${email.length > 0 && !isEmail ? 'has-error' : 'success'}`} value={email} onChange={onChangeEmail} placeholder="ID"></input>
            {email.length > 0 && !isEmail && <p className="validation">올바른 이메일 형식을 입력해주세요.</p>}
            <input type="password" className={`${password.length > 0 && !isPassword ? 'has-error' : 'success'}`} value={password} onChange={onChangePassword} placeholder="Password"></input>
            {password.length > 0 && !isPassword && <p className="validation">8자 이상의 영문과 숫자 조합을 입력해주세요.</p>}
            <input type="password" className={`${passcheck.length > 0 && !isPasscheck ? 'has-error' : 'success'}`} value={passcheck} onChange={onChangePasscheck} placeholder="PasswordCheck"></input>
            {passcheck.length > 0 && !isPasscheck && <p className="validation">비밀번호가 다릅니다.</p>}
            <input className={`${nickname.length > 0 && !isNickname ? 'has-error' : 'success'}`} value={nickname} onChange={onChangeNick} placeholder="Nickname"></input>
            {nickname.length > 0 && !isNickname && <p className="validation">올바른 닉네임 형식을 입력해주세요.</p>}
            <select className="dropdown">
                          <option value="0">Holidays</option>
                          <option value="1">Blockchain</option>
                          <option value="2">Wallpapers</option>
                          <option value="3">3DRenders</option>
                          <option value="4">Textures&Patterns</option>
                          <option value="5">Architecture</option>
                          <option value="6">Experimental</option>
                          <option value="7">Nature</option>
                          <option value="8">Business&Work</option>
                          <option value="9">Fashion</option>
                          <option value="10">Food&Drink</option>
                          <option value="11">Health&Wellness</option>
                          <option value="12">CurrentEvents</option>
                          <option value="13">People</option>
                          <option value="14">Interiors</option>
                        </select>
        </FormGroup>
        <Button _onClick={clickJoin} width="300px" text="회원가입"></Button>
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
    }
    .has-error {
        border: 1px solid #e25c3d;
        outline: none;
        box-sizing: border-box;
        width: 300px;
        font-size: 17px;
        outline: none;
        &:focus {
            border: 1px solid #e25c3d;
            outline: none;
            box-sizing: border-box;
            width: 300px;
            font-size: 17px;
            outline: none;
        }
    }
    .validation {
        font-size: 12px;
        color: #e25c3d;
    }
`;

export default Join;
