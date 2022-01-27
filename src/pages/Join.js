import React from "react";
import styled from "styled-components";

import { Grid, Text, Input, Image, Button, Select } from "../elements/TbIndex";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

import thandbag_logo from "../static/icons/thandbag_logo.svg";
import { useSpring, animated } from "@react-spring/web";
import Swal from "sweetalert2";

const Join = (props) => {
  const dispatch = useDispatch();

  // 이메일, 비밀번호, 닉네임 상태관리//
  const [email, setEmail] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passcheck, setPasscheck] = React.useState("");
  const [mbti, setMbti] = React.useState(0);

  // 유효성검사 체크//
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasscheck, setIsPasscheck] = React.useState(false);
  const [isNickname, setIsNickname] = React.useState(false);

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

  const onChangePasscheck = (e) => {
    const currentPasscheck = e.target.value;
    setPasscheck(currentPasscheck);

    if (password !== currentPasscheck) {
      setIsPasscheck(false);
    } else {
      setIsPasscheck(true);
    }
  };

  const onChangeNick = (e) => {
    const nickRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,6}$/;
    const currentNickname = e.target.value;
    setNickname(currentNickname);

    if (!nickRegex.test(currentNickname)) {
      setIsNickname(false);
    } else {
      setIsNickname(true);
    }
  };

  const handleClick = (e) => {
    setMbti(e.target.value);
  };

  const clickJoin = () => {
    if (
      email == "" ||
      password === "" ||
      passcheck === "" ||
      nickname == "" ||
      mbti === 0
    ) {
      Swal.fire({
        icon: 'warning',
        title: '앗!',
        text: '빈값을 다 채워주세요'
      })
      return;
    } else {
      dispatch(
        userActions.joinDB(email, password, nickname, mbti)
      );
    }
  };

  const fadeIn = useSpring({
    config: {
      duration: 300,
    },
    width: "100%",
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <>
      <animated.div style={fadeIn}>
        <Grid height="100vh" flex="flex" justify="center" direction="column">
          <Grid margin="3vh 0" align="center">
            <Image
              shape="logo"
              width="200px"
              height="87px"
              src={thandbag_logo}
            ></Image>
          </Grid>
          <FormGroup>
            <Grid margin="30px 0px 0px 0px">
              <Input
                boxSizing="border-box"
                size="17px"
                bg="#FBF7F7"
                color="#FF5454"
                radius="10px"
                padding="10px"
                value={email}
                _onChange={onChangeEmail}
                height="47px"
                width="300px"
                placeholder="아이디"
              ></Input>
              {email.length > 0 && !isEmail && (
                <p className="validation">올바른 이메일 형식을 입력해주세요.</p>
              )}
            </Grid>
            <Grid margin="20px 0px 0px 0px">
              <Input
                boxSizing="border-box"
                size="17px"
                bg="#FBF7F7"
                color="#FF5454"
                radius="10px"
                padding="10px"
                value={nickname}
                _onChange={onChangeNick}
                height="47px"
                width="300px"
                placeholder="닉네임"
              ></Input>
              {nickname.length > 0 && !isNickname && (
                <p className="validation">올바른 닉네임 형식을 입력해주세요.</p>
              )}
            </Grid>
            <Grid margin="20px 0px 0px 0px">
              <Input
                boxSizing="border-box"
                size="17px"
                bg="#FBF7F7"
                color="#FF5454"
                radius="10px"
                padding="10px"
                type="password"
                value={password}
                _onChange={onChangePassword}
                height="47px"
                width="300px"
                placeholder="비밀번호"
              ></Input>
              {password.length > 0 && !isPassword && (
                <p className="validation">
                  8자 이상의 영문과 숫자, 특수문자 조합을 입력해주세요.
                </p>
              )}
            </Grid>
            <Grid margin="20px 0px 0px 0px">
              <Input
                boxSizing="border-box"
                size="17px"
                bg="#FBF7F7"
                color="#FF5454"
                radius="10px"
                padding="10px"
                type="password"
                value={passcheck}
                _onChange={onChangePasscheck}
                height="47px"
                width="300px"
                placeholder="비밀번호 확인"
              ></Input>
              {passcheck.length > 0 && !isPasscheck && (
                <p className="validation">비밀번호가 다릅니다.</p>
              )}
            </Grid>
            <Grid margin="20px 0px 0px 0px">
              <Select
                value={mbti}
                bg="#fbf7f7"
                _onChange={handleClick}
                height="47px"
                width="300px"
              ></Select>
            </Grid>
          </FormGroup>
          <Grid margin="6vh 0 0 0" align="center">
            <Button
              login
              _onClick={clickJoin}
              width="220px"
              height="60px"
              text="회원가입 완료"
            ></Button>
          </Grid>
          <Grid flex="flex;" align="center" margin="30px 0 0 0">
            <Text color="#C4C4C4">이미 계정이 있으신가요?</Text>
            <JoinLink
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </JoinLink>
          </Grid>
        </Grid>
      </animated.div>
    </>
  );
};

const FormGroup = styled.div`
  .dropdown {
    width: 300px;
    height: 44px;
  }
  .validation {
    margin-top: 5px;
    font-size: 11px;
    color: #e25c3d;
    font-family: "NotoSansCJK";
  }
`;

const JoinLink = styled.p`
  color: #767676;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out,
    opacity 0.1s ease-in-out;
  text-decoration: underline;
  font-family: "KOTRAHOPE";
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #111111;
  }
`;

export default Join;
