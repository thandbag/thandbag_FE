import React from "react";
import styled from "styled-components";
import {Grid, Text, Input, Button} from "../elements/TbIndex"
import {useDispatch} from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {

    const dispatch = useDispatch();

    // 이메일, 비밀번호 상태관리//
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // 유효성검사 체크//
    const [isEmail, setIsEmail] = React.useState(false)
    const [isPassword, setIsPassword] = React.useState(false)

    const onChangeEmail = (e) => {
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const currentEmail = e.target.value
        setEmail(currentEmail)

        if(!emailRegex.test(currentEmail)){
            setIsEmail(false)
        }else {
            setIsEmail(true)
        }
        console.log(email)
        console.log(isEmail)
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

    const clickLogin = () => {
        if (email == '' || password === '') {
            window.alert('Please fill in all blanks')
            return
        } else {
            dispatch(userActions.logInDB(email, password))
        }
    }


    return (
        <>
            <Grid align="center">
                <Grid>
                    <Text bold>로그인</Text>
                </Grid>
                <Grid>
                    <FormGroup>
                        <input  className={`${email.length > 0 && !isEmail ? 'has-error' : 'success'}`} value={email} onChange={onChangeEmail} placeholder="ID"></input>
                        {/* <Input value={email} _onChange={onChangeEmail} placeholder="ID" margin="0px 0px 10px 0px" width="300px" boxSizing="border-box"></Input> */}
                        {email.length > 0 && !isEmail && <p className="validation">올바른 이메일 형식을 입력해주세요.</p>}

                        <input className={`${password.length > 0 && !isPassword ? 'has-error' : 'success'}`} value={password} onChange={onChangePassword} placeholder="Password"></input>
                        {/* <Input value={password} type="password" _onChange={onChangePassword} placeholder="Password" margin="0px 0px 10px 0px" width="300px" boxSizing="border-box"></Input> */}
                        {password.length > 0 && !isPassword && <p className="validation">8자 이상의 영문과 숫자, 특수문자 조합을 입력해주세요.</p>}
                    </FormGroup>
                </Grid>
                <Grid>
                    <Button _onClick={clickLogin} width="300px" text="로그인"></Button>
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

export default Login;
